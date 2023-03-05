"use client"
import QRCode from "react-qr-code"
import {useState} from "react";
import DownloadButton from "@/app/components/DownloadButton";

export default function Home() {
    const [value, setValue] = useState("");

  return (
    <div className={"flex flex-col md:flex-row md:items-start w-screen p-8 gap-8 items-center bg-gray-100 flex-1"}>
      <textarea
        onChange={(event) => setValue(event.target.value)}
        className={"rounded w-full resize-none p-2 h-full"}
        rows={5}
        placeholder={"Type here to make QR code"}
      >
      </textarea>
      <div className={"flex flex-col w-full gap-8 items-center"}>
        <QRCode
          value={value}
          className={"w-full bg-white rounded py-8" + (value ? "" : " blur")}
        />
        <DownloadButton
          linkURL={value}
        />
      </div>
    </div>
  )
}
