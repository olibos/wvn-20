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

    await scroll(document.documentElement.scrollHeight);
    button.classList.add('highlight');
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
    if (!await signin()) {
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
  <button on:click={start} bind:this={button} class:highlight={false}>π</button>
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
    transition: font-size 0.5s;

    &:global([disabled]) {
      display: none;
    }

    &.highlight {
      font-size: 500%;
      background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: rainbow_animation 6s ease-in-out infinite;
      background-size: 400% 100%;
    }

    @keyframes rainbow_animation {
      0%,100% {
          background-position: 0 0;
      }

      50% {
          background-position: 100% 0;
      }
    }

    &:hover{
      font-weight: bold;
    }
  }
</style>
