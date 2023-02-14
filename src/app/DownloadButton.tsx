import {FaDownload} from "react-icons/fa";

type Props = {
    isEnabled: boolean,
    linkURL: string,
}

export default function DownloadButton(props: Props) {
    return (
        <>
            <a className={"flex justify-center items-center gap-2 text-white bg-green-500 rounded p-4 tracking-widest font-bold uppercase w-full hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition"}
               href={props.linkURL ? "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+(props.linkURL) : ""}
            >
                <FaDownload />
                Download
            </a>
        </>
    )
}