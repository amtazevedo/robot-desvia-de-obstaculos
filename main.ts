function tras (num: number) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    crickit.tank(velocidade * -1, velocidade * -1)
    basic.pause(num)
    parar()
}
function esquerda (num: number) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    crickit.tank(velocidade, velocidade * -1)
    basic.pause(num)
    parar()
}
function direita (num: number) {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    crickit.tank(velocidade * -1, velocidade)
    basic.pause(num)
    parar()
}
function frente (num: number) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    crickit.tank(velocidade, velocidade)
    basic.pause(num)
    parar()
}
function parar () {
    crickit.tank(0, 0)
}
let distancia = 0
let velocidade = 0
velocidade = 40
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(5000)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeValue("x", distancia)
    if (distancia < 10) {
        tras(500)
        if (randint(1, 10) < 5) {
            esquerda(500)
        } else {
            direita(500)
        }
    } else {
        frente(500)
    }
})
