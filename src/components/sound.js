import flipMusic from '../assets/sound-effects/flip.mp3'
import lostMusic from '../assets/sound-effects/lost.mp3'
import winMusic from '../assets/sound-effects/nioce.mp3'

const soundEffects = {
  flip: new Audio(flipMusic),
  lost: new Audio(lostMusic),
  win: new Audio(winMusic),
}

const flipSound = soundEffects.flip
const lostSound = soundEffects.lost
const winSound = soundEffects.win

export default class Sound {

  static flip(isVolumeMuted) {
    flipSound.currentTime = 0
    flipSound.volume = 0.5
    if (!isVolumeMuted) {
      flipSound.play()
    }
  }

  static lost(isVolumeMuted) {
    lostSound.currentTime = 0;
    lostSound.volume = 0.5
    if (!isVolumeMuted) {
      lostSound.play()
    }
  }

  static win(isVolumeMuted) {
    winSound.currentTime = 0;
    winSound.volume = 0.5
    if (!isVolumeMuted) {
      winSound.play()
    }
  }

  static pauseLost() {
    lostSound.pause()
  }

  static pauseWin() {
    winSound.pause()
  }
}