input.onButtonPressed(Button.A, function () {
    max7219_matrix.displayTextAlignRight(
    convertToText(target_x),
    true
    )
})
input.onButtonPressed(Button.B, function () {
    target_x = Math.floor(taeget[ball_num] / 10)
    target_y = taeget[ball_num] % 10
    if (ball_x > target_x && ball_y > target_y) {
        max7219_matrix.setValueInMatrix(
        scr,
        ball_x,
        ball_y,
        1
        )
        max7219_matrix.displayLEDsForOne(
        scr,
        0
        )
        basic.pause(Ti)
        if (ball_x > target_x) {
            max7219_matrix.toogleValueInMatrix(
            scr,
            ball_x,
            ball_y
            )
            max7219_matrix.displayLEDsForOne(
            scr,
            0
            )
            basic.pause(Ti)
            ball_x += -1
            ball_y += -1
        }
    }
    if (ball_x * 10 + ball_y != taeget[ball_num]) {
    	
    }
    max7219_matrix.setValueInMatrix(
    scr,
    target_x,
    target_y,
    1
    )
    max7219_matrix.displayLEDsForOne(
    scr,
    0
    )
})
let target_y = 0
let target_x = 0
let scr: number[][] = []
let ball_num = 0
let Ti = 0
let taeget: number[] = []
let ball_y = 0
let ball_x = 0
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.clearAll()
ball_x = 7
ball_y = 7
taeget = [
0,
1,
10,
11,
2
]
Ti = 150
ball_num = 0
scr = max7219_matrix.getEmptyMatrix()
target_x = Math.floor(taeget[ball_num] / 10)
target_y = taeget[ball_num] % 10
max7219_matrix.displayLEDsForOne(
scr,
0
)
basic.forever(function () {
	
})
