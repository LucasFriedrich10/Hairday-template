import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//Gera o evento de click para cada lsita
periods.forEach((period) => {
    //Captura o evento de click na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a LI pai do elemento clicado
            const item = event.target.closest("li")

            //Pega o id do agendamento
            const {id} = item.dataset
            
            //Confirma a exclusão
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                if(isConfirm){
                    //Faz a requisição para cancelar
                    await scheduleCancel({ id })
                    //Recarrega os agendamentos
                    schedulesDay()
                }
            }
        }
    })
})