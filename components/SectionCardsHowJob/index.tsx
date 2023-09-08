
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import SetupImage from '../../public/setup2.png'
import SetupImageDark from '../../public/setup.png'
import SetupImageLight from '../../public/SetupImageLight.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export function CardInfoHowJob(){
   useEffect(()=>{
    AOS.init({duration:2000})
   },[])
    return(
        <>
           {/* //01 card*/}
           <div className='flex flex-row justify-center gap-20 mt-44'  data-aos="fade-up">
            
           
              <Image  src={SetupImage}
      alt="My Image"
      width={600}
      height={700}
      className='rounded-md' 
      data-aos="fade-up"
    />
           
            <div className='w-[560px]'  >
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 01
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success.  </p>
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
            
              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className=' gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button>
                <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
              </div>
            </div>
          </div>

          {/* //02 card*/}
          <div className='flex flex-row justify-center gap-20 mt-44'  data-aos="fade-up">
            <div className='w-[560px]'>
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 02
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success. </p>
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
             
              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className=' gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button>
                <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
              </div>
            </div>
            <Image  src={SetupImageDark}
      alt="My Image"
      width={600}
      height={700}
      className='rounded-md ' 
    />
          </div>
          {/* //03 card */}
          <div className='flex flex-row justify-center gap-20 mt-44 mb-48'  data-aos="fade-up">
          <Image  src={SetupImageLight}
      alt="My Image"
      width={600}
      height={700}
      className='rounded-md'
    />
            <div className='w-[560px]'>
              <h1 className=' font-sans font-bold text-xl break-all mt-9  '>
                / 03
              </h1>
              <h2 className=' font-sans font-medium text-3xl break-all mt-1 mb-10 '>
                Discover
              </h2>
              <p className='mt-10 text-gray-600 text-xl  font-light'>At our technology startup, we adopt a customer-centric approach, collaborating closely with our clients to gain a deep understanding of their unique needs and objectives. By immersing ourselves in their operations, we seek to unravel the intricacies of their business and identify what drives their success. </p>
                <p className='mt-10 text-gray-600 text-xl  font-light' >Our team of skilled tech experts passionately explores your technological landscape, carefully analyzing existing systems and processes to uncover areas for improvement. Instead of private investigators, we employ talented tech specialists who diligently study your digital infrastructure to ensure seamless integration of our solutions.</p>
             
              <h1 className=' font-sans font-bold text-2sm break-all mt-9  ' >Included in this phase</h1>
              <div className='gap-5 mt-5 flex-col grid grid-cols-3'>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 px-7 rounded-full text-sm  shadow-xl" >
                  In-depth questionnaires
                </Button>
                <Button className="py-5  px-10 rounded-full text-sm  shadow-xl" >
                  In-depth
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
                <Button className="py-5 rounded-full text-sm  shadow-xl" >
                  questionnaires
                </Button>
              </div>
            </div>
          </div></>
    )
}