/*
-----------------------------------------------
  lazyload load and init
  - load, config and init lazysizes
  - update lazysizes-config for lazysizes ^5.2.0
  - https://github.com/aFarkas/lazysizes
  - don't forget to: npm i lazysizes
-----------------------------------------------
*/

// lazysizes and required plugins
import 'lazysizes'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import 'lazysizes/plugins/native-loading/ls.native-loading'

// config lazysizes: custom css-classnames
const config = {
  init: false,
  lazyClass: 'lazy',
  loadingClass: 'loading',
  loadedClass: 'loaded',
}

window.lscnf = window.lazySizes.cfg || {}
window.lscnf.nativeLoading = {
  setLoadingAttribute: true,
}

Object.assign(window.lscnf, config)

// console.log('[lazysizes] config', window.lscnf)
lazySizes.init()
