import {FaQrcode} from "react-icons/fa"

export default function Header() {
    return (
        <header className={"flex items-center gap-2 p-4 border-b"}>
            <FaQrcode/>
            <h1 className={"font-bold tracking-widest"}>Simple QR Generator</h1>
        </header>
    )
}