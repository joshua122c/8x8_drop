input.onButtonPressed(Button.A, function () {
    max7219_matrix.scrollText(
    convertToText(scr[0]),
    75,
    500
    )
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 7; index++) {
        max7219_matrix.displayLEDsForOne(
        scr,
        0
        )
        basic.pause(Ti)
        max7219_matrix.toogleValueInMatrix(
        scr,
        ball[0],
        ball[1]
        )
        max7219_matrix.displayLEDsForOne(
        scr,
        0
        )
        basic.pause(Ti)
        ball[0] = 7 - 6 + index
        ball[1] = 7 - 6 + index
    }
})
let Ti = 0
let ball: number[] = []
let scr: number[][] = []
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.clearAll()
scr = max7219_matrix.getEmptyMatrix()
ball = [7, 7]
let ball_num = 0
max7219_matrix.setValueInMatrix(
scr,
ball[0],
ball[1],
1
)
Ti = 50
basic.forever(function () {
	
})
