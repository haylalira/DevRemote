import { CardContato } from '@/components/CardContato';
import { CardInfoHowJob } from '@/components/SectionCardsHowJob';

import { TextInfoSessãoPrice } from '@/components/textInfoSessãoPrice';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import Link from 'next/link';

import { CardSectionHarnessing } from '@/components/CadSectionHarnessing ';
import { DialogUp } from '@/components/DialogUp';
import { SectionBannerProjects } from '@/components/SectionBannerProjects';
import { SectionCardBlack } from '@/components/SectionCardBlack';

export default function Home() {
  
  return (
    <div className="bg-black">
 
      <header id="header" className="flex items-end rounded-t-[40px] mt-2 bg-white w-full ">
       
        <div className="flex w-full justify-between mt-16 mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <div>
          <Link href="/Home" className='font-bold text-xl  md:text-2xl lg:text-3xl'>DevRemote</Link>
          </div>
          <div className="flex gap-6 ">
            <div className='hidden md:block '>
          <Button className="py-3 xl:py-5 items-center text-sm xl:text-base shadow-xl rounded-3xl transition ease-in-out delay-150 bg-gray-950 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 hover:shadow-gray-800/50 duration-300 ">
  <Link href="/Contact" className='text-sm sm:text-base font-bold  text-white'>Contact us</Link>
</Button></div>
          <DialogUp />  
          </div>
          </div>
      </header> 

    <main>
    <section id="inicioPage" className="bg-white w-full h-full flex flex-col  " >

          <section className='mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-8 md:mt-30 my-custom-fade-in  ' >
            <div className='mx-auto  lg:max-w-none max-w-3xl'>

            
            <h1 className='font-sans font-medium text-6xl   md:text-6xl lg:text-6xl xl:text-7xl font-display   tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl '>
              We are one
              technology <br /> company
            </h1>
            <h1 className='   font-normal mt-6 text-xl text-neutral-600 '>Welcome to devRemote, your gateway to cutting-edge technology solutions! <br /> We specialize in delivering exceptional web and mobile projects, transforming your <br />  ideas into reality with innovation and expertise.</h1>
           </div>
          </section>
         
          <SectionCardBlack /> 

           <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h1 className=' font-sans block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950' >
            Harnessing technology for <br /> a brighter future
          </h1>
          <p className='mt-10 text-gray-600 text-xl  font-normal  ' > We specialize in delivering exceptional web and mobile projects, <br />  transforming your ideas into reality with innovatioand expertise.</p>
         </div> 
         </div>
         <CardSectionHarnessing />

         <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
          <p className='mb-8 block font-display text-base font-semibold text-neutral-950' >Other projects</p>
          <h1 className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950' >
            Developed
          </h1>
          <SectionBannerProjects />
          </div>
          
         
        </section>



<section id="Sessão como Trabalhamos" className='flex flex-col w-full h-full bg-white '>
  <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56'>
  <div className='max-w-3xl'>
    <p className='mb-4 block font-display text-base font-semibold text-neutral-950'>Our process</p>
    <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
      How we work
    </h1>
    <p className='mt-6 text-xl text-neutral-600'>
      At our technology startup, we are driven by innovation and leveraging our resources strategically to deliver exceptional value to our clients. Our core philosophy revolves around optimizing efficiency while maintaining a strong focus on customer satisfaction. To achieve this, we embrace cutting-edge technologies and agile methodologies to continually improve and evolve our products and services.
    </p>  </div></div>
    <CardInfoHowJob />

</section>


        
        <section id=" Sessão Preços e valores " className="flex flex-col  bg-gray-50 w-full h-full">
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-36 '>
          <div className='max-w-3xl'>
          
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl' >
            Balancing reliability <br /> and innovation
          </h1>
          <p className='mt-6 text-xl text-neutral-600' > We strive to stay at the forefront of emerging trends and technologies,<br /> while completely ignoring them and forking that old Rails project we feel comfortable using.<br /> We stand by our core values to justify that decision.</p>
         </div>  </div><TextInfoSessãoPrice />
          
          <CardContato />
        </section>
      </main>

      <footer id="Sessãofooter" className="flex flex-col bg-gray-50 w-full">
      <section
        id="Sessão de links para entrar em contato"
        className="bg-gray-50 w-full "
      >
        <div className="flex flex-wrap justify-around mt-6">
          <div className="flex flex-col">
            <h1 className="font-sans font-medium text-lg break-all mt-4 sm:mt-44 mb-3">
              Company
            </h1>
            <Link href="/Contact" className="text-sm font-light text-gray-700">
              Contact us →
            </Link>
          </div>

          <div className="flex flex-col mt-6 sm:mt-44">
            <h1 className="font-sans font-medium text-lg break-all mb-3">
              Connect
            </h1>
            <Link href="/" className="text-sm font-light text-gray-700 mb-2">
              Linkedin
            </Link>
            <Link href="/" className="text-sm font-light text-gray-700 mb-2">
              GitHub
            </Link>
            <Link href="/" className="text-sm font-light text-gray-700">
              Instagram
            </Link>
          </div>
        </div>
      </section>
      <hr className="mt-9 sm:mt-36" />
      <div className="flex items-center justify-around mb-4 sm:mb-9 mt-10">
        <h1 className="text-xl  text-gray-950 font-bold">DevRemote</h1>
        <p className="text-sm font-light text-gray-500 ">
          © Studio Agency Inc. 2023
        </p>
      </div>
    </footer>

    </div>

  );
}
