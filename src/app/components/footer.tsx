import Image from "next/image";
import Social from "./social";
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-customRed h-[310px] relative">
            <div className="flex justify-between items-center pt-4 px-2">
                <div className="flex flex-col gap-2
                2xl:gap-4 2xl:pt-6 2xl:px-8
                3xl:gap-8 3xl:pt-8">
                    <Social href='#' text='(xx) xxxxx-xxxx'>
                        <FaWhatsapp className="size-6
                        md:size-8
                        2xl:size-10
                        3xl:size-14" />
                    </Social>
                    <Social href='https://www.instagram.com/topcaesadestramento/' text='@topcaesadestramento'>
                        <FaInstagram className="size-6
                        md:size-8
                        2xl:size-10
                        3xl:size-14" />
                    </Social>
                    <Social href='#' text='(xx) xxxxx-xxxx'>
                        <FaPhone className="size-[19px] scale-x-[-1]
                        md:size-[27px]
                        2xl:size-[35px]
                        3xl:size-[51px]" />
                    </Social>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/assets/top-caes-logo-(letra-branca).png" alt="Logo da TopCães" width={300} height={300} className="w-24
                    md:w-40
                    2xl:w-60 2xl:mr-10 2xl:pt-8" />
                    <p className="text-customWhite opacity-70 text-[12px] text-center
                    md:text-sm
                    2xl:text-lg
                    3xl:text-2xl">Todos os direitos reservados © 2024</p>
                </div>
            </div>
            <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <a href="https://www.linkedin.com/in/joao-souza-campos/" target="_blank" className="flex items-center text-customWhite  gap-1 opacity-70 mb-[-16px] hover:text-customBlack duration-300
                md:mb-[-30px]
                2xl:mb-[-50px]
                3xl:text-2xl 3xl:gap-2">
                    Made by
                    <FaLinkedin className="size-7" />
                </a>
                <Image src='/assets/footer-dog.png' alt="imagem de um cachorro cartoon" width={300} height={300} className="md:w-[290px]
                2xl:w-[400px]" />
            </div>
        </div>
    )
}