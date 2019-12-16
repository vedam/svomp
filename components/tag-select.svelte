<script>
  /*
  ---------------------------------------------
  	tag-select – 1.0.5
  ---------------------------------------------
  */
  import Use from './svg/use.svelte'

  export let tags = []
  export let icon = 'icn-tag'
  export let selected

  const handleSelect = tag => _ => {
    // This is a bit hacky, but until I'll find a better solution...
    if (icon === 'icn-image') {
      selected = tag
    } else {
      selected = tag === selected ? '' : tag
    }
  }
</script>

<!-- -------------------------------------- -->

<div class="tags flex-center">
  <h5 class="flash">
    <Use name="{icon}" />
  </h5>
  {#each tags as tag (tag)}
    <a
      href="#void"
      class="tag"
      class:active="{selected === tag}"
      on:click|preventDefault="{handleSelect(tag)}">
      {tag}
    </a>
  {/each}
</div>

<!-- -------------------------------------- -->

<style>
  .tags { margin: 4.8rem 0 }

  .tag {
    margin: 0 .1rem;
    padding: .1rem .5rem .2rem .5rem;
    font-family: var(--font-ui, var(--font));
    font-size: var(--code);
    line-height: 1.5; /* FF wants line-height? */
    border-radius: var(--border-r);
    transition: background .3s, color .3s;
  }

  .flash {
    position: relative;
    top: .2rem;
    margin: 0 .8rem 0 0;
  }

  a { margin: .4rem }
  
  a:hover {
    color: var(--flash);
  }

  .active {
    background: var(--flash);
    color: white !important;
  }
</style>
