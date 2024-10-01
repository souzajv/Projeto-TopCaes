import Image from 'next/image';
import paw from '../../../public/assets/pata-de-cachorro-preta.png';
const rotacaoAleatoria = () => {
    const rotations = ['-rotate-12', '-rotate-6', 'rotate-6', 'rotate-12', '-rotate-45', 'rotate-45'];
    return rotations[Math.floor(Math.random() * rotations.length)];
};

interface PreFooterProps {
    className?: string;
}
export default function PreFooter({ className }: PreFooterProps) {
    return (
        <div className={`${className} w-full h-11 bg-customOrange flex items-center gap-20 overflow-hidden px-2 
        2xl:h-16
        3xl:h-24`}>
            {Array.from({ length: 20 }).map((_, index) => (
                <Image
                    key={index}
                    src={paw}
                    alt="imagem de uma patinha de cachorro preta"
                    className={`${rotacaoAleatoria()} h-[30px] w-[30px]
                    2xl:h-[45px] 2xl:w-[45px]
                    3xl:h-[60px] 3xl:w-[60px]`}
                />
            ))}
        </div>
    );
}