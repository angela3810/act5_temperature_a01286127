input.onButtonPressed(Button.A, function () {
    basic.showNumber(Celcius)
    Celcius = input.temperature()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Kelvin)
    Kelvin = input.temperature() + 273.15
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Fahrenheit)
    Fahrenheit = input.temperature() * (9 / 5) + 32
    basic.showIcon(IconNames.Sad)
})
let Kelvin = 0
let Fahrenheit = 0
let Celcius = 0
basic.showString("Angela")
basic.showString("A01286127")
Celcius = input.temperature()
Fahrenheit = input.temperature()
Kelvin = input.temperature()
basic.pause(1000)
basic.clearScreen()
