import '@/polyfills/promise-with-resolvers';
import AccessDenied from "@/assets/access-denied/ahahah.mp3";
import OkMp3 from "@/assets/sounds/ok.mp3";
import OkOgg from "@/assets/sounds/ok.ogg";
import KoMp3 from "@/assets/sounds/ko.mp3";
import KoOgg from "@/assets/sounds/ko.ogg";
import TimeMachineOpus from "@/assets/sounds/time-machine.opus";
import TimeMachineOgg from "@/assets/sounds/time-machine.ogg";
import TimeMachineMp3 from "@/assets/sounds/time-machine.mp3";

type MimeType = `${string}/${string}`;

function getAudio(sources: Record<MimeType, string>): HTMLAudioElement;
function getAudio(source: string): HTMLAudioElement;
function getAudio(sources: Record<MimeType, string> | string): HTMLAudioElement{
    if (typeof sources === 'string') return new Audio(sources);

    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    for(const [type, src] of Object.entries(sources)){
        const source = audio.appendChild(document.createElement("source"));
        source.type = type;
        source.src = src;
    }

    return audio;
}

const ressources= {
    accessDenied: getAudio(AccessDenied),
    ok: getAudio({
        "audio/ogg": OkOgg,
        "audio/mp3": OkMp3
    }),
    ko: getAudio({
        "audio/ogg": KoOgg,
        "audio/mp3": KoMp3
    }),
    timeMachine: getAudio({
        "audio/ogg; codecs=opus": TimeMachineOpus,
        "audio/ogg; codecs=vorbis": TimeMachineOgg,
        "audio/mp3": TimeMachineMp3,
    }),
}

export function play(sound: keyof typeof ressources, signal?: AbortSignal): Promise<void>{
    const { promise, resolve } = Promise.withResolvers<void>();
    const audio = ressources[sound];
    const end = () => {
        audio.removeEventListener('pause', end);
        audio.removeEventListener('ended', end);
        signal?.removeEventListener('abort', end);
        audio.pause();
        audio.currentTime = 0;
        resolve();
    }

    signal?.addEventListener('abort', end);
    audio.addEventListener('ended', end);
    audio.addEventListener('pause', end);
    try{
        audio.play();
    }catch{
        // unable to play sound.
        resolve();
    }
    return promise;
}

export function stop(sound: keyof typeof ressources) {
    ressources[sound].pause();
}