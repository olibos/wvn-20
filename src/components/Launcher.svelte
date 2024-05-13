<svelte:options customElement="wvn-drink" />

<script lang="ts">
  let button: HTMLButtonElement;
  document.body.style.perspective = "600px";  
  function scroll() {
    scrollTo({ top: 0, behavior: "smooth" });
    return new Promise((done) =>
      addEventListener("scrollend", done, { once: true })
    );
  }

  let started = false;
  async function start() {
    button.disabled = true;
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
  }
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
