class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    // 遍历对象的key，依次让对象各属性变成响应式
    Object.keys(data).forEach(item => {
      defineReactive(data, item, data[item])
    })
  }
}

function defineReactive(data, key, value) {
  observe(value) // 如果value是引用类型，继续递归劫持对象，性能相对proxy稍差
  Object.defineProperty(data, key, {
    get() {
      console.log('读取了值')
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        console.log('设置了新值', newValue)
        observe(newValue)
        value = newValue
      }
    }
  })
}

export function observe(data) {
  if (typeof data !== 'object' || data === null) {
    return
  }
  return new Observer(data)
}