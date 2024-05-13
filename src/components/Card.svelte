<script lang="ts">
  export let flip = false;
</script>

<div id="card" class:flip={flip}>
  <div id="front">
    <slot name="front" />
  </div>
  <div id="back">
    <slot name="back" />
  </div>
</div>

<style lang="scss">
  :host {
    perspective: 600px;
  }

  #card {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;

    position: relative;
    transition:
      width 1s linear,
      rotate 4s ease-in-out 1.5s;
    transform-style: preserve-3d;
  }

  #front,
  #back {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }

  #front {
    transition: opacity 10ms linear 5.5s;
  }


  #card.flip {
    width: 1000px;
    rotate: y 1620deg;

    #front {
      max-height: 100vh;
      overflow: hidden;
      opacity: 0;
    }
  }

  #card #back {
    rotate: y 180deg;
  }
</style>
