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
            <Image src={image} alt={alt} width={300} height={300} className="pb-4 max-w-[80px]
            md:max-w-[110px]
            2xl:max-w-[120px]
            3xl:max-w-[150px]" />
            <p className="font-bold text-customWhite text-2xl text-center max-w-[160px] pb-3
            3xl:text-4xl 3xl:max-w-[220px] 3xl:pb-6">{title}</p>
            <p className="text-customWhite text-base text-center max-w-[240px]
            3xl:text-2xl 3xl:max-w-[400px]">{text}</p>
        </div>
    )
}