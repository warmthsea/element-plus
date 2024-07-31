import { createApp } from 'vue'
import '@element-plus/theme-chalk/src/dark/css-vars.scss'
import '@element-plus/theme-chalk/src/notification.scss'
import '@element-plus/theme-chalk/src/message-box.scss'
import '@element-plus/theme-chalk/src/message.scss'

import { createCurrentRouter } from './router'


const render =  async()=>{
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default

  const router = createCurrentRouter()

  const instance = createApp(App)

  instance.use(router)

  instance.mount('#play')

  return instance
}


if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = async() => {
    console.info('挂载')
    instance = await render()
  }
  window.__WUJIE_UNMOUNT = () => {
    console.info('卸载')
    console.log(instance)
    instance.unmount()
    instance = null
  }
  window.__WUJIE.mount()
} else {
  render()
}
