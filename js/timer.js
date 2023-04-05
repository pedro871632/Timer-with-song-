import songs from "./sounds.js"
export function timer({minutos,segundos},resetButton) {

    // A funcao timer espera que de argumento tenha um objeto com as propiedades minutos e segundos que quando colocadas nos argumentos 
    //  minutos e segundos viram uma variavel que armazena o valor da propiedade de minutos e segundos.
   let pegaTimeout;
   
    function updateDisplay(minutes,seconds){
        minutos.textContent = minutes
        segundos.textContent = seconds
    }
    
    function contador() {
       
        pegaTimeout=setTimeout(()=> {
            
            if(parseInt(minutos.textContent)<=0 && Number(segundos.textContent)<=0 ){
                segundos.textContent = '00'
                minutos.textContent = `00`
                resetButton()  
                songs().timeEnd()
                return (0)
            }
            
           
            
            else if (segundos.textContent == 0){
                minutos.textContent = String(parseInt(minutos.textContent)-1).padStart(2,'0')
                segundos.textContent =60
                console.log(segundos)
            }   
            segundos.textContent = String(parseInt(segundos.textContent)-1).padStart(2,'0') 
            contador(minutos,segundos,resetButton)
        },1000)   

        console.log(pegaTimeout)
    }
    
    function resetar(){
        
        updateDisplay(`00`,`00`)
        clearTimeout(pegaTimeout);
    
    }
    
    function pause() {
        clearTimeout(pegaTimeout)
    }


    return {
        resetar,
        contador,
        updateDisplay,
        pause
    }

}

console.log("timer lidooooooooo")

// named export 
// export  {updateDisplay,contador,resetar}

