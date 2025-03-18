import {schedulesDay} from "../schedules/load.js"

//selecionar o input de data
const selectedDate = document.getElementById("date")

// Recarregar a lista de horário qando o input de data mudar
selectedDate.onchange = () => schedulesDay()