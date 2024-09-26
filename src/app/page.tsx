import Image from 'next/image';
import Button from './components/button';
import Line from './components/line';
import Map from './components/map';
import PreFooter from './components/preFooter';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="">
      <div id="first-section" className="h-[660px] bg-customRed relative">
        <div className="flex justify-center">
          <Image src="/assets/Rodrigo-pastor-alemão.png" alt='foto do Rodrigo adestrando um pastor alemão' width={300} height={280} className='object-cover rounded-b-3xl z-10 h-[300px]' />
        </div>
        <div className="bg-customWhite h-28 w-full absolute top-0 z-0">
        </div>
        <div className="flex overflow-hidden justify-between items-center">
          <Line
            className=''
            type='white'
          />
          <Image src="/assets/top-caes-logo-(letra-branca).png" alt="Logo da TopCães" width={200} height={200} className="mx-2 min-w-[145px] h-[117px]" />
          <Line
            className=''
            type='white'
          />
        </div>
        <div className="">
          <h1 className="text-center text-3xl uppercase font-titulos font-extrabold text-customWhite px-3">seu <span className="text-customBlack">cão</span> também merece <span className="text-customBlack">educação</span>!</h1>
        </div>
        <div className="flex items-center justify-center pt-10">
          <Button
            href=''
            content='saiba mais'
          />
        </div>
      </div>
      <div id="second-section" className="">
        <div className="bg-customBlack h-[130px] flex flex-col items-center image-after">
          <h2 className="font-titulos font-bold text-3xl text-customOrange uppercase mt-[40px]">serviços</h2>
          <Line
            type='orange'
            className='w-[206px] mt-[-45px]'
          />
        </div>
      </div>
      <div id="sixth-section"
        className="bg-[url('/assets/bonesBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center h-[570px]">
        <div className="flex items-center justify-center gap-4 px-3 pt-5 pb-10">
          <Image src="/assets/cachorro4.png" alt='Foto de um pastor alemão com o fundo laranja' width={86} height={84} className='' />
          <h6 className="font-titulos font-bold text-customOrange text-3xl text-start">
            ONDE ESTAMOS LOCALIZADOS?
          </h6>
        </div>
        <Map className={`pb-10`} />
        <Button
          href='#'
          content='contato'
        />
      </div>
      <PreFooter />
      <Footer />
    </main>
  );
}
