<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let type: "success" | "danger" = "success";
    export let active = false;
    const dispatch = createEventDispatcher();
</script>
<button class:active={active} class:success={type === 'success'} class:danger={type === 'danger'} on:click|preventDefault={() => dispatch('click')}><span><slot /></span></button>

<style lang="scss">
  button {
    all: unset;
    cursor: pointer;
    position: relative;
    width: 155px;
    height: 30px;
    margin: 20px;
  }

  button span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-2);
    box-shadow: 0 15px 35px var(--color-3);
    border-top: 1px solid var(--color-4);
    border-bottom: 1px solid var(--color-4);
    border-radius: 30px;
    color: var(--color-white);
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.8s;
    backdrop-filter: blur(15px);
  }

  button:hover span, button.active span {
    letter-spacing: 3px;
  }

  button span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, var(--color-gradient-1), transparent);
    transform: skewX(45deg) translateX(0);
    transition: 0.8s;
  }

  button:hover span::before, button.active span::before {
    transform: skewX(45deg) translateX(200%);
  }

  button::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: red;
    border-radius: 10px;
    transition: 0.8s;
    transition-delay: 0s;
  }

  button:hover::before, button.active::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  button::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: red;
    border-radius: 10px;
    transition: 0.8s;
    transition-delay: 0s;
  }

  button:hover::after, button.active::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  button.danger::before,
  button.danger::after {
    background: #ff1f71;
    box-shadow:
      0 0 5px #ff1f71,
      0 0 15px #ff1f71,
      0 0 30px #ff1f71,
      0 0 60px #ff1f71;
  }

  button.info::before,
  button.info::after {
    background: #2bd2ff;
    box-shadow:
      0 0 5px #2bd2ff,
      0 0 15px #2bd2ff,
      0 0 30px #2bd2ff,
      0 0 60px #2bd2ff;
  }

  button.success::before,
  button.success::after {
    background: #1eff45;
    box-shadow:
      0 0 5px #1eff45,
      0 0 15px #1eff45,
      0 0 30px #1eff45,
      0 0 60px #1eff45;
  }
</style>
