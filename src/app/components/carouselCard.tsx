import Image from "next/image";

interface CarouselCardProps {
    image: string,
    alt: string,
    text: string,
}

export default function CarouselCard({ image, alt, text }:CarouselCardProps) {
    return(
        <div className="bg-customRed rounded-3xl flex items-center justify-center w-[346px] h-[180px]">
            <div className="w-[160px] flex items-center justify-center">
                <Image src={image} alt={alt} width={100} height={100} className="rounded-full border-2 border-customWhite w-[82%]" />
            </div>
            <div className="w-[180px] flex flex-col justify-between gap-4">
                <div className="flex items-center justify-start gap-2">
                    <span className="text-customWhite text-2xl font-light">5.0</span>
                    <Image src='/assets/5-estrelas.png' alt='imagem de 5 patinhas' width={100} height={100} className="text-sm w-[100px]" />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-customWhite pr-3">{text}</p>
                </div>
            </div>
        </div>
    );
}