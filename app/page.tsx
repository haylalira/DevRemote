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
 
      <header id="header" className="flex items-end rounded-t-[40px] mt-2 bg-white w-full">
        <div className="flex w-full justify-around mt-16">
          <Link href="/Home" className='font-bold text-3xl'>DevRemote</Link>

          <div className="flex gap-6">
            <Button
              className="py-5 rounded-full text-sm shadow-xl transition ease-in-out delay-150 bg-gray-950 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 hover:shadow-gray-800/50 duration-300">
              <Link href="/Contact" className='text-sm font-bold text-white'>Contact us</Link>
            </Button>
          <DialogUp />  
          </div>
          </div>
      </header> 

    <main>
        <section id="inicioPage" className="bg-white w-full h-[2900px]" >
          <section className='flex flex-col h-[900px] my-custom-fade-in'  >
            <h1 className='scroll-m-2 font-sans font-medium text-7xl break-all mt-80 ml-80'>
              We are one
              technology <br /> company
            </h1>
            <h1 className='mt-10 text-gray-600 text-2xl ml-80 font-normal'>Welcome to devRemote, your gateway to cutting-edge technology solutions! <br /> We specialize in delivering exceptional web and mobile projects, transforming your <br />  ideas into reality with innovation and expertise.</h1>
          </section>

          <SectionCardBlack /> 


          <h1 className=' font-sans font-medium text-5xl break-all mt-32 ml-80 text-gray-800' >
            Harnessing technology for <br /> a brighter future
          </h1>
          <p className='mt-10 text-gray-600 text-xl ml-80 font-normal' > We specialize in delivering exceptional web and mobile projects, <br />  transforming your ideas into reality with innovatioand expertise.</p>
          <CardSectionHarnessing />
          <p className=' font-sans font-medium text-2xl break-all mt-44 ml-80'  >Other projects</p>
          <h1 className=' font-sans font-medium text-5xl break-all mt-10 ml-80' >
            Developed
          </h1>
          <SectionBannerProjects />
        </section>



        <section id=" Sessão como Trabalhamos" className="flex flex-col  bg-white  w-full h-full ">
          <p className=' font-sans font-medium text-2xl break-all mt-44 ml-80'  >Our process</p>
          <h1 className=' font-sans font-medium text-5xl break-all mt-14 ml-80' >
            How we work
          </h1>
          <p className='mt-10 text-gray-600 text-xl ml-80 font-light' >At our technology startup,<br /> we are driven by innovation and leveraging our resources strategically to deliver exceptional value to our clients. <br /> Our core philosophy revolves around optimizing efficiency while maintaining a strong focus on customer satisfaction.<br /> To achieve this, we embrace cutting-edge technologies and agile methodologies to continually improve and evolve our products and services.</p>
          <CardInfoHowJob />
        </section >


        
        <section id=" Sessão Preços e valores " className="flex flex-col  bg-gray-50 w-full h-full">
          <p className=' font-sans font-medium text-2xl break-all mt-44 ml-80'  > Our values</p>
          <h1 className=' font-sans font-medium text-5xl break-all mt-5 ml-80' >
            Balancing reliability <br /> and innovation
          </h1>
          <p className='mt-10 text-gray-600 text-xl ml-80 font-light' > We strive to stay at the forefront of emerging trends and technologies,<br /> while completely ignoring them and forking that old Rails project we feel comfortable using.<br /> We stand by our core values to justify that decision.</p>
          <TextInfoSessãoPrice />
          
          <CardContato />
        </section>
      </main>

       
      <footer id="Sessãofooter " className=" flex flex-col bg-gray-50 w-full h-full  ">
        <section id="Sessão de linkd para entrar em contato " className=" bg-gray-50 w-full h-full grid grid-cols-2 gap-96"   >
          <div className='flex gap-36 justify-center ml-60'>

            <div className='flex flex-col '>

              <h1 className=' font-sans font-medium text-lg break-all mt-44 mb-3 ' >Company</h1>
              <Link href="/Contact" className='text-sm font-light text-gray-700 '> Contact us → </Link>

            </div>


            <div className='flex flex-col'>
              <h1 className=' font-sans font-medium text-lg break-all mt-44  mb-3' >Connect</h1>
              <Link href="/" className='text-sm font-light text-gray-700 mb-2 ' >Linkedin</Link>
              <Link href="/" className='text-sm font-light text-gray-700 mb-2'>GitHub</Link>
              <Link href="/" className='text-sm font-light text-gray-700  '>Instagram</Link>
            </div>

          </div>

          <div className='flex flex-col'>
            <h1 className=' font-sans font-medium text-lg break-all mt-44 ' >Sign up for our newsletter</h1>

            <a className=' font-light text-gray-700 text-sm mt-5 mb-4' >Subscribe to get the latest design news, articles, <br /> resources and inspiration.</a>

            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className='py-6  rounded-lg' />
              <Button type="submit">Subscribe</Button>
            </div>

          </div>
        </section >
        <h1 className=' flex justify-around text-gray-200 mt-36  mb-36'>______________________________________________________________________________________________________</h1>
        <div className=' flex justify-around mb-9'>
          <h1 className='text-4xl  text-gray-950 font-bold'>DevRemote</h1>
          <p className=' text-sm font-light text-gray-500 mt-6  '> © Studio Agency Inc. 2023</p>
        </div>
      </footer>

    </div>

  );
}
