import '@/polyfills/promise-with-resolvers';
import AccessDenied from "@/assets/access-denied/ahahah.mp3";
import TimeMachineOpus from "@/assets/sounds/time-machine.opus";
import TimeMachineOgg from "@/assets/sounds/time-machine.ogg";
import TimeMachineMp3 from "@/assets/sounds/time-machine.mp3";

type MimeType = `${string}/${string}`;

function getAudio(sources: Record<MimeType, string>): HTMLAudioElement;
function getAudio(source: string): HTMLAudioElement;
function getAudio(sources: Record<MimeType, string> | string): HTMLAudioElement{
    if (typeof sources === 'string') return new Audio(sources);

    const audio = new Audio();
    for(const [type, src] of Object.entries(sources)){
        const source = audio.appendChild(document.createElement("source"));
        source.type = type;
        source.src = src;
    }

    return audio;
}

const ressources= {
    accessDenied: getAudio(AccessDenied),
    timeMachine: getAudio({
        "audio/ogg; codecs=opus": TimeMachineOpus,
        "audio/ogg; codecs=vorbis": TimeMachineOgg,
        "audio/mp3": TimeMachineMp3,
    }),
}

export function play(sound: keyof typeof ressources): Promise<void>{
    const { promise, resolve } = Promise.withResolvers<void>();
    const audio = ressources[sound];
    const end = () => {
        audio.removeEventListener('pause', end);
        audio.removeEventListener('ended', end);
        audio.currentTime = 0;
        resolve();
    }

    audio.addEventListener('ended', end);
    audio.addEventListener('pause', end);
    audio.play();
    return promise;
}

export function stop(sound: keyof typeof ressources) {
    ressources[sound].pause();
}