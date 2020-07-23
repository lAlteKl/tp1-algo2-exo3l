let DIodeY1 = 0
let DiodeY2 = 0
basic.pause(500)
let DiodeX = randint(0, 4)
let Diode_Y = randint(1, 1)
while (DiodeY2 != 4) {
    Diode_Y += 1
    DIodeY1 = Diode_Y - 1
    DiodeY2 += 1
    led.plotBrightness(DiodeX, Diode_Y, 255)
    basic.pause(500)
    led.unplot(DiodeX, Diode_Y)
}
basic.forever(function () {
	
})
