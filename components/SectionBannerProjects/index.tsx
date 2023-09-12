import WeizeImage from '../../public/weize.svg'
import Fly4meImage from '../../public/Fly4me.svg'
import Kitatudo from '../../public/Kitatudo.svg'


import Image from 'next/image'

export function SectionBannerProjects() {
  return (

    <section id="Sessão banner devRemote" className="flex-col items-center justify-center  w-full h-[550px] rounded-md mt-24 mb-36 " >
      <div className='flex items-center justify-center gap-5 '>
        <div>
          <Image src={Kitatudo}
            alt="My Image"
            width={500}
            height={600}
            className='rounded-md'
            title='KitaTudo is a SAAS/B2B fintech application mainly responsible for paying consumer bills and invoices by credit card and in installments'
          />
        </div>

        <Image src={WeizeImage}
          alt="My Image"
          width={500}
          height={600}
          className='rounded-md'
          title='weise is an equipment, employee and maintenance management CRM application website'
        />

        <Image src={Fly4meImage}
          alt="My Image"
          width={500}
          height={600}
          className='rounded-md'
          title='Fly4me is a drone rental platform for media capture'
        />
      </div>
    </section>

  )
}