import { useRef, useContext, useEffect, useState } from "react"
import { QrCodeContext } from "../App"
// import generate from "../utils/qrcode"
import QRCode from "qrcode"

const AppQrcode = () => {
    const qrcodeCanvas = useRef(null)
    const { qrCodeUrl, qrCodeSize, colorFront, colorBack } = useContext(QrCodeContext)

    const [generatedUrl, setGeneratedUrl] = useState(null)

    const showQrCode = async () => {
        try {
            if (!qrCodeUrl) return
            setGeneratedUrl(await QRCode.toDataURL(qrCodeUrl, { width: 256, color: { dark: colorFront, light: colorBack } }))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        showQrCode()
    }, [qrCodeUrl, qrCodeSize, colorFront, colorBack])

    return (
        <>
            {generatedUrl && <img ref={qrcodeCanvas} src={generatedUrl}></img>}
        </>
    )
}

export default AppQrcode