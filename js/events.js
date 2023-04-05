
import {buttonPlay,buttonPause,buttonStop,buttonSet,minutos,segundos,soundOf,soundOn} from "./elements.js"
function trocaIconeSound(){
    soundOn.classList.toggle(`hide`)
    soundOf.classList.toggle(`hide`)
}
export default function events({Controls,Timer,sound }){

    buttonPlay.addEventListener(`click`,(ev)=>{      
        Controls.trocaButton()
        Timer.contador()
        sound.pressButton()
    })
    buttonPause.addEventListener(`click`,()=> {
       
        Timer.pause()
        Controls.pauseButton()
        sound.pressButton()
    })
    buttonStop.addEventListener(`click`,()=>{  
        Timer.resetar()    
        Controls.resetButton()
        sound.pressButton()
    }) 
    
    
    
    buttonSet.addEventListener(`click`,() => {
        let time = Controls.getMinutes()
        Timer.updateDisplay(parseInt(time.padStart(2,`0`)),'00');
    })
    
    
    
    soundOn.addEventListener(`click`,()=>{
        sound.bgAudio.play()
       
        trocaIconeSound()
    })
    
    soundOf.addEventListener(`click`,()=>{ 
        sound.bgAudio.pause()
        trocaIconeSound() 
    })    

}