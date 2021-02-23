import React, { useState } from 'react'

export function App() {
  const [Hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [Saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [Lightness, setLightness] = useState(Math.floor(Math.random() * 100))

  function randomColor() {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
  }

  return (
    <body>
      <header>
        <h1
          style={{
            color: `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`,
          }}
        >
          COLOR PICKER 2!
        </h1>
      </header>
      <section>
        <label
          style={{
            color: `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`,
          }}
        >
          H: {Hue}
          <input
            type="range"
            max="360"
            onChange={(event) => setHue(event.target.value)}
            value={Hue}
          />
        </label>
        <label
          style={{
            color: `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`,
          }}
        >
          S: {Saturation}%
          <input
            type="range"
            max="100"
            onChange={(event) => setSaturation(event.target.value)}
            value={Saturation}
          />
        </label>
        <label
          style={{
            color: `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`,
          }}
        >
          L: {Lightness}%
          <input
            type="range"
            max="100"
            onChange={(event) => setLightness(event.target.value)}
            value={Lightness}
          />
        </label>
        <button onClick={randomColor}>Random Color</button>

        <canvas
          style={{
            backgroundColor: `hsl(${Hue}, ${Saturation}%, ${Lightness}%)`,
          }}
        ></canvas>
      </section>
    </body>
  )
}
