// default import
import {buttonPlay,buttonPause,buttonStop,buttonSet,minutos,segundos,soundOf,soundOn} from "./elements.js"
import {controls} from "./controls.js"
import {timer} from "./timer.js"
import Sound from "./sounds.js"

import events from "./events.js"







const Controls = controls({
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonPause
    
})

const sound = Sound()
const Timer = timer({ minutos, segundos},Controls.resetButton)


events({Controls,Timer,sound})
