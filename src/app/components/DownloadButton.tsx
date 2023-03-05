import {FaDownload} from "react-icons/fa";

type Props = {
    linkURL: string,
}

export default function DownloadButton(props: Props) {
    return (
        <>
            <a className={"flex justify-center items-center gap-2 rounded p-4 tracking-widest font-bold uppercase w-full transition"+(props.linkURL.length>0 ? " text-white bg-green-500 hover:bg-white hover:text-green-500 hover:border hover:border-green-500" : " text-gray-100/50 bg-green-500/50 pointer-events-none")}
               href={props.linkURL ? "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+(props.linkURL) : ""}
               tabIndex={-1}
            >
                <FaDownload />
                Download
            </a>
        </>
    )
}