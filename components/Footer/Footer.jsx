import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { PiLinkSimpleFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="container my-7 mx-auto flex items-center justify-between text-base text-center h-12 px-4 max-md:flex-col max-md:gap-3">
      <div>&copy;2023 Hexashop. All rights reserved.</div>

      <div className="flex flex-row gap-2">
        <FaSquareFacebook size={25} className="social-icons" />
        <PiLinkSimpleFill size={25} className="social-icons" />
        <FaLinkedin size={25} className="social-icons" />
      </div>
    </div>
  );
}
