"use client"
import QRCode from "react-qr-code"

export function QR(props: object) {
    return (
        <>
            <QRCode
                className={"w-full rounded py-8 bg-white" + (props.value ? "" : " blur")}
                value={props.value}
            />
        </>
    )
}