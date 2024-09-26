import Image from 'next/image';
import Button from './components/button';
import Map from './components/map';
import PreFooter from './components/preFooter';
import Footer from './components/footer';
import Dog4 from '../../public/assets/cachorro 4.png';

export default function Home() {
  return (
    <main className="">
      <div id="sixth-session" 
      className="bg-[url('/assets/bonesBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center h-[570px]">
        <div className="flex items-center justify-center gap-4 px-3 pt-5 pb-10">
          <Image src={Dog4} alt='Foto de um pastor alemão com o fundo laranja' className='h-[84px] w-[86px]' />
          <h6 className="font-titulos font-bold text-customOrange text-3xl text-start">
            ONDE ESTAMOS LOCALIZADOS?
          </h6>
        </div>
        <Map className={`pb-10`} />
        <Button
          content='contato'
        />
      </div>
      <PreFooter />
      <Footer />
    </main>
  );
}
