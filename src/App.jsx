import { createContext, useState } from "react"
import AppForm from "./components/AppForm"
import AppQrcode from "./components/AppQrcode"

export const QrCodeContext = createContext(null)


function App() {
  const [qrCodeUrl, setQrCodeUrl] = useState("https://www.google.com")
  const [qrCodeSize, setQrCodeSize] = useState(200)
  const [colorFront, setColorFront] = useState("#000000")
  const [colorBack, setColorBack] = useState("#ffffff")

  return (
    <QrCodeContext.Provider value={{ qrCodeUrl, setQrCodeUrl, qrCodeSize, setQrCodeSize, colorFront, setColorFront, colorBack, setColorBack }}>
      <div className="app bg-base-200 py-20 md:py-0">
        <div className="flex min-h-screen flex-col md:flex-row gap-y-10 gap-x-20 justify-center items-center" >
          <AppQrcode />
          <AppForm />
        </div>
      </div>
    </QrCodeContext.Provider>
  )
}

export default App
