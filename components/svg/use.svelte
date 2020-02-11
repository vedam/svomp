<script>
  /*
  ---------------------------------------------
    svg-use element – 1.0.5
    for frequently used svgs
    TODO – check if lazyloading icons could be an option:
    https://svelte.dev/repl/56b6ffd0d7134476b50a30b11e161570?version=3.4.2
    https://github.com/sveltejs/svelte/issues/640
  ---------------------------------------------
  */
  export let clas = ''
  export let style = ''
  export let name = ''
  export let width = '1.3em'
  export let height = '1.3em'

  const filled = [
    'icn-calendar',
    'icn-company',
    'icn-crown',
    'icn-github',
    'icn-image',
    'icn-linkedin',
    'icn-mail',
    'icn-pen',
    'icn-phone',
    'icn-tag',
    'icn-twitter',
    'icn-ui',
  ]

  $: isIcon = name.includes('icn-')
  $: fill = isIcon && filled.includes(name) ? 'fill ' : 'stroke '
</script>

<!-- -------------------------------------- -->

<svg {style} class="{fill} {clas}" {width} {height}>
  <use xlink:href="#{name}" href="#{name}"></use>
</svg>

<!-- -------------------------------------- -->

<style>
  svg {
    position: relative;
    vertical-align: top;
    /* vertical-align: middle; */
    fill: none;
    stroke: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .fill   { fill: currentColor }
  .stroke { stroke: currentColor }
</style>
