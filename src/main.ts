import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import './tokens/macos.css'
import './styles/base.css'
import './demos/web/web.css'
import './demos/macos/macos.css'

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL })
