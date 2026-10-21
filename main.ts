let hand = 0
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("G F G A F F E D ", 140), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSoundExpression(WaveShape.Noise, 1600, 1, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Diamond)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
