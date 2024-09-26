import Image from "next/image";
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-customRed h-[310px] relative">
            <div className="flex justify-between items-center pt-4 px-2">
                <div className="flex flex-col gap-2">
                    <a href="" className="flex items-center gap-1.5 text-customWhite font-textos text-sm opacity-70 hover:text-customBlack duration-300">
                        <FaWhatsapp className="size-6" />
                        (xx) xxxxx-xxxx
                    </a>
                    <a href="" className="flex items-center gap-1.5 text-customWhite font-textos text-sm opacity-70 hover:text-customBlack duration-300">
                        <FaInstagram className="size-6" />
                        topcaesadestramento
                    </a>
                    <a href="" className="flex items-center gap-2 text-customWhite font-textos text-sm opacity-70 hover:text-customBlack duration-300">
                        <FaPhone className="size-[19px] scale-x-[-1]" />
                        (xx) xxxxx-xxxx
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/assets/top-caes-logo-(letra-branca).png" alt="Logo da TopCães" width={120} height={120} className="" />
                    <p className="font-textos text-customWhite opacity-70 text-[12px] text-center">Todos os direitos reservados © 2024</p>
                </div>
            </div>
            <div id="centralizar" className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <a href="https://www.linkedin.com/in/joao-souza-campos/" target="_blank" className="flex items-center text-customWhite font-textos gap-1 opacity-70 mb-[-16px] hover:text-customBlack duration-300">
                    Made by
                    <FaLinkedin className="" />
                </a>
                <Image src='/assets/footer-dog.png' alt="imagem de um cachorro cartoon" width={200} height={200} className="" />
            </div>
        </div>
    )
}