import Image from 'next/image';
import Button from './components/button';
import Line from './components/line';
import LineTitle from './components/lineTitle';
import Services from './components/services';
import Differences from './components/differences';
import Carousel from './components/carousel';
import Map from './components/map';
import PreFooter from './components/preFooter';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="">

      <div id="first-section">
        <div className="h-[96vh] bg-customRed relative">
          <div className="bg-customWhite h-28 w-full absolute top-0 z-0">
          </div>
          <div className="flex justify-center h-[45vh]">
            <Image src="/assets/Rodrigo-pastor-alemão.png" alt='foto do Rodrigo adestrando um pastor alemão' width={300} height={280} className='object-cover object-bottom rounded-b-3xl z-10 h-full w-[85%]' />
          </div>
          <div className="flex flex-col items-center justify-evenly h-[51vh]">
            <LineTitle lineType='white' className='w-full'>
              <Image src='/assets/top-caes-logo-(letra-branca).png' alt='logo da TopCães' width={300} height={300} className='min-w-[200px]' />
            </LineTitle>
            <h1 className="text-center text-4xl uppercase font-extrabold text-customWhite px-3">seu <span className="text-customBlack">cão</span> também merece <span className="text-customBlack">educação</span>!</h1>
            <Button
              href='#second-section'
              content='saiba mais'
            />
          </div>
        </div>
      </div>
      <div id="second-section">
        <div className="bg-customBlack h-[165px] flex flex-col items-center image-after relative">
          <Image src='/assets/patinhas.png' alt='imagem de patinhas de cachorro' width={110} height={110} className='object-cover overflow-hidden absolute left-1 bottom-2' />
          <h2 className="font-bold text-3xl text-customOrange uppercase mt-[55px]">serviços</h2>
          <Line
            type='orange'
            className='max-w-[200px] mt-[-65px]'
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
        <div className="relative">
          <Image src='/assets/cachorro2.png' alt='imagem de um cachorro apoiado' width={135} height={135} className='absolute mt-[-114px] ml-4' />
          <div className="bg-customBlack flex flex-col items-center justify-center h-[410px]">
            <h3 className="uppercase font-extrabold text-customOrange text-3xl pb-14">como funciona?</h3>
            <p className="capitalize font-bold text-customOrange text-xl pb-4">avaliação personalizada</p>
            <p className='text-customWhite text-sm text-center pb-9 max-w-[285px]'>Entendemos seu cão a fundo através de uma avaliação presencial, para um treinamento sob medida para você e o seu cão.</p>
            <Button
              href='#'
              content='contato'
            />
          </div>
        </div>
      </div>
      <div id="fourth-section">
        <div className="bg-customRed flex flex-col items-center justify-center">
          <div className="flex items-center w-full">
            <LineTitle lineType='white' className='text-customWhite text-center text-3xl font-extrabold min-w-[188px]'>
              <h4 className='flex flex-col'>SOBRE NÓS
                <span className='italic font-light text-lg'>"Quem sou eu?"</span>
              </h4>
            </LineTitle>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src='/assets/rodrigo-sobre-nos.png' alt='foto do Rodrigo segurando uma coleira' width={300} height={300} className='rounded-3xl' />
            <p className="text-center text-customWhite text-base max-w-[330px]"> Fundada em [ano] por Rodrigo P. Alves, a Top Cães é fruto de mais de duas décadas de paixão e dedicação ao mundo canino. Com vasta experiência nacional e internacional, Rodrigo acumulou conhecimento em mais de 30 cursos e seminários, tornando-se referência em adestramento e comportamento canino.
              Na Top Cães, acreditamos que cada cão é único e merece um atendimento exclusivo. Nosso objetivo é fortalecer o vínculo entre você e seu companheiro, proporcionando uma convivência mais feliz e harmoniosa.</p>
          </div>
          <div className="w-full">
            <LineTitle lineType='white' className='uppercase font-bold text-customWhite text-3xl min-w-[203px]'>
              <p>diferenciais</p>
            </LineTitle>
            <div className="flex flex-col justify-center items-center gap-12 pb-12">
              <Differences
                image='/assets/cachorro-com-escudo.png'
                alt='imagem de um cachorro cartoon com um escudo de fundo'
                title='Experiência e Expertise'
                text='Mais de duas décadas de sucesso comprovado.'
              />
              <Differences
                image='/assets/cachorro-com-coleira.png'
                alt='imagem de um cachorro cartoon com uma coleira'
                title='Atendimento Personalizado'
                text='Cada cão é único e merece um plano de treinamento individualizado.'
              />
              <Differences
                image='/assets/mão-com-coração.png'
                alt='imagem cartoon de uma mão segurando um coração'
                title='Amor e Dedicação'
                text='Paixão genuína por transformar a vida dos cães e seus donos.'
              />
            </div>
          </div>
        </div>
      </div>
      <div id="fifth-section">
        <div className="bg-[url('/assets/backgroundTextMobile.png')] bg-cover bg-center bg-no-repeat h-[450px] relative">
          <LineTitle lineType='red' className=''>
            <h5 className="uppercase font-extrabold text-customRed text-3xl">nossos clientes</h5>
          </LineTitle>
          <div className="flex items-center justify-center">
            <Carousel />
          </div>
          <Image src='/assets/cachorro3.png' alt='imagem de um cachorro olhando para cima' width={100} height={100} className='absolute bottom-0 right-4' />
        </div>
      </div>
      <div id="sixth-section"
        className="bg-[url('/assets/bonesBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center h-[570px]">
        <div className="flex items-center justify-center gap-4 px-3 pt-5 pb-10">
          <Image src="/assets/cachorro4.png" alt='Foto de um pastor alemão com o fundo laranja' width={86} height={84} className='' />
          <h6 className="font-extrabold text-customOrange text-3xl text-start">
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
