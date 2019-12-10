<script>
  /*
  ---------------------------------------------
  	iframe – 1.0.4
  ---------------------------------------------
  */
  export let width = '100%'
  export let height = '100%'
  export let url, title
</script>

<!-- -------------------------------------- -->

<iframe
  {width}
  {height}
  {title}
  class="lazy"
  frameborder="0"
  src="{url}"
  allowfullscreen />

<style>
  iframe {
    border:0;
    margin: 2.4rem 0;
    border-radius: var(--border-r);
  }
</style>