function deletewally () {
    while (wallies.length > 0 && wallies[0].get(LedSpriteProperty.X) == 0) {
        basic.pause(1)
        wallies.removeAt(0).delete()
        wallypointy += 0.25
    }
}
input.onButtonPressed(Button.A, function () {
    if (intro == 0) {
        if (bird.get(LedSpriteProperty.Y) <= 3) {
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.ForeverInBackground)
            bird.change(LedSpriteProperty.Y, 1)
        }
    }
})
function wallyholey (_1: number, _2: number) {
    hole_in_wally = randint(_1, _2)
    for (let yindex = 0; yindex <= 4; yindex++) {
        if (yindex != hole_in_wally) {
            wallies.push(game.createSprite(4, yindex))
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (intro == 1) {
        intro = 0
        bird = game.createSprite(0, 2)
        bird.set(LedSpriteProperty.Brightness, 255)
        wallies = []
        countwallies = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (intro == 0) {
        if (bird.get(LedSpriteProperty.Y) >= 1) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
            bird.change(LedSpriteProperty.Y, -1)
        }
    }
})
function wallymovey () {
    basic.pause(500)
    for (let obSticIe of wallies) {
        obSticIe.change(LedSpriteProperty.X, -1)
    }
}
function AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH () {
    for (let wally of wallies) {
        if (bird.isTouching(wally)) {
            music.stopMelody(MelodyStopOptions.All)
            game.setScore(wallypointy)
            game.gameOver()
        }
    }
}
let countwallies = 0
let hole_in_wally = 0
let bird: game.LedSprite = null
let wallypointy = 0
let wallies: game.LedSprite[] = []
let intro = 0
intro = 1
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . # # # .
        # # # # #
        `)
}
basic.showString("PRESS A+B")
basic.forever(function () {
    if (intro == 0) {
        for (let index = 0; index < 255; index++) {
            bird.change(LedSpriteProperty.Brightness, -1)
            control.waitMicros(500)
        }
        for (let index = 0; index < 255; index++) {
            bird.change(LedSpriteProperty.Brightness, 1)
            control.waitMicros(500)
        }
    }
})
basic.forever(function () {
    if (intro == 0) {
        if (countwallies % 4 == 0) {
            wallyholey(0, 4)
        }
        wallymovey()
        AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH()
        deletewally()
        countwallies += 1
    }
})
