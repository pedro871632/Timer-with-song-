
function controls({buttonPlay,buttonStop,buttonPause,buttonSet})  {
    function resetButton() {
   
   
        buttonPlay.classList.remove(`hide`)
        buttonStop.classList.add(`hide`)
        buttonSet.classList.remove(`hide`)
        buttonPause.classList.add(`hide`)

    }

    function trocaButton() {
        buttonPlay.classList.add("hide");
        buttonPause.classList.remove("hide");
        buttonSet.classList.add("hide");
        buttonStop.classList.remove("hide");
        
    }

    function pauseButton(){
        buttonPause.classList.toggle(`hide`)
        buttonPlay.classList.toggle(`hide`)
        

    }

    function getMinutes(){
        let minutos = prompt("Digite quantos minutos:")

        if (!minutos){
            // retorne false, caso minutos seja uma string vazia
            return "12"
        }
        return minutos
    }

   
    return {
        trocaButton,
        resetButton,
        pauseButton,   
        getMinutes
    }



}
    
    
    
// default export
export  {controls}

// Daria pra mim fazer um export default controls , porem optei por usar o named export