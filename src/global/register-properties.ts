import { App } from "vue";
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
    // $filters是自定义的名字
    app.config.globalProperties.$filters = {
        formatTime(value: string){
            return formatUtcString(value)
        }
    }
}