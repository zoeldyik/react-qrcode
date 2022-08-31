import { useContext, useRef } from "react"
import { QrCodeContext } from "../App"

const InputColor = () => {
  const { colorBack, setColorBack, colorFront, setColorFront } = useContext(QrCodeContext)
  const inputColorFront = useRef(null)
  const inputColorBack = useRef(null)

  const handleClick = () => {
    console.log(inputColorBack.current.value)
  }

  return (
    <>
      <label className="label" htmlFor="front">
        <span className="label-text">COLOR</span>
      </label>

      <div className="flex mb-2 gap-x-2 pl-2">
        <label htmlFor="front" className="btn btn-circle btn-xs bg-primary"
          style={{ backgroundColor: colorFront }}
        ></label>

        <label htmlFor="back" className="btn btn-circle btn-xs bg-primary"
          style={{ backgroundColor: colorBack }}
        ></label>

        <input type="color"
          id="front"
          className="absolute invisible -z-10"
          value={`${colorFront}`}
          onChange={(e) => setColorFront(e.target.value)}
        />
        <input type="color"
          id="back"
          className="absolute invisible -z-10"
          value={`${colorBack}`}
          onChange={(e) => setColorBack(e.target.value)}
        />
      </div>
    </>
  )
}

export default InputColor