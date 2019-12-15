/*
-----------------------------------------------
  svomp store
-----------------------------------------------
*/

import { writable } from 'svelte/store'

export const config = writable({
  social_links: [
    'mailto:office@vedam.de',
    'https://twitter.com/vedamart',
    'https://github.com/vedam',
    'https://www.linkedin.com/in/achimvedam/',
  ],
})
