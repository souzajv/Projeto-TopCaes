import Image from 'next/image';
import paw from '../../../public/assets/pata-de-cachorro-preta.png';

const rotacaoAleatoria = () => {
    const rotations = ['-rotate-12', '-rotate-6', 'rotate-6', 'rotate-12', '-rotate-45', 'rotate-45'];
    return rotations[Math.floor(Math.random() * rotations.length)];
};

export default function PreFooter() {
    return (
        <div className="w-full h-11 bg-customOrange flex items-center gap-20 overflow-hidden px-2 z-0">
            {Array.from({ length: 20 }).map((_, index) => (
                <Image
                    key={index}
                    src={paw}
                    alt="imagem de uma patinha de cachorro preta"
                    width={30}
                    height={30}
                    className={`${rotacaoAleatoria()}`}
                />
            ))}
        </div>
    );
}