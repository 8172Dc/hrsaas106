// 负责管理所以的自定义指令

export const imagerror = {
  inserted(dom, options) {
    dom.src = dom.src || options.value
    dom.onerror = function() {
      dom.src = options.value
    }
  }
}
