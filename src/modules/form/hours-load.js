import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        //console.log(scheduleHour)

        //Adiciona a hora na data e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        //console.log(scheduleHour, isHourPast)

        return {
            hour,
            available: isHourPast
        }
    })
}