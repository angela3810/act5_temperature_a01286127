input.onButtonPressed(Button.A, function () {
    basic.showNumber(Celcius)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    let Fahrenheit = 0
    basic.showNumber(Fahrenheit)
    basic.showIcon(IconNames.Sad)
})
let Celcius = 0
basic.showString("Angela")
basic.showString("A01286127")
Celcius = input.temperature()
basic.forever(function () {
	
})
