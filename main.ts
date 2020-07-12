let joystick_r_y = 0
let joystick_r_x = 0
let joystick_l_y = 0
let joystick_l_x = 0
music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
pins.digitalWritePin(DigitalPin.P15, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P15, 0)
let strip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
let joy_l_sprite = game.createSprite(1, 1)
let joy_r_sprite = game.createSprite(3, 3)
basic.forever(function () {
    if (0 == pins.digitalReadPin(DigitalPin.P8)) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (0 == pins.digitalReadPin(DigitalPin.P12)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    pins.digitalWritePin(DigitalPin.P13, 0)
    joystick_l_x = pins.analogReadPin(AnalogPin.P1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    joystick_l_y = pins.analogReadPin(AnalogPin.P1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    joystick_r_x = pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P14, 1)
    joystick_r_y = pins.analogReadPin(AnalogPin.P2)
    if (joystick_l_x < 300) {
        joy_l_sprite.set(LedSpriteProperty.X, 0)
    } else if (joystick_l_x > 700) {
        joy_l_sprite.set(LedSpriteProperty.X, 2)
    } else if (joystick_l_y < 300) {
        joy_l_sprite.set(LedSpriteProperty.Y, 2)
    } else if (joystick_l_y > 700) {
        joy_l_sprite.set(LedSpriteProperty.Y, 0)
    } else {
        joy_l_sprite.set(LedSpriteProperty.X, 1)
        joy_l_sprite.set(LedSpriteProperty.Y, 1)
    }
    if (joystick_r_x < 300) {
        joy_r_sprite.set(LedSpriteProperty.X, 2)
    } else if (joystick_r_x > 700) {
        joy_r_sprite.set(LedSpriteProperty.X, 4)
    } else if (joystick_r_y < 300) {
        joy_r_sprite.set(LedSpriteProperty.Y, 4)
    } else if (joystick_r_y > 700) {
        joy_r_sprite.set(LedSpriteProperty.Y, 2)
    } else {
        joy_r_sprite.set(LedSpriteProperty.X, 3)
        joy_r_sprite.set(LedSpriteProperty.Y, 3)
    }
})
