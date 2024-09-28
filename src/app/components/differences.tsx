import Image from "next/image";

interface DifferencesProps {
    image: string;
    alt: string;
    title: string;
    text: string;
}

export default function Differences({ image, alt, title, text }: DifferencesProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={image} alt={alt} width={75} height={75} className="pb-4" />
            <p className="font-bold text-customWhite text-2xl text-center max-w-[160px] pb-3">{title}</p>
            <p className="text-customWhite text-base text-center max-w-[240px]">{text}</p>
        </div>
    )
}