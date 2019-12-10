/*
-----------------------------------------------
  replaceDOM – 1.1.0
  replace DOM-Elements with passed svelte-component
-----------------------------------------------
*/

export default function(find, Component) {
  let items = document.querySelectorAll(`${find}`)
  if (!items.length) return

  items.forEach(el => {
    let data = {}

    let attrs = el.attributes
    if (attrs.length) {
      for (const attr of attrs) {
        data[attr.name] = attr.value === '' ? true : attr.value
      }
    }

    new Component({ target: el.parentNode, props: data })
    el.remove()
  })
}
