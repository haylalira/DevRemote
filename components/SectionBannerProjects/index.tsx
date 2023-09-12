import WeizeImage from '../../public/weize.svg'
import Fly4meImage from '../../public/Fly4me.svg'
import Kitatudo from '../../public/Kitatudo.svg'


import Image from 'next/image'

export function SectionBannerProjects(){
    return(
        <div>
            <section id="Sessão banner devRemote" className="flex items-center justify-center gap-5  w-full h-[550px] rounded-md mt-24 mb-36 " >


<Image  src={Kitatudo}
      alt="My Image"
      width={500}
      height={600}
      className='rounded-md' 
      data-aos="fade-up"
    />           
              <Image  src={WeizeImage}
      alt="My Image"
      width={500}
      height={600}
      className='rounded-md' 
      data-aos="fade-up"
    />

<Image  src={Fly4meImage}
      alt="My Image"
      width={500}
      height={600}
      className='rounded-md' 
      data-aos="fade-up"
    />


        </section>
        </div>
    )
}