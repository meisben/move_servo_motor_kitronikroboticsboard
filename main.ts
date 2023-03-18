input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 0)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 180)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
