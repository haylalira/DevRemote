'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import axios from 'axios';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { DialogUp } from '@/components/DialogUp';
import { useForm, Controller } from 'react-hook-form';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const createUserFormSchema = z.object({
  name: z.string().nonempty('nome é obrigatório').transform(name => { return name.trim().split(' ').map(word => { return word[0].toLocaleUpperCase().concat(word.substring(1)) }).join('') }),
  email: z.string().nonempty('O e-mail é obrigatório').email('formato de email invalido'),
  company: z.string().nonempty('identifique a impresa'),
  message: z.string().nonempty('não podemos enviar uma mensagem vazia'),
  price: z.enum(["default", "comfortable", "compact", "more"])
})


type CreateUseFormData = z.infer<typeof createUserFormSchema>

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset, control, } = useForm<CreateUseFormData>({ resolver: zodResolver(createUserFormSchema) });
  console.log(errors)
  

  function onSumibtForm(data: CreateUseFormData) {
    console.log('entrou formSumibt')
    axios.post('/api/email', data).finally(() => {
      reset();
      console.log('eu fui enviado')
      console.log(data.price, "hey brother")
    }).catch((error) => {
      console.log("não enviou")
    })
  }




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

     <section id="Sessão como Trabalhamos" className="flex flex-col bg-white w-full h-full ">
     <div className='mx-auto max-w-7xl px-6 lg:px-8   '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
  <p className="font-sans font-medium text-xl break-all mt-10">
    Contact us
  </p>
  <h1 className="font-sans font-medium text-4xl break-all mt-4 sm:mt-9  font-display   tracking-tight text-neutral-950 [text-wrap:balance] ">
    Let’s work together
  </h1>
  <p className="mt-4 sm:mt-6  text-gray-600 text-xl font-light">
    We can’t wait to hear from you.
  </p>
  </div>
         </div>
  <section className="flex-col mt-4 sm:mt-8 md:mt-16 lg:mt-24 xl:mt-24 ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-96">
  <div className='mx-auto max-w-7xl px-6 lg:px-8   '>
           <div className='mx-auto max-w-2xl lg:max-w-none'>
    <h1 className="font-sans font-medium text-xl break-all mb-4 sm:mb-8 md:mb-16 lg:mb-20 xl:mb-10">
      Work inquiries
    </h1>
    <div> 
      <form onSubmit={handleSubmit(onSumibtForm)}>
     
        <Textarea className="h-24 sm:h-32 md:h-40 lg:h-48  w-full sm:w-7/12 rounded-tl-3xl rounded-b-none text-lg" placeholder="name" {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
        <Textarea className="h-24 sm:h-32 md:h-40 lg:h-48  w-full sm:w-7/12 rounded-none text-lg mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-4" placeholder="Email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <Textarea className="h-24 sm:h-32 md:h-40 lg:h-48 w-full sm:w-7/12 rounded-none text-lg mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-4" placeholder="Company" {...register('company')} />
        {errors.company && <span>{errors.company.message}</span>}
        <Textarea className="h-24 sm:h-32 md:h-40 lg:h-48  w-full sm:w-7/12 rounded-none text-lg mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-4" placeholder="Message" {...register('message')} />
        {errors.message && <span>{errors.message.message}</span>}

        <Card className=" h-56 w-full sm:w-7/12 rounded-none text-lg flex mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-4 flex-col">
          <h1 className="mx-auto font-sans font-medium text-xl break-all  text-gray-400 mt-5">
            Budget
          </h1>
          <Controller
            name="price"
            control={control}
            defaultValue="default"
            render={({ field }) => (
              <RadioGroup
                className="flex flex-wrap sm:flex-col mt-2"
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
              >
                <div className='mx-auto'>
                <RadioGroupItem value="default" id="default" onClick={() => field.onChange("default")} />
                <label htmlFor="r1">$25K – $50K</label>
                </div>
                <div className='mx-auto'>
                <RadioGroupItem value="comfortable" id="comfortable" onClick={() => field.onChange("comfortable")} />
                <label htmlFor="r2">$50K – $100K</label>
                </div>
                <div className='mx-auto'>
                <RadioGroupItem value="compact" id="compact" onClick={() => field.onChange("compact")} />
                <label htmlFor="r3">$100K – $150K</label>
                </div>
                <div className='mx-auto'>
                <RadioGroupItem value="more" id="more" onClick={() => field.onChange("more")} />
                <label htmlFor="r4">More than $150K</label>
                </div>
              </RadioGroup>
            )}
          />
        </Card>

        <Button type="submit" className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 h-12 w-full sm:w-60 mb-12 rounded-2xl">
          Let’s work together
        </Button>
       
      </form>
      </div> 
         </div>
    </div>
  </section>
</section>

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
  )
}