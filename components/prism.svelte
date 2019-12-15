<script>
  /*
  ---------------------------------------------
    prism syntax-highlighter – 1.0.0
  ---------------------------------------------
  */
  import { onMount } from 'svelte'
  import Prism from 'prismjs'
  import 'prismjs/components/prism-bash'
  import 'prism-svelte'

  export let lang = 'javascript'
  export let src

  const langs = {
    bash: 'bash',
    html: 'markup',
    svelte: 'svelte',
    js: 'javascript',
    css: 'css',
  }

  $: current = langs[lang]
</script>

<!-- -------------------------------------- -->
<pre class="language-{current}">
  <code class="language-{current}">
    {@html Prism.highlight(src, Prism.languages[current])}
  </code>
</pre>
