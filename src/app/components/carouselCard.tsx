import Image from "next/image";

interface CarouselCardProps {
    image: string,
    alt: string,
    text: string,
}

export default function CarouselCard({ image, alt, text }:CarouselCardProps) {
    return(
        <div className="bg-customRed rounded-3xl flex items-center justify-center w-[346px] h-[180px]
        2xl:w-[500px] 2xl:h-[250px]
        3xl:w-[700px] 3xl:h-[350px]">
            <div className="w-[160px] flex items-center justify-center
            2xl:w-[230px] 2xl:justify-start
            3xl:w-[300px]">
                <Image src={image} alt={alt} width={1000} height={1000} className="rounded-full border-2 border-customWhite w-[82%]" />
            </div>
            <div className="w-[180px] flex flex-col justify-between gap-4
            2xl:w-[40%]
            3xl:w-[45%]">
                <div className="flex items-center justify-start gap-2">
                    <span className="text-customWhite text-2xl font-light
                    2xl:text-4xl
                    3xl:text-5xl">5.0</span>
                    <Image src='/assets/5-estrelas.png' alt='imagem de 5 patinhas' width={300} height={300} className="text-sm w-[100px]
                    2xl:w-[130px]
                    3xl:w-[200px]" />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-customWhite pr-3
                    2xl:text-xl
                    3xl:text-3xl">{text}</p>
                </div>
            </div>
        </div>
    );
}