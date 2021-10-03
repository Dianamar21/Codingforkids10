basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) >= -50 && input.acceleration(Dimension.X) <= 50) {
        basic.showIcon(IconNames.Yes)
    } else if (input.acceleration(Dimension.X) < -50) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) > 50) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
})
