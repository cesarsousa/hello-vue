const OlaMundo = {}

OlaMundo.install = function (Vue, options) {
  Vue.ola = () => {
    console.log('Olá fuckers do vue com método global')
  }
  Vue.prototype.$ola = (options) => {
    console.log('Olá suckers do vue com métodos de instância')
  }
  Vue.directive('ola', {
    bind (el, binding, vnode, oldVnode) {
      el.innerHTML = 'texto do plugin'
    }
  })
  Vue.mixin({
    create: () => {
      console.log('Olá fuckers and suckers executados pelo plugin')
    }
  })
}
export default OlaMundo
