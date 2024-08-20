let UMIDADE = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
})
basic.forever(function () {
    UMIDADE = pins.digitalReadPin(DigitalPin.P1)
    if (UMIDADE > 1000) {
        basic.showIcon(IconNames.Square)
    } else if (UMIDADE > 800) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
