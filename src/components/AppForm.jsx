import { useContext, useEffect, useState } from "react"
import { QrCodeContext } from "../App"
import QRCode from "qrcode"
import { saveAs } from "file-saver"
import InputColor from "./InputColor"

const sizes = [200, 300, 400, 500, 600, 700, 800, 900]

const AppForm = () => {
    const {
        qrCodeUrl, setQrCodeUrl,
        qrCodeSize, setQrCodeSize,
        colorFront, colorBack,
    } = useContext(QrCodeContext)

    const [readyToDownload, setreadyToDownload] = useState(false)

    const downloadQrCode = async () => {
        try {
            if (!readyToDownload) return
            saveAs(await QRCode.toDataURL(qrCodeUrl, { width: qrCodeSize, color: { dark: colorFront, light: colorBack } }), "qrcode")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        downloadQrCode()
    }

    useEffect(() => {
        if (!qrCodeUrl) return
        setreadyToDownload(true)
    }, [qrCodeUrl])

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">URL</span>
                        </label>

                        <input type="url"
                            required
                            placeholder="https://www.google.com"
                            className="input input-sm mb-2"
                            onInput={(e) => setQrCodeUrl(e.target.value)}
                        />

                        <InputColor
                        />

                        <label className="label">
                            <span className="label-text">SIZE</span>
                        </label>

                        <select
                            className="select select-sm mb-2"
                            onChange={(e) => setQrCodeSize(e.target.value)}
                        >
                            {sizes.map((size, idx) => (
                                <option value={size} key={idx}>
                                    {`${size}px x ${size}px`}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button
                            className="btn btn-primary btn-sm"
                        >
                            save qrcode
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default AppForm