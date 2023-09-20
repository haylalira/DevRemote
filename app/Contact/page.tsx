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
import { z } from 'zod';
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
  const { register, handleSubmit, formState: { errors }, reset, control, setValue } = useForm<CreateUseFormData>({ resolver: zodResolver(createUserFormSchema) });
  console.log(errors)
  const [selectedValue, setSelectedValue] = useState("default");

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

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };


  return (

    <div className="bg-black">
      <header
        id="header"
        className="flex items-end rounded-t-[40px] mt-2 bg-white w-full"
      >
        <div className="flex w-full justify-around mt-16">
          <Link href="/" className="font-bold text-3xl">
            DevRemote
          </Link>

          <div className="flex gap-6 ">
            <Button className="py-5 rounded-full text-sm shadow-xl">
              Contact us
            </Button>
            <DialogUp />
          </div>
        </div>
      </header>

      <section id="Sessão como Trabalhamos" className="flex flex-col bg-white w-full h-full">
        <p className="font-sans font-medium text-xl break-all mt-44 ml-96" >
          Contact us
        </p>
        <h1 className="font-sans font-medium text-5xl break-all mt-9 ml-96" >
          Let’s work together
        </h1>
        <p className="mt-10 text-gray-600 text-xl ml-96 font-light" >
          We can’t wait to hear from you.
        </p>

        <section className="flex-col mt-16 ml-96 ">


          <h1 className="font-sans font-medium text-xl break-all mb-8">
            Work inquiries
          </h1>
          <div>

            <form onSubmit={handleSubmit(onSumibtForm)} >
              <Textarea className="h-24 w-7/12 rounded-tl-3xl rounded-b-none text-lg" placeholder="name" {...register('name')} />
              {errors.name && <span>{errors.name.message}</span>}
              <Textarea className="h-24 w-7/12 rounded-none text-lg " placeholder="Email"  {...register('email')} />
              {errors.email && <span>{errors.email.message}</span>}
              <Textarea className="h-24 w-7/12 rounded-none text-lg" placeholder="Company"{...register('company')} />
              {errors.company && <span>{errors.company.message}</span>}
              <Textarea className="h-24 w-7/12 rounded-none text-lg" placeholder="Message"  {...register('message')} />
              {errors.message && <span>{errors.message.message}</span>}

              <Card className="h-56 w-7/12 rounded-none text-lg flex">

                <h1 className="ml-4 font-sans font-medium text-xl break-all mb-8 text-gray-400 mt-5">
                  Budget
                </h1>

                <Controller
                  name="price"
                  control={control}
                  defaultValue="default" // Define o valor padrão
                  render={() => (
                    <RadioGroup
                      className="grid grid-cols-2 m-5 mt-8"
                     
                    >
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">$25K – $50K</label>

                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">$50K – $100K</label>

                      <RadioGroupItem value="compact" id="r3" />
                      <label htmlFor="r3">$100K – $150K</label>

                      <RadioGroupItem value="more" id="r4" />
                      <label htmlFor="r4">More than $150K</label>
                    </RadioGroup>
                  )}
                />

              </Card>

              <Button type='submit' className="mt-12 h-12 w-60 mb-12 rounded-2xl">
                Let’s work together
              </Button>
            </form>
          </div>
        </section>
      </section>

      <footer id="Sessãofooter" className="flex flex-col bg-white w-full h-full">
        <section id="Sessão de linkd para entrar em contato" className="bg-white w-full h-full grid grid-cols-2 gap-96" >
          <div className="flex gap-36 justify-center ml-60">
            <div className="flex flex-col">
              <h1 className="font-sans font-medium text-lg break-all mt-44 mb-3">Company</h1>
              <Link href="/Contact" className="text-sm font-light text-gray-700">
                Contact us →
              </Link>
            </div>

            <div className="flex flex-col">
              <h1 className="font-sans font-medium text-lg break-all mt-44 mb-3">Connect</h1>
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
          <div className="flex flex-col">
            <h1 className="font-sans font-medium text-lg break-all mt-44">Sign up for our newsletter</h1>
            <a className="font-light text-gray-700 text-sm mt-5 mb-4">
              Subscribe to get the latest design news, articles, <br /> resources and inspiration.
            </a>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="py-6 rounded-lg" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </section>

        <h1 className="flex justify-around text-gray-200 mt-36 mb-36">______________________________________________________________________________________________________</h1>

        <div className="flex justify-around mb-9">
          <h1 className="text-4xl text-gray-950 font-bold">DevRemote</h1>
          <p className="text-sm font-light text-gray-500 mt-6">© Studio Agency Inc. 2023</p>
        </div>
      </footer>
    </div>
  )
}