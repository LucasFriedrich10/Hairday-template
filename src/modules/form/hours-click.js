export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    
    hours.forEach((available) =>{
        available.addEventListener("click", (selected) => {
           ///Removendo a classe de todas as LI nao selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            //Adiciona a classa na Li clicada
            selected.target.classList.add("hour-selected")
        })
    })
}