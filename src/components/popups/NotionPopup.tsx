"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/AspectRatio";
import Popup from "./Popup";
import Link from "next/link";
import ktc from "/public/assets/Popup.png";

export default function NotionPopup() {
  return (
    <Popup delay={3000}>
      <Link
        href="https://ktechjobfair.likelion.edu.vn"
        target="_blank"
        className="relative"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1720411086/likelion/ktc-jobfair-landing/Popup_chu%CC%9Bo%CC%9Bng_tri%CC%80nh_gwzc20.png"
            alt="KTC"
            fill
          />
        </AspectRatio>
      </Link>
    </Popup>
  );
}
