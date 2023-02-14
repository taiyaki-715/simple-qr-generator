"use client"
import QRCode from "react-qr-code"
import {useState} from "react";
import {FaDownload} from "react-icons/fa"

export default function Home() {
    const [value, setValue] = useState("");

  return (
    <div className={"flex flex-col md:flex-row md:items-start w-screen p-8 gap-8 items-center bg-gray-100 flex-1"}>
      <textarea
          onChange={(event) => setValue(event.target.value)}
          className={"rounded w-full resize-none p-2 h-full"}
          rows={5}
          placeholder={"Type here to make QR code"}
      ></textarea>
        <div className={"flex flex-col w-full gap-8 items-center"}>
        <QRCode
            value={value}
            className={"w-full bg-white rounded py-8" + (value ? "" : " blur")}
        />
        <a
            className={"flex justify-center items-center gap-2 text-white bg-green-500 rounded p-4 tracking-widest font-bold uppercase w-full hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition"}
            href={value ? "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+(value) : ""}
        >
            <FaDownload />Download
        </a>
        </div>
    </div>
  )
}
