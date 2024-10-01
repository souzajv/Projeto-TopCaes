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
                <Image src={image} alt={alt} width={500} height={500} className="border border-customRed rounded-full w-[170px]
                2xl:w-[250px]
                3xl:w-[450px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 max-w-[321px] min-w-[320px]
            md:max-w-[211px] md:min-w-[210px]
            2xl:max-w-[360px]
            3xl:max-w-[720px]">
                <strong className="text-customRed text-lg text-center capitalize
                md:leading-4
                2xl:text-2xl
                3xl:text-5xl">{title}</strong>
                <p className="text-customBlack text-sm text-center
                2xl:text-base
                3xl:text-3xl">{text}</p>
            </div>
        </div>
    )
}