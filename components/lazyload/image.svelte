<script>
  /*
  ---------------------------------------------
    cloudinary images - 1.0.4

    .lazy, .loading and .loaded-styles
    are loaded with global-helpers since we want to 
    lazyload other elements too. (via lazysizes)

    TODO figure out wether •alt• or title attr
  ---------------------------------------------
  */

  //  cloudinary-setup
  const widths = [300, 600, 900, 1300, 2000]
  const transforms = 'q_auto,f_auto,c_scale,dpr_auto'
  const cloudinary = 'https://res.cloudinary.com/vedam'

  //  props
  export let cdn,
    src,
    bgimg,
    alt,
    title,
    style = '',
    clas = '',
    ratio = '4 3'

  //  compute
  $: srcset = cloudinary_srcset(cdn)
  $: bgimage = `background-image: url(${src});`
  $: alt = alt ? alt : `image ${cdn || src}`
  $: title = title ? title : alt
  $: clas = bgimg ? `lazy ratio ${clas}` : `lazy ${clas}`

  //  generate srcset-attribute for cloudinary-cdn
  function cloudinary_srcset(src) {
    return widths.map(
      width =>
        `${cloudinary}/image/upload/w_${width},${transforms}/${src} ${width}w`
    )
  }
</script>

<!-- -------------------------------------- -->

{#if cdn && bgimg}
  <div bgimg class="{clas}" {style} {alt} {title} data-bgset="{srcset}">
    <svg viewBox="0 0 {ratio}"></svg>
  </div>
{:else if cdn && !bgimg}
  <img class="{clas}" {style} {alt} {title} data-srcset="{srcset}" />
{:else if src && bgimg}
  <div bgimg class="{clas}" style="{bgimage}{style}" {alt} {title}>
    <svg viewBox="0 0 {ratio}"></svg>
  </div>
{:else}
  <img class="{clas}" {style} {alt} {title} data-src="{src}" />
{/if}
