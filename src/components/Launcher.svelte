<svelte:options customElement="wvn-drink" />

<script lang="ts">
  import { konami } from "@/helpers/konami";
  import { setKonami, setVeteran } from "@/services/firebase";

  let button: HTMLButtonElement;
  document.body.style.perspective = "600px";  
  function scroll() {
    scrollTo({ top: 0, behavior: "smooth" });
    return new Promise((done) =>
      addEventListener("scrollend", done, { once: true })
    );
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

<button on:click={start} bind:this={button}>π</button>

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

    &:hover{
      font-weight: bold;
    }
  }
</style>
