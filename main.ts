radio.onReceivedNumber(function (receivedNumber) {
    jugada_2 = randint(1, 3)
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(4)
        }
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        if (receivedNumber == 2) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(4)
        }
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    jugada = randint(1, 3)
    radio.sendNumber(jugada)
    if (jugada == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1500)
    } else if (jugada == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
let jugada = 0
let jugada_2 = 0
radio.setGroup(7)
