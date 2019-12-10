<script>
  /*
  ---------------------------------------------
  	monitor – 1.0.4
  ---------------------------------------------
  */
  import Image from './lazyload/image.svelte'
  import TagSelect from './tag-select.svelte'

  export let src, selected

  $: multiple = src.includes(',')
  $: images = multiple && src.split(', ')
  $: names = multiple && images.map(url => url.split('-')[1])
  $: current = multiple ? images[names.indexOf(selected)] : src
</script>

<!-- -------------------------------------- -->

<div class="monitor ratio">
  <svg viewBox="0 0 4 3"></svg>
  <div class="stack">
    <div class="overlay"></div>
    <Image style="height:auto" bind:cdn="{current}" />
  </div>
</div>

{#if multiple}
  <TagSelect icon="image" bind:selected tags="{names}" />
{/if}

<!-- -------------------------------------- -->

<style>
  .monitor {
    --monitor-border: 5%;

    width: 100%;
    background: black;
    margin: 4rem 0;
    padding: var(--monitor-border);
    border-radius: 2.5vw;
    background: linear-gradient(
        105deg,
        black 65%,
        rgba(255, 255, 255, 0.15) 65%,
        transparent 85%
      ),
      linear-gradient(0deg, black 0%, black 100%);
    box-shadow: 0 1.2rem 0.6rem -0.6rem rgba(60, 60, 60, 0.9);
  }

  .stack {
    background: rgba(255, 255, 255, 0.2);
    max-height: 100%;
    overflow-y: scroll;
  }

  .overlay {
    position: sticky;
    box-shadow: inset 0 0.2rem 0.4rem 0.1rem rgba(0, 0, 0, 0.25);
    background: linear-gradient(
        105deg,
        transparent 67%,
        rgba(255, 255, 255, 0.1) 67%,
        transparent 87%
      ),
      linear-gradient(0deg, transparent 0%, transparent 100%);
  }
</style>
