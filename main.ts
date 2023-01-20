input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("F G E C5 G C G - ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Fidget Cube")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # # # . .
        # # . . .
        # # # . .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Duck)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # # # .
        # # # . .
        # # . . #
        # # # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # .
        # # . . .
        # # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
