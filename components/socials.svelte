<script>
  /*
  ---------------------------------------------
    social links – 1.0.4
    usage: pass array [
      "mailto:office@vedam.de",
      "https://twitter.com/vedamart",
      "https://www.linkedin.com/in/achimvedam/",
      "https://github.com/vedam"
    ]
  ---------------------------------------------
  */
  import Use from './svg/use.svelte'

  export let clas = ''
  export let items = []
</script>

<!-- -------------------------------------- -->

<div class="{clas}">
  {#each items as link (link)}
    {#if link.includes('mailto')}
      <a href="{link}" title="Send me an Email">
        <Use name="mail" />
      </a>
    {:else if link.includes('twitter')}
      <a href="{link}" target="_blank" title="Auf Twitter" rel="noreferrer">
        <Use name="twitter" />
      </a>
    {:else if link.includes('github')}
      <a href="{link}" target="_blank" title="Auf Github" rel="noreferrer">
        <Use name="github" />
      </a>
    {:else if link.includes('linkedin')}
      <a href="{link}" target="_blank" title="Auf Linkedin" rel="noreferrer">
        <Use name="linkedin" />
      </a>
    {/if}
  {/each}
</div>

<!-- -------------------------------------- -->

<style>
  a { margin: 0 0.8rem 0 0 }

  a:hover, .active {
    color: var(--flash);
  }
</style>
