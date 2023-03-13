import  dayjs  from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc) // 把时间格式加入进去才能进行转换
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(utcString: string, format: string = DATE_TIME_FORMAT) {
    return dayjs.utc(utcString).format(format)
}