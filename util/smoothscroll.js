/*
-----------------------------------------------
  scroll – 1.0.0
  smooth-scroll to passed element
-----------------------------------------------
*/

export default function(el, offset = 0) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: el.offsetTop - offset,
  })
}
