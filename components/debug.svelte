<script>
  /*
  ---------------------------------------------
    debug css – 1.0.4
    dev only
  ---------------------------------------------
  */

  import { afterUpdate } from 'svelte'

  export let guides, raster
  export let style = ''

  let blocks = false

  afterUpdate(_ => {
    if (blocks) document.body.classList.add('debug')
    else document.body.classList.remove('debug')
  })
</script>

<!-- -------------------------------------- -->

{#if guides}
  <section>
    {#each guides as { type, pos }}
      <div
        class="guide {type === 'top' ? 'horizontal' : 'vertical'}"
        style="{type}: {pos}"></div>
    {/each}
  </section>
{/if}
{#if raster}
  <div class="raster"></div>
{/if}

<div {style} class="panel">
  <label style="margin-right: .8rem">
    <input type="checkbox" bind:checked="{blocks}" />
    debug
  </label>
  <label>
    <input type="checkbox" bind:checked="{raster}" />
    raster
  </label>
</div>

<!-- -------------------------------------- -->

<style>
  :host {
    height: 100%;
  }

  .panel {
    position: fixed;
    padding: 0 0.4rem;
    background: var(--back);
    font-family: var(--font-ui, 'FiraCode-Retina');
    font-size: var(--code, 1.2rem);
    z-index: 30;
  }

  .panel label {
    cursor: pointer;
  }

  :global(.debug *) {
    outline: 1px solid hsla(304, 37%, 53%, 0.1);
  }

  :global(.debug) .guide {
    --ruler-clr: rgba(62, 119, 163, 0.2);
    position: fixed;
    background: var(--ruler-clr);
    outline: none;
    z-index: 30;
  }

  :global(.debug) .horizontal {
    width: 100%;
    height: 0.1rem;
    left: 0;
  }

  :global(.debug) .vertical {
    width: 0.1rem;
    height: 100vh;
    top: 0;
  }

  /* prettier-ignore */
  .raster {
    --raster-clr: hsla(206, 100%, 56%, 0.2);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    z-index: 30;
    background-image: linear-gradient(transparent 7px,var(--raster-clr) 8px,transparent 8px),linear-gradient(90deg,transparent 7px,var(--raster-clr) 8px,transparent 8px);
    background-size: 8px 8px;
    background-position: left top;
    background-repeat: repeat;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
</style>
