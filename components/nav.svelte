<script>
  /*
  ---------------------------------------------
    navigation – 1.0.4
    shamelessly stolen from svelte.technology-site
    and adapted to my needs
  ---------------------------------------------
  */
  import { onMount } from 'svelte'
  import { Link } from 'svelte-routing'
  import Use from '~/components/svg/use'

  export let data
  export let open = false
  export let visible = true

  let logo = false
  let menu = []
  let ul

  let handler_opt = {
    capture: true,
    passive: true,
  }

  onMount(_ => {
    // #TODO – setup a true-false if no values!!!
    let l_data = data.logo.split(' | ')
    logo = {
      name: l_data[0],
      width: l_data[1],
      height: l_data[2],
      title: l_data[3],
    }

    data.menu.forEach(link => {
      let m_data = link.split(' | ')
      menu = [...menu, { href: `/${m_data[0]}`, text: m_data[1] || m_data[0] }]
    })

    function handler(e) {
      if (!open) {
        e.preventDefault()
        e.stopPropagation()
        open = true
      }
    }

    ul.addEventListener('touchstart', handler, handler_opt)

    return _ => {
      ul.removeEventListener('touchstart', handler, handler_opt)
    }
  })

  let lastScroll = 0
  function handleScroll() {
    const scroll = window.pageYOffset
    visible = scroll < 50 || scroll < lastScroll
    lastScroll = scroll
  }
</script>

<!-- -------------------------------------- -->

<svelte:window on:click="{_ => (open = false)}" on:scroll="{handleScroll}" />

<header class:visible="{visible || open}">
  <nav>
    <ul
      bind:this="{ul}"
      class="primary"
      class:open
      on:mouseenter="{_ => (open = true)}"
      on:mouseleave="{_ => (open = false)}">
      {#if logo}
        <li class="logo">
          <Link to="/" title="{logo.title}">
            <Use
              name="{logo.name}"
              width="{logo.width}"
              height="{logo.height}" />
          </Link>
        </li>
      {/if}

      {#if menu}
        {#each menu as link}
          <li>
            <Link style="text-transform: capitalize" to="{link.href}">
              {link.text}
            </Link>
          </li>
        {/each}
      {/if}
      <slot />
    </ul>
  </nav>
</header>

<!-- -------------------------------------- -->

<style>
  header {
    position: fixed;
    width: 100vw;
    margin: 0 auto;
    background-color: var(--back-transparent);
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    z-index: 10;
    user-select: none;
    transform: translate(0, calc(-100% - 1rem));
    transition: transform 0.2s;
  }

  header.visible {
    transform: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: var(--nav-h);
    padding: 0 2.4rem;
  }

  ul :global(li) {
    display: inline;
    padding: 2rem 1.2rem;
  }

  nav :global(a:hover),
  nav :global(a:active) {
    color: var(--flash);
  }

  .logo,
  .logo > :global([aria-current]) {
    vertical-align: middle;
    color: var(--prime);
  }

  .logo > :global(:hover[aria-current]) {
    color: var(--flash) !important;
  }

  .logo:hover {
    color: var(--flash);
  }
</style>
