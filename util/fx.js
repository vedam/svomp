import { fly } from 'svelte/transition'
import { backOut } from 'svelte/easing'

let title_cnf = {
  delay: 150,
  duration: 300,
  easing: backOut,
}

let section_cnf = {
  delay: 70,
  duration: 200,
  easing: backOut,
}

const title = obj => Object.assign(title_cnf, obj)
const section = obj => Object.assign(section_cnf, obj)

// in:fly="{title({x:100})}"
// out:fly="{title({x:100})}"

export default {
  fly,
  title: {
    in: title({ x: 100 }),
    // out: title({ x: -100 }),
  },
  section: {
    in: section({ x: 50 }),
    // out: section({ x: -30 }),
  },
}
