import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SetupImage from '../../public/setup2.png';
import SetupImageDark from '../../public/setup.png';
import SetupImageLight from '../../public/SetupImageLight.png';

export function CardInfoHowJob() {
  return (
    <>
      {/* //01 card */}
      <div className='flex flex-col sm:flex-row justify-center gap-10 mt-6 sm:mt-44 mb-10'>
        <Image
          src={SetupImage}
          alt="My Image"
          width={600}
          height={700}
          className='rounded-md'
        />


        <div className='w-full   sm:w-[560px]'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8   '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
         
          <h1 className='font-sans font-bold text-xl sm:text-2xl break-all mt-4 sm:mt-9'>
            / 01
          </h1>
          <h2 className='font-sans font-medium text-3xl sm:text-4xl break-all mt-2 sm:mt-1 mb-5 sm:mb-10'>
            Discover
          </h2>
          <p className='mt-2 sm:mt-10 text-gray-600 text-xl sm:text-2xl font-light'>
            At our technology startup, we focus intensely on our customers' unique needs and goals. Through in-depth analysis of their operations, we unravel the complexities of their business, identifying the key factors that drive their success.
          </p>
          <p className='mt-2 sm:mt-10 text-gray-600 text-xl sm:text-2xl font-light'>
            Our team of highly qualified technology experts thoroughly investigates existing systems and processes, constantly looking for opportunities for improvement. Rather than simply analyzing, our talented technology experts dive deep into the customer's digital infrastructure, ensuring seamless integration of our solutions.
          </p>

          
          <h1 className='font-sans font-bold text-2xl sm:text-2xl break-all mt-4 sm:mt-9'>
            Included in this phase
          </h1>
          <div className='gap-2 sm:gap-5 mt-2 sm:mt-5 flex flex-wrap'>
            <Button className="py-2 sm:py-7 rounded-full text-sm sm:text-[10px] shadow-xl">
              identifying your needs
            </Button>
            <Button className="py-2 sm:py-7 px-4 sm:px-7 rounded-full text-sm sm:text-[10px] shadow-xl">
              know your goals
            </Button>
            <Button className="py-2 sm:py-7 px-7 sm:px-10 rounded-full text-sm sm:text-[10px] shadow-xl">
              identify complexities
            </Button>
            <Button className="py-2 sm:py-7 rounded-full text-sm sm:text-[10px] shadow-xl">
              drives your success
            </Button>
          </div>
        </div>
      </div>
      </div> 
         </div>

      {/* //02 card */}
      <div className='flex flex-col sm:flex-row justify-center  mt-6 sm:ml-10'>
        <div className='w-full  mb-10 sm:w-[560px]'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8   '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h1 className='font-sans font-bold text-xl sm:text-2xl break-all mt-4 sm:mt-9'>
            / 02
          </h1>
          <h2 className='font-sans font-medium text-3xl sm:text-4xl break-all mt-2 sm:mt-1 mb-5 sm:mb-10'>
            Approach
          </h2>
          <p className='mt-2 sm:mt-10 text-gray-600 text-xl sm:text-2xl font-light'>
            Our approach based on agile methodologies and clean principles allows for the rapid delivery of projects, minimizing the occurrence of delays and errors. We are ready to react quickly to changes and new requests, ensuring that the end result is effectively useful for your business.
          </p>

          <h1 className='font-sans font-bold text-2xl sm:text-2xl break-all mt-4 sm:mt-9'>
            Included in this phase
          </h1>
          <div className='gap-2 sm:gap-5 mt-2 sm:mt-5 flex flex-wrap'>
            <Button className="py-2 sm:py-5 rounded-full text-sm sm:text-[10px] shadow-xl">
              Principles
            </Button>
            <Button className="py-2 sm:py-5 px-4 sm:px-7 rounded-full text-sm sm:text-[10px]shadow-xl">
              Agility
            </Button>
            <Button className="py-2 sm:py-5 px-7 sm:px-10 rounded-full text-sm sm:text-[10px] shadow-xl">
              No delays
            </Button>
            <Button className="py-2 sm:py-5 rounded-full text-sm sm:text-[10px] shadow-xl">
              Results
            </Button>
          </div>
        </div>
        </div> 
         </div>
        <Image
          src={SetupImageDark}
          alt="My Image"
          width={600}
          height={700}
          className='rounded-md'
        />
      </div>

      {/* //03 card */}
      <div className='flex flex-col sm:flex-row justify-center gap-10 mt-6 sm:mt-44 mb-6 sm:mb-48'>
        <Image
          src={SetupImageLight}
          alt="My Image"
          width={600}
          height={700}
          className='rounded-md'
        /> 
        <div className='w-full sm:w-[560px]'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8   '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h1 className='font-sans font-bold text-xl sm:text-2xl break-all mt-4 sm:mt-9'>
            / 03
          </h1>
          <h2 className='font-sans font-medium text-3xl sm:text-4xl break-all mt-2 sm:mt-1 mb-5 sm:mb-10'>
            Reliability
          </h2>
          <p className='mt-2 sm:mt-10 text-gray-600 text-xl sm:text-2xl font-light'>
            We are a company rich in experience in the technology sector. We fully understand the challenges inherent to this market and are fully qualified to provide effective results for your company. Our expertise encompasses contemporary and proven technologies, which guarantee the excellence of our systems and your satisfaction.
          </p>

          <h1 className='font-sans font-bold text-2xl sm:text-2xl break-all mt-4 sm:mt-9'>
            Included in this phase
          </h1>
          <div className='gap-5 sm:gap-5 mt-2 sm:mt-5 flex flex-wrap'>
            <Button className="py-2 sm:py-5 rounded-full text-sm sm:text-[10px] shadow-xl">
              Experience
            </Button>
            <Button className="py-2 sm:py-5 px-4 sm:px-7 rounded-full text-sm sm:text-[10px] shadow-xl">
              Technology
            </Button>
            <Button className="py-2 sm:py-5 px-7 sm:px-10 rounded-full text-sm sm:text-[10px] shadow-xl">
              Reliability
            </Button>
            <Button className="py-2 sm:py-5 rounded-full text-sm sm:text-[10px] shadow-xl">
              Capacity
            </Button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
