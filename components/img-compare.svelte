<script>
  /*
  ---------------------------------------------
  	compare images – 1.0.4
  ---------------------------------------------
  */
  import Image from './lazyload/image.svelte'

  export let src = ''
  export let ratio = '8 5'
  let picture
  let x = 120

  $: update = e => {
    // console.log(picture)
    // console.log(picture.getBoundingClientRect())
    x = e.clientX - picture.getBoundingClientRect().left
  }
</script>

<!-- -------------------------------------- -->

<picture
  bind:this="{picture}"
  class="ratio"
  on:mousemove="{update}"
  on:click="{update}">
  <svg viewBox="0 0 {ratio}"></svg>
  <div class="ruler" style="transform: translateX({x}px)"></div>
  <div
    class="mask"
    style="clip-path: polygon(0 0, {x}px 0, {x}px 100%, 0% 100%)">
    <Image bgimg {ratio} cdn="{src + '1'}" />
  </div>
  <Image bgimg {ratio} cdn="{src + '2'}" />
</picture>

<!-- -------------------------------------- -->

<style>
  picture {
    position: relative;
    cursor: col-resize;
    overflow: hidden;
    margin: 2.4rem 0;
    border-radius: var(--border-r);
  }

  .ruler, .mask {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .mask {
    z-index: 1;
    overflow: hidden;
  }

  .ruler {
    width: 0.1rem;
    height: 100%;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .ruler::before, .ruler::after {
    position: absolute;
    bottom: 0;
    padding: 2rem 1.6rem;
    font: 300 1.3rem/1.7 var(--font-ui);
    color: white;
    opacity: 0.8;
    z-index: 3;
    text-shadow: 0.1rem 0.1rem 0.3rem rgba(39, 36, 36, 0.7);
  }

  .ruler::before {
    content: 'after';
    left: 0.8rem;
  }
  
  .ruler::after {
    content: 'before';
    right: 0.8rem;
  }
</style>
