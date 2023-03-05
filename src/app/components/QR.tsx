"use client"
import QRCode from "react-qr-code"

interface QRProps {
    value: string
}

export function QR(props: QRProps) {
    return (
        <>
            <QRCode
                className={"w-full rounded py-8 bg-white" + (props.value ? "" : " blur")}
                value={props.value}
            />
        </>
    )
}