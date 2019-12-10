<script>
  /*
  ---------------------------------------------
  	footer – 1.0.4
  ---------------------------------------------
  */
  import Use from './svg/use.svelte'

  export let minimal
</script>

<!-- -------------------------------------- -->

<footer class="flex-center">
  <div style="flex: auto">
    {#if minimal}
      <h6 no-select class="minimal">
        <slot />
        <Use name="logo-vedam" clas="logo" />
        <b>vedam</b> © 2019
      </h6>
    {:else}
      <slot />
    {/if}
  </div>
</footer>

<!-- -------------------------------------- -->

<style>
  footer {
    justify-content: space-between;
    margin: 0 auto;
    padding: 6rem 0 8rem;
    max-width: var(--page-max-w);
    background: var(--back-transparent);
    font: var(--code) var(--font-ui);
  }

  a { margin: 0 1rem }

  a:hover, .active {
    color: var(--flash);
  }

  .minimal {
    font-size: var(--code);
    font-weight: 300;
  }

  .logo {
    position: relative;
    top: 0.4rem;
    width: 1.6rem;
    height: 1.6rem;
  }
</style>
