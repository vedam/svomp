/*
-----------------------------------------------
  svomp store
  more as an example here
  stores differ from project to project
-----------------------------------------------
*/

import { writable } from 'svelte/store'

export const config = writable({
  social_links: [
    { name: 'mail', href: 'mailto:office@vedam.de' },
    { name: 'twitter', href: 'https://twitter.com/vedamart' },
    { name: 'github', href: 'https://github.com/vedam' },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/achimvedam/' },
  ],
})
