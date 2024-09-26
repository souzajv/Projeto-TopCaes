import Image from 'next/image';
import Button from './components/button';
import Line from './components/line';
import Services from './components/services';
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
            className='overflow-hidden'
            type='white'
          />
          <Image src="/assets/top-caes-logo-(letra-branca).png" alt="Logo da TopCães" width={200} height={200} className="mx-2 min-w-[145px] h-[117px]" />
          <Line
            className='overflow-hidden'
            type='white'
          />
        </div>
        <div className="">
          <h1 className="text-center text-3xl uppercase font-extrabold text-customWhite px-3">seu <span className="text-customBlack">cão</span> também merece <span className="text-customBlack">educação</span>!</h1>
        </div>
        <div className="flex items-center justify-center pt-10">
          <Button
            href='#second-section'
            content='saiba mais'
          />
        </div>
      </div>
      <div id="second-section">
        <div className="bg-customBlack h-[165px] flex flex-col items-center image-after relative">
          <Image src='/assets/patinhas.png' alt='imagem de patinhas de cachorro' width={110} height={110} className='object-cover overflow-hidden absolute left-1 bottom-2' />
          <h2 className="font-bold text-3xl text-customOrange uppercase mt-[40px]">serviços</h2>
          <Line
            type='orange'
            className='w-[200px] mt-[-45px]'
          />
        </div>
        <div className="bg-[url('/assets/backgroundTextMobile.png')] bg-cover bg-center bg-no-repeat h-[1150px] relative z-0">
          <div className="mt-[-40px] absolute z-20 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col gap-14">
              <Services
                title='treinamento comportamental'
                text='Nosso treinamento comportamental é totalmente personalizado para atender às necessidades específicas do seu cão, promovendo uma relação harmoniosa e de confiança entre vocês.'
                image='/assets/Rodrigo-treinamento-comportamental.png'
                alt='Foto do Rodrigo com um cachorro'
              />
              <Services
                title='consultoria comportamental'
                text='Nossa consultoria é projetada para promover uma melhor compreensão e comunicação com seu animal de estimação, diagnosticando problemas comportamentais e desenvolvendo estratégias eficazes para melhorá-los.'
                image='/assets/Rodrigo-consultoria-comportamental.png'
                alt='Foto do Rodrigo com um cachorro'
              />
              <Services
                title='passeio personalizado'
                text='Nosso passeio personalizado vai muito além de uma simples caminhada. Ele é projetado para melhorar o comportamento do seu cão e tornar o passeio agradável tanto para o dono quanto para o animal.'
                image='/assets/Rodrigo-passeio-personalizado.png'
                alt='Foto do Rodrigo com um cachorro'
              />
            </div>
          </div>
          <Image src="/assets/top-caes-logo-(letra-preta).png" alt='imagem de um cachorro apoiado' width={60} height={60} className='absolute bottom-2 right-2' />
        </div>
      </div>
      <div id="third-section">
        <div className="">
          
        </div>
      </div>
      <div id="sixth-section"
        className="bg-[url('/assets/bonesBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center h-[570px]">
        <div className="flex items-center justify-center gap-4 px-3 pt-5 pb-10">
          <Image src="/assets/cachorro4.png" alt='Foto de um pastor alemão com o fundo laranja' width={86} height={84} className='' />
          <h6 className="font-bold text-customOrange text-3xl text-start">
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
