<script>
  /*
  ---------------------------------------------
    social links – 1.0.5
  ---------------------------------------------
  */
  import Use from './svg/use.svelte'
  export let items = [
    { name: 'mail', href: 'mailto:office@vedam.de' },
    { name: 'twitter', href: 'https://twitter.com/vedamart' },
    { name: 'github', href: 'https://github.com/vedam' },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/achimvedam/' },
  ]

  export let mail_prefix = 'Send me an Email'
  export let link_prefix = 'Watch me on '
  
  let props = i => ({
    title: (i.name !== 'mail')
      ? `${link_prefix} ${i.name}`
      : `${mail_prefix}`,
    
    // destructuring - if is external add these
    ...(i.name !== 'mail' && {
      target: '_blank',
      rel:'noreferrer'
    })
  })
</script>

<!-- -------------------------------------- -->

<div>
  {#each items as i (i)}
    <a href={i.href} {...props(i)} >
      <Use name="icn-{i.name}" />
    </a>
  {/each}
</div>

<!-- -------------------------------------- -->

<style>
  a { margin: 0 .8rem 0 0 }

  a:hover, .active {
    color: var(--flash);
  }
</style>
