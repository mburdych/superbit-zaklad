let rychlost = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, rychlost)
        SuperBit.MotorRun(SuperBit.enMotors.M2, rychlost)
        SuperBit.MotorRun(SuperBit.enMotors.M3, rychlost)
        SuperBit.MotorRun(SuperBit.enMotors.M4, rychlost)
    } else if (input.buttonIsPressed(Button.B)) {
        SuperBit.MotorStopAll()
        SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * rychlost)
        SuperBit.MotorRun(SuperBit.enMotors.M2, -1 * rychlost)
        SuperBit.Servo2(SuperBit.enServo.S1, 270)
        SuperBit.Servo(SuperBit.enServo.S5, 180)
        SuperBit.Servo(SuperBit.enServo.S6, 0)
    } else if (input.buttonIsPressed(Button.A)) {
        SuperBit.MotorStopAll()
        SuperBit.MotorRun(SuperBit.enMotors.M1, rychlost)
        SuperBit.MotorRun(SuperBit.enMotors.M2, rychlost)
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
        SuperBit.Servo(SuperBit.enServo.S5, 0)
        SuperBit.Servo(SuperBit.enServo.S6, 180)
    } else {
        SuperBit.Servo(SuperBit.enServo.S5, 90)
        SuperBit.Servo(SuperBit.enServo.S6, 90)
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        SuperBit.MotorStopAll()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
        rychlost += 4
    } else {
        rychlost = 0
    }
})
