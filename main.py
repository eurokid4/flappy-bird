def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

bird = game.create_sprite(0, 2)
bird.set(LedSpriteProperty.BRIGHTNESS, 255)

def on_forever():
    for index in range(255):
        bird.change(LedSpriteProperty.BRIGHTNESS, -1)
        control.wait_micros(1)
    for index2 in range(255):
        bird.change(LedSpriteProperty.BRIGHTNESS, 1)
        control.wait_micros(1)
basic.forever(on_forever)
