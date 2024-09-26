import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-customRed h-[275px]">
            <div className="flex flex-col gap-2 pl-2 pt-4">
                <a href="" className="flex items-center gap-1.5 text-customWhite font-textos text-sm">
                    <FaWhatsapp className="text-customWhite size-6" />
                    (xx) xxxxx-xxxx
                </a>
                <a href="" className="flex items-center gap-1.5 text-customWhite font-textos text-sm">
                    <FaInstagram className="text-customWhite size-6" />
                    topcaesadestramento
                </a>
                <a href="" className="flex items-center gap-2 text-customWhite font-textos text-sm">
                    <FaPhone className="text-customWhite size-[19px] scale-x-[-1]" />
                    (xx) xxxxx-xxxx
                </a>
            </div>
        </div>
    )
}