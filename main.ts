input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P2)))
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )))
})
