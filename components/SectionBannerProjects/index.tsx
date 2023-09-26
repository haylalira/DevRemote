import WeizeImage from '../../public/weize.svg'
import Fly4meImage from '../../public/Fly4me.svg'
import Kitatudo from '../../public/Kitatudo.svg'


import Image from 'next/image'

export function SectionBannerProjects() {
  return (

    <section id="Sessão banner devRemote" className="flex-col items-center justify-center w-full mt-10 sm:mt-24 mb-16 sm:mb-36">
    <div className='flex flex-col sm:flex-row items-center justify-center  gap-5'>
      <div className="w-full sm:w-1/3">
        <Image
          src={Kitatudo}
          alt="Kitatudo Image"
          width={500}
          height={600}
          className='rounded-md'
          title='KitaTudo is a SAAS/B2B fintech application mainly responsible for paying consumer bills and invoices by credit card and in installments'
        />
      </div>
  
      <div className="w-full sm:w-1/3">
        <Image
          src={WeizeImage}
          alt="Weize Image"
          width={500}
          height={600}
          className='rounded-md'
          title='Weize is an equipment, employee, and maintenance management CRM application website'
        />
      </div>
  
      <div className="w-full sm:w-1/3">
        <Image
          src={Fly4meImage}
          alt="Fly4me Image"
          width={500}
          height={600}
          className='rounded-md'
          title='Fly4me is a drone rental platform for media capture'
        />
      </div>
    </div>
  </section>
  

  )
}