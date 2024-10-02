import Image from 'next/image';
import Button from './components/button';
import PrincipalButton from './components/principalButton';
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
    <main className="overflow-hidden">
      <div id="first-section">
        <div className="h-[86vh] bg-customRed relative
        md:flex md:flex-row-reverse
        md:h-[95vh]">
          <div className="md:w-[50vw] md:flex md:flex-col-reverse md:items-end">
            <div className="bg-customWhite h-28 w-full absolute top-0 z-0
            md:w-[50%] md:relative md:h-[10vh]">
            </div>
            <div className="flex justify-center h-[40vh]
            md:h-[85vh] md:w-full">
              <Image src="/assets/Rodrigo-pastor-alemão.png" alt='foto do Rodrigo adestrando um pastor alemão' width={1000} height={1000} className='object-cover object-bottom rounded-b-3xl z-10 h-full w-[85%]
              md:w-full md:rounded-br-none' />
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly h-[46vh]
          md:items-start md:justify-between md:w-[50vw] md:h-[95vh] md:pt-4">
            {/* versão mobile */}
            <div className="md:hidden mt-[-15px] h-md:mt-[-58px] h-lg:mt-[-55px] h-md:py-5 h-lg:pb-6 h-lg:pt-4">
              <LineTitle lineType='white' className='w-full'>
                <Image src='/assets/top-caes-logo-(letra-branca).png' alt='logo da TopCães' width={1000} height={1000} className='min-w-[140px] h-md:min-w-[165px] h-lg:min-w-[180px]' />
              </LineTitle>
            </div>
            {/* versão tablet/desktop */}
            <div className="hidden w-full
            md:block">
              <div className="flex w-full items-center justify-between">
                <Image src='/assets/top-caes-logo-(letra-branca).png' alt='logo da TopCães' width={1000} height={1000} className='w-[220px] 
                md:pl-2
                3xl:w-[400px]' />
                <Line type='white' className='min-w-full mt-8' />
              </div>
            </div>
            <div className="flex flex-col items-center gap-12
            md:gap-0  md:pb-20 md:justify-evenly md:h-full">
              <h1 className="text-center text-3xl uppercase font-extrabold text-customWhite px-3 h-md:pb-0 h-md:mt-[-48px]
              md:text-6xl md:w-full
              2xl:text-7xl
              3xl:text-9xl">seu <span className="text-customBlack">cão</span> também merece <span className="text-customBlack">educação</span>!</h1>
              {/* mobile */}
              <div className="md:hidden h-md:mt-[-18px]">
                <Button
                  className=''
                  href='#second-section'
                  content='saiba mais'
                />
              </div>
              {/* desktop */}
              <div className="hidden md:block">
                <PrincipalButton
                  className='hidden md:block'
                  href='#second-section'
                  content='saiba mais'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="second-section">
        <div className="bg-customBlack h-[165px] flex flex-col items-center image-after relative
        md:min-h-[215px]
        3xl:min-h-[400px]">
          <Image src='/assets/patinhas.png' alt='imagem de patinhas de cachorro' width={400} height={400} className='object-cover overflow-hidden absolute left-1 bottom-2 w-[115px]
          md:w-40
          2xl:left-9
          3xl:w-72' />
          <h2 className="font-extrabold text-3xl text-customOrange uppercase mt-14
          md:text-5xl md:mt-16
          2xl:text-5xl
          3xl:text-8xl 3xl:mt-32">
            serviços</h2>
          <Line
            type='orange'
            className='max-w-[200px] mt-[-65px]
            md:max-w-[380px]
            3xl:max-w-[600px]'
          />
        </div>
        <div className="bg-[url('/assets/backgroundTextMobile.png')] bg-cover bg-top bg-no-repeat h-[1150px] relative z-0
        md:h-[450px] 
        lg:bg-[url('/assets/backgroundText.png')]
        2xl:h-[550px]
        3xl:h-[850px]">
          <div id="padrão" className="mt-[-40px] absolute z-20 left-1/2 transform -translate-x-1/2
          md:mt-[-55px]
          3xl:mt-[-100px]">
            <div className="flex flex-col gap-14
            md:flex-row md:gap-0 md:items-baseline md:justify-evenly md:min-w-[100vw]">
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
          <Image src="/assets/top-caes-logo-(letra-preta).png" alt='imagem de um cachorro apoiado' width={300} height={300} className='absolute bottom-2 right-2 max-w-20
          md:max-w-24
          2xl:max-w-32
          3xl:max-w-44' />
        </div>
      </div>
      <div id="third-section">
        <div className="relative">
          <Image src='/assets/cachorro2.png' alt='imagem de um cachorro apoiado' width={300} height={300} className='absolute mt-[-109px] max-w-32 ml-4
          md:max-w-40 md:mt-[-136px] md:ml-10 md:z-10
          2xl:max-w-52 2xl:mt-[-177px] 2xl:ml-6
          3xl:max-w-96 3xl:mt-[-255px]' />
          <div className="bg-customBlack flex flex-col items-center justify-center h-[410px] 
          md:relative md:z-0
          2xl:h-[550px]
          3xl:h-[650px]">
            <div className="text-center w-full pb-14
            md:text-start md:pl-10
            2xl:pl-28
            3xl:pl-48">
              <h3 className="uppercase font-extrabold text-customOrange text-3xl 
              md:text-4xl
              2xl:text-5xl 2xl:mt-[-65px]
              3xl:text-7xl 3xl:mt-[-40px]">como funciona?</h3>
            </div>
            <p className="capitalize font-bold text-customOrange text-xl pb-4
            2xl:text-3xl
            3xl:text-5xl 3xl:pb-8">avaliação personalizada</p>
            <p className='text-customWhite text-sm text-center pb-9 max-w-[285px]
            2xl:text-xl 2xl:max-w-[450px]
            3xl:text-2xl 3xl:max-w-[600px] 3xl:pb-14'>Entendemos seu cão a fundo através de uma avaliação presencial, para um treinamento sob medida para você e o seu cão.</p>
            <Button
              className=''
              href='#'
              content='contato'
            />
            <Image src='/assets/patinhas.png' alt='imagem de patinhas de cachorro cartoon' width={500} height={500} className='hidden md:block absolute right-2 transform -scale-x-100
            md:w-[300px]
            2xl:w-[400px]
            3xl:w-[450px]' />
          </div>
        </div>
      </div>
      <div id="fourth-section">
        <div className="bg-customRed flex flex-col items-center justify-center
        lg:h-[900px] lg:flex-row lg:justify-between
        2xl:h-[800px]
        3xl:h-[1000px]">
          <div className="lg:w-[39vw] lg:h-full w-full">
            <div className="flex flex-col-reverse items-center w-full h-full
            lg:items-start
            3xl:justify-between">
              <div className="hidden lg:block bg-customBlack flex-grow w-[50%]
              3xl:min-h-28"></div>
              <Image src='/assets/Rodrigo-sobre-nos.png' alt='foto do Rodrigo segurando uma coleira' width={1000} height={1000} className='object-cover rounded-3xl mt-[-20px] pb-4 w-[80%]
              md:max-w-[550px] md:mt-0
              lg:min-w-[39vw] lg:max-w-[39vw] lg:mt-0 lg:pb-0 lg:rounded-t-none lg:rounded-bl-none lg:rounded-br-3xl lg:min-h-[670px]
              ' />
              {/* versão mobile/tablet */}
              <div className="lg:hidden block w-full">
                <LineTitle lineType='white' className='text-customWhite text-center min-w-[188px]
                md:min-w-[300px]'>
                  <h4 className='flex flex-col text-3xl font-extrabold
                  md:text-5xl'>SOBRE NÓS
                    <span className='italic font-light text-lg
                    md:text-3xl'>&quot;Quem sou eu?&quot;</span>
                  </h4>
                </LineTitle>
              </div>
            </div>
          </div>
          <div className="lg:w-[61vw] w-full
          2xl:flex 2xl:flex-col 2xl:justify-between">
            {/* versão desktop */}
            <div className="hidden lg:block w-full 
            2xl:pt-6">
              <div className="flex items-center justify-between w-full">
                <Line type='white' className='text-customWhite' />
                <h4 className='flex flex-col text-4xl text-end text-customWhite font-extrabold min-w-[300px] mr-10
                lg:text-6xl lg:min-w-[360px]
                3xl:text-7xl 3xl:min-w-[450px]'>SOBRE NÓS
                  <span className='italic font-light text-2xl
                  3xl:text-4xl'>&quot;Quem sou eu?&quot;</span>
                </h4>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <p className="text-center text-customWhite text-base max-w-[80%]
              2xl:
              3xl:text-2xl"> Fundada em [ano] por Rodrigo P. Alves, a Top Cães é fruto de mais de duas décadas de paixão e dedicação ao mundo canino. Com vasta experiência nacional e internacional, Rodrigo acumulou conhecimento em mais de 30 cursos e seminários, tornando-se referência em adestramento e comportamento canino.
                Na Top Cães, acreditamos que cada cão é único e merece um atendimento exclusivo. Nosso objetivo é fortalecer o vínculo entre você e seu companheiro, proporcionando uma convivência mais feliz e harmoniosa.</p>
            </div>
            <div className="w-full">
              {/* versão mobile/tablet */}
              <div className="lg:hidden">
                <LineTitle lineType='white' className='uppercase font-bold text-customWhite text-center text-3xl min-w-[203px]
                md:text-5xl md:mx-2 md:min-w-[340px]'>
                  <p>diferenciais</p>
                </LineTitle>
              </div>
              {/* versão desktop */}
              <div className="hidden lg:block w-full">
                <div className="flex items-center justify-between w-full">
                  <p className='flex flex-col text-5xl text-end text-customWhite font-bold uppercase ml-10 mr-2
                  3xl:text-7xl'>diferenciais</p>
                  <Line type='white' className='text-customWhite' />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-12 pb-20
              md:flex-row md:justify-evenly md:items-baseline
              lg:mx-4">
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
      </div>
      <div id="fifth-section">
        <div className="bg-[url('/assets/backgroundTextMobile.png')] bg-cover bg-top bg-no-repeat h-[450px] relative
        lg:bg-[url('/assets/backgroundText.png')]
        2xl:h-[600px]
        3xl:h-[750px]">
          <LineTitle lineType='red' className=''>
            <h5 className="uppercase font-extrabold text-customRed text-3xl
            md:text-5xl md:w-[460px]
            2xl:text-6xl 2xl:w-[580px]
            3xl:text-7xl 3xl:w-[700px]">nossos clientes</h5>
          </LineTitle>
          <div className="flex items-center justify-center
          2xl:pt-10
          3xl:pt-16">
            <Carousel />
          </div>
          <Image src='/assets/cachorro3.png' alt='imagem de um cachorro olhando para cima' width={300} height={300} className='absolute bottom-0 right-4 w-28
          lg:w-36 lg:right-36
          2xl:w-44 2xl:right-56
          3xl:w-60 3xl:right-80' />
        </div>
      </div>
      <div id="sixth-section"
        className="bg-[url('/assets/bonesBackground.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center h-[600px] 
        md:h-[800px]
        2xl:h-[950px] 2xl:relative 2xl:z-0
        3xl:h-[1250px]">
        <div className="flex items-center justify-center gap-4 px-3 pt-5 pb-10 w-full
        2xl:items-center 2xl:justify-start 2xl:pl-20 2xl:pt-10 2xl:gap-8">
          <Image src="/assets/cachorro4.png" alt='Foto de um pastor alemão com o fundo laranja' width={500} height={500} className='w-28
          md:w-44
          2xl:w-52
          3xl:w-64' />
          <h6 className="font-extrabold text-customOrange text-3xl text-start
          md:text-5xl
          3xl:text-7xl">
            ONDE ESTAMOS LOCALIZADOS?
          </h6>
        </div>
        <Map className={`pb-10
          3xl:pb-20`} />
        <Button
          className=''
          href='#'
          content='contato'
        />
      </div>
      <PreFooter className=''/>
      <Footer />
    </main>
  );
}
