import Sounds from './sounds.js' //Aqui estou importando as funções de sons

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes //Estou dizendo: se newMinutes for igual e do mesmo valor/tipo que indefinido, coloque minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        //Aqui estou dizendo: quando minutes for  menor ou igual a zero e seconds for menor e igual a zero exercute as funções a baixo//
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60 //Aqui estamos dizendo que seconds vai ser igual a 60, e a baixo estamos dizendo que a cada interação vamos reduzir -1 na variavel minutes!
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function hold() {
    //Função para Pausar o temporizador//
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}
