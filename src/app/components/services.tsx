import Image from "next/image";

interface ServicesProps {
    title: string;
    text: string;
    image: string;
    alt: string;
}

export default function Services({ title, text, image, alt }: ServicesProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="">
                <Image src={image} alt={alt} width={170} height={170} className="border border-customRed rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 max-w-[321px] min-w-[320px]">
                <strong className="text-customRed text-lg text-center capitalize">{title}</strong>
                <p className="text-customBlack text-sm text-center">{text}</p>
            </div>
        </div>
    )
}