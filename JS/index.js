// default import//Aqui está a importação dos  outros arquivos js!//
import Controls from './controls.js'
import Timer from './timer.js'

import Sound from './sounds.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'
//Aqui em baixo nós pegamos os seletores do documento html para poder manipula-los//

//====================Factors=================//
//Aqui em baixo estão as "fabrica", usamos elas para poder usar nesse documento principal as outras fuçoes e variaveis!

//===================VARIAVES QUE ARMAZENAM OS SELETORES=========//
//==========CONTROLES=========//
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
//========TEMPORIZADOR========//
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset //controls.reset, colocamos isso pois o reset está em outro escopo//
})

//==========SONS=========//
const sound = Sound()

//===============Eventos-dos-botoes=================//

Events({ controls, timer, sound })
