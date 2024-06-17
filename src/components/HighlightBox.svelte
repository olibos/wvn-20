<div class="gradient-border">
    <div class="content">
        <slot />
    </div>
</div>

<style lang="scss">
    .gradient-border {
  --border-width: 3px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #fff;
  border-radius: var(--border-width);
  isolation: isolate;

  :global(.TEXTLEVEL1), :global(p){
    font-size: 1.5rem;
  }

  :global(.TEXTLEVEL4){
    font-size: 2rem;
  }

  &::before {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }
}

.content{
    padding:5px;
    background: #fff;
    border-radius: var(--border-width);
}

@keyframes moveGradient {
  50% {
    background-position: 100% 50%;
  }
}
</style>