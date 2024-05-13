<svelte:options customElement="wvn-legacy" />

<script>
  import Card from "@/components/Card.svelte";
  import AccessDenied from "@/components/AccessDenied.svelte";
  import Layout from "@/components/Layout.svelte";
  import Main from "@/styles/Main.svelte";
  import PortalCss from "@/styles/PortalCss.svelte";
  import { play } from "@/services/sound";
  import Olivier from "@/images/olivier.jpg";
  import Joao from "@/images/joao.jpg";
  export let flip = false;
  document.body.style.perspective = "600px";

  play("timeMachine");
  requestIdleCallback(() => (flip = true));
</script>

<Card {flip}>
  <svelte:fragment slot="front">
    <slot />
  </svelte:fragment>
  <svelte:fragment slot="back">
    <AccessDenied />
    <Layout>
      <div class="form" data-interactive>
        <h1 class="TD_Module_HeaderA">
          #WvnNews - Restons connectés !
        </h1>
        <div class="row">
          <div class="column">
            <h2 class="TEXTLEVEL4">Bienvenue à Olivier BOSSAER</h2>
            <img src={Olivier} alt="" />
            Olivier est développeut .Net. Il vient renforcer l'équipe AFSCA sur le
            projet Sanitel.
          </div>
          <div class="column">
            <h2 class="TEXTLEVEL4">Bienvenue à Joao DE OLIVEIRA</h2>
            <img src={Joao} alt="" />

            Joao est développeut Java. Il rejoint l'équipe Nokia.
          </div>
        </div>
        <br />
        <h1 class="TD_Module_HeaderA">
            🥂 Drink 🎉
        </h1>
        <p class="TEXTLEVEL1">
            Pour célébrer leur arrivée, ils vous invitent à les rejoindre pour un moment convivial autour d'un verre le xx septembre (2024 😜).<br />
            Ils sont impatients de vous accueillir pour partager avec vous cette occasion spéciale 🎉.
        </p>
      </div>
    </Layout>
    <!-- styles -->
    <Main />
    <PortalCss />
  </svelte:fragment>
</Card>

<style lang="scss">
    
  .form {
    border-bottom: #0071bc 1px groove;
    min-height: 500px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .column {
    img {
      display: block;
      max-width: 80%;
      margin: 0 auto;
    }
  }
</style>
