<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: "success" | "danger" = "success";
  export let active = false;
  const dispatch = createEventDispatcher();
</script>

<button
  class:active
  class:success={type === "success"}
  class:danger={type === "danger"}
  on:click|preventDefault={() => dispatch("click")}
  ><span><slot /></span></button
>

<style lang="scss">
  button.success {
    --btn-color: #3cf;
    --btn-color-dark: #09c;
    --btn-glow: rgba(60, 255, 255, 0.6);
  }

  button.danger {
    --btn-color: #ff6347;
    --btn-color-dark: #e55347;
    --btn-glow: rgba(255, 99, 71, 0.6);
  }
  button {
    color: #fff;
    background-color: var(--btn-color);
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    font-size: 1.8rem;
    text-decoration: none;
    text-transform: none;
    border: none;
    padding: 6px 25px;
    cursor: pointer;
    margin: 10px;
    box-shadow: 0 0 0 0 var(--btn-glow);

    &:active,
    &:hover,
    &:focus {
      background-color: var(--btn-color-dark);
      color: #fff;
      border-color: transparent;
      text-decoration: none !important;
    }

    &.active {
      box-shadow: 0 0 10px 5px var(--btn-glow);
    }
  }
</style>
