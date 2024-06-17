<svelte:options customElement="wvn-drink" />

<script lang="ts">
  import { delay, on } from "@/helpers/events";
  import { konami } from "@/helpers/konami";
  import { onMount } from "svelte";

  let button: HTMLButtonElement;
  const setKonami = () => import("@/services/firebase").then(({setKonami}) => setKonami());
  const setVeteran = () => import("@/services/firebase").then(({setVeteran}) => setVeteran());

  const hint = new URL(location.href).searchParams.get('drink');
  if (typeof hint === 'string') localStorage.setItem('wvn-drink', '1');
  const visible = !!localStorage.getItem('wvn-drink');

  onMount(async ()=>{
    if (hint !== 'help') return;

    button.classList.add('highlight');

    for(let attempt = 0; attempt < 10; attempt++) {
      const bottom = document.body.scrollHeight;
      if (window.innerHeight + window.scrollY < bottom){
        await scroll(bottom);
      }

      await delay(100);
    }
  });
  document.body.style.perspective = "600px";  

  function scroll(top = 0) {
    scrollTo({ top, behavior: "smooth" });
    return Promise.any([on('scrollend'), delay(1000)]);
  }

  let started = false;
  async function start(e?: MouseEvent) {
    button.disabled = true;
    const { signin } = await import("@/services/firebase");
    try {
      if (!await signin()) {
        button.disabled = false;
        return;
      }
    } catch(err) {
      alert('Le support de Safari est expérimental...\nVeuillez re-cliquer sur "π" pour continuer 😅');
      button.disabled = false;
      return;
    }

    const next = document.getElementById("__next");
    if (started || !next || document.querySelector("wvn-legacy")) return;
    await import("../Scene.svelte");
    if (screenTop) await scroll();
    if (started) return;
    started = true;

    const boxSizing = window.getComputedStyle(next).boxSizing;
    next.style.boxSizing = boxSizing;
    const card = document.createElement("wvn-legacy");
    next.replaceWith(card);
    card.appendChild(next);
    if (!e) await setKonami();
    if (e?.ctrlKey && e?.shiftKey) await setVeteran();
  }

  konami(start);
</script>

{#if visible}
  <button on:click={start} bind:this={button}>π</button>
{/if}

<style lang="scss">
  button {
    all: unset;
    position: absolute;
    padding: 10px;
    right: 0;
    bottom: 0;
    cursor: pointer;
    color: #000;

    &:global([disabled]) {
      display: none;
    }

    &:global(.highlight) {
      font-size: 500%;
      animation: rainbow_animation 4s ease-in-out infinite, resize 3s ease-in-out infinite;

      &:hover{
        font-weight: normal;
      }
    }

    @keyframes resize {
      0%,100% {
          font-size: 300%;
      }

      50% {
          font-size: 600%;
      }
    }

    @keyframes rainbow_animation {
      0% {
        color:#6666ff;
      }

      25% {
        color: #0099ff;
      }

      50%{
        color: #00ff00;
      }

      75%{
        color: #ff3399;
      }

      100%{
        color: #6666ff;
      }
    }

    &:hover{
      font-weight: bold;
    }
  }
</style>
