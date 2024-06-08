<script lang="ts">
  import Body from "@/assets/access-denied/body.png";
  import Head from "@/assets/access-denied/head.png";
  import Hand from "@/assets/access-denied/hand.png";
  import { play, stop } from '@/services/sound';
  import { onMount } from "svelte";

  let dialog: HTMLDialogElement;

  onMount(() => {
    dialog.getRootNode()
        .addEventListener(
            'click',
            e=>{
                const target = (e.target as HTMLElement).closest('a, input[type="button"], input[type="submit"], button');
                if (!target || target.closest('[data-interactive]')) return;
                e.preventDefault();
                show();
            },
            { capture:true });
  });

  export async function show(){
    if (!dialog) return;
    dialog.showModal();
    dialog.addEventListener('close', () => stop('accessDenied'), {once: true});
    await play('accessDenied');
    dialog.close();
  }
</script>

<dialog bind:this={dialog}>
  <div class="title-bar">
    <div class="title-bar-text">Ah Ah Ah, you didn't say the magic word!</div>
  </div>
  <div class="content">
    <div class="nedry">
      <img class="nedry-body" src={Body} alt=""/>
      <img class="nedry-head" src={Head} alt=""/>
      <img class="nedry-hand" src={Hand} alt=""/>
    </div>
  </div>
</dialog>

<style>
  .nedry {
    position: relative;
    top: 0;
    left: 0;
    @media (max-width: 767px){
      & {
        left: calc(100vw / 2 - 250px);
      }
    }
  }

  .nedry-body {
    position: relative;
    top: 0;
    left: 0;
  }

  .nedry-head {
    position: absolute;
    top: 35px;
    left: 140px;
  }

  .nedry-hand {
    position: absolute;
    top: 155px;
    left: 265px;
    animation: handFrames linear 1s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
    -webkit-animation: handFrames linear 0.7s;
    -webkit-animation-iteration-count: infinite;
    -webkit-transform-origin: 50% 100%;
  }

  @keyframes handFrames {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(14deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }


  /* Dialog */
  dialog {
    font-family: Arial, sans-serif;
    background-color: #c0c0c0; /* Windows 3.11 dialog background color */
    border: 2px solid #000;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #888;
    padding: 10px;
    display: block;
    opacity: 0;
    scale: 0;
    transition: scale 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  /* Styles for when modal is visible */
  dialog[open] {
    scale: 1;
    opacity: 1;
  }
  
  .title-bar {
    background-color: #008080; /* Windows 3.11 title bar background color */
    color: #ffffff; /* Windows 3.11 title bar text color */
    padding: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .title-bar-text {
    font-weight: bold;
  }
  
  .content {
    padding: 10px;
    overflow: hidden;
  }

</style>
