/*
-----------------------------------------------
  computed – 1.0.0
  get/set computed value from/to css
-----------------------------------------------
*/

export default function(el, prop, val) {
  if (val) {
    el.style.setProperty(prop, val)
    return el
  }

  return parseInt(getComputedStyle(el).getPropertyValue(prop))
}
