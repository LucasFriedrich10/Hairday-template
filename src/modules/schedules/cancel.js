const periods = document.querySelectorAll(".period")

//Gera o evento de click para cada lsita
periods.forEach((period) => {
    //Captura o evento de click na lista
    period.addEventListener("click", (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a LI pai do elemento clicado
            const item = event.target.closest("li")
            const {id} = item.dataset
            
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                if(isConfirm){
                    console.log("REMOVER")
                }
            }
        }
    })
})