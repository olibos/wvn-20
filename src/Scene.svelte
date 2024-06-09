<svelte:options customElement="wvn-legacy" />

<script lang="ts">
  import Card from "@/components/Card.svelte";
  import Layout from "@/components/Layout.svelte";
  import Main from "@/styles/Main.svelte";
  import PortalCss from "@/styles/PortalCss.svelte";
  import { play } from "@/services/sound";
  import Olivier from "@/images/olivier.jpg";
  import confetti from "canvas-confetti";
  import { setEasterEgg, isJoining, setJoining } from "./services/firebase";
  import Button from "./components/Button.svelte";

  let flip = false;
  let choices: HTMLElement;
  document.body.style.perspective = "600px";

  play("timeMachine");
  requestIdleCallback(() => (flip = true));

  let joinController: AbortController, absentController: AbortController;
  let joining:boolean|undefined = undefined;
  isJoining().then(j => joining = j);
  async function join() {
    if (joinController && !joinController.signal.aborted) return;
    joinController = new AbortController();
    absentController?.abort();
    setJoining(true);
    joining = true;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (!joinController.signal.aborted) {
        requestAnimationFrame(frame);
      }
    })();

    await play("ok", joinController.signal);
    joinController.abort();
  }

  async function absent() {
    if (absentController && !absentController.signal.aborted) return;
    absentController = new AbortController();
    joinController?.abort();
    setJoining(false);
    joining = false;
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    let skew = 1;
    (function frame() {
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (!absentController.signal.aborted) {
        requestAnimationFrame(frame);
      }
    })();

    await play("ko", absentController.signal);
    absentController.abort();
  }

  function easterEgg(){
    choices.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    setEasterEgg();
    join();
  }
</script>

<Card {flip}>
  <svelte:fragment slot="front">
    <slot />
  </svelte:fragment>
  <svelte:fragment slot="back">
    <Layout on:easterEgg={easterEgg}>
      <div class="form" data-interactive>
        <h1 class="TD_Module_HeaderA">#WvnNews - Restons connectés !</h1>
        <div class="row">
          <div class="column">
            <h2 class="TEXTLEVEL4">Bienvenue à Olivier BOSSAER</h2>
            <img src={Olivier} alt="" />
            Olivier est développeut .Net. Il vient renforcer l'équipe AFSCA sur le
            projet Sanitel.
          </div>
        </div>
        <br />
        <h1 class="TD_Module_HeaderA">🥂 Drink 🎉</h1>
        <p class="TEXTLEVEL1">
          Pour célébrer son arrivée, il vous invite à prendre "un" verre le xx septembre (2024 😜).<br />
          
          Afin d'assurer le ravitaillement en suffisance merci de confirmer votre présence ou non via les boutons ci-dessous. 
        </p>
        <div class="choices" bind:this={choices}>
          <Button on:click={join} type="success" active={joining === true}>Présent</Button>
          <Button on:click={absent} type="danger"  active={joining === false}>Absent</Button>
        </div>
      </div>
    </Layout>
    <!-- styles -->
    <Main />
    <PortalCss />
  </svelte:fragment>
</Card>

<style lang="scss">
  :host {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .form {
    border-bottom: #0071bc 1px groove;
    min-height: 500px;
  }

  .column{
    width: 50%;
    margin: 0 auto;
    img {
      display: block;
      max-width: 80%;
      margin: 0 auto;
    }
  }
  // .row {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  // }

  // .column {
  //   img {
  //     display: block;
  //     max-width: 80%;
  //     margin: 0 auto;
  //   }
  // }

  .choices{
    text-align: center;
    background-color: #C1CADB;
    border-radius: 10px;
    --color-white: #fff;
    --color-1: #350048;
    --color-2: rgba(255, 255, 255, 0.05);
    --color-3: rgba(0, 0, 0, 0.2);
    --color-4: rgba(255, 255, 255, 0.1);
    --color-gradient-1: rgba(255,255,255, 0.15);
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    @media (max-width: 767px){
      & {
        max-width: calc(100vw - 10px);
      }
    }
  }
</style>
