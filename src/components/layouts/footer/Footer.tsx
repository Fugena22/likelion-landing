import Logo from "../../Logo";
import { Clock, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import Icons from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="text-white bg-black">
      <div className="container">
        <div className="py-24">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-sm">
              <Logo variant="white" />
              <p className="mt-6 leading-7">
                Từ người mới bắt đầu đến chuyên gia, bạn đều có thể tìm được
                khóa học phù hợp để nâng cao kỹ năng lập trình của mình.
              </p>

              <div className="flex flex-col gap-2 mt-10 font-medium">
                <div className="flex items-start gap-4">
                  <PhoneCall />
                  <p>(+84) 86 713 3779</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail />
                  <p>likelionvn@likelion.net</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock />
                  <p className="flex flex-col">
                    <span>Thứ 2 - Thứ 6</span>
                    <span>8:30 AM - 5:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-bold uppercase ">Công ty</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/about">Về chúng tôi</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Liên hệ</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.facebook.com/likelionvietnam"
                  target="_blank"
                >
                  <Icons.facebook className="w-8" />
                </Link>
                <Link
                  href="https://www.instagram.com/likelionvn/"
                  target="_blank"
                >
                  <Icons.instagram className="w-8" />
                </Link>
                <Link
                  href="https://www.youtube.com/@likelionvietnam"
                  target="_blank"
                >
                  <Icons.youtube className="w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/30">
        <div className="container">
          <div className="py-4 text-sm text-center text-white/80">
            Copyright @ 2023, LIKELION, Co. Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
