import { createApp } from "vue"
import App from "@/app/App.vue"
import "@/app/styles/main.scss"
import { router } from "./app/providers/router"

const app = createApp(App)
app.use(router)

app.mount("#app")
