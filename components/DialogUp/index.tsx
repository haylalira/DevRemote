

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@/components/ui/button'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'

import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function DialogUp() {
  return (<div className='mt-1'>
    <Sheet >
      <SheetTrigger>
        <DragHandleIcon sx={{fontSize:30}}/>
      </SheetTrigger>

      <SheetContent side="top" className="w-full  bg-black h-2/1">
        <SheetHeader>
          <SheetTitle className="flex justify-around mt-4 mb-12">
            <Link href="/" className="font-bold text-3xl text-gray-50">
              DevRemote
            </Link>
            <SheetTrigger className=''>
              <CloseIcon  sx={{color:"#FFFFFF", fontSize:30}}/>
            </SheetTrigger>
          </SheetTitle>

          <div className="flex">

            <Card className="bg-white   border-gray-100 w-6/12 h-28 rounded-none  hover:bg-slate-100 flex justify-center items-center ">
              <CardContent >
                <Link href="/" className="font-bold  text-4xl text-slate-950 ">
                  About Us
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-gray-950 border-solid w-full h-28 text-gray-50 rounded-none flex justify-center items-center hover:bg-zinc-800" >
              <CardContent >
                <Link href="/" className="font-bold  text-4xl text-white ">
                  Home
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex ">
            <Card className="bg-zinc-900 border-gray-950 border-solid w-full h-28 text-gray-50 rounded-none flex justify-center items-center hover:bg-zinc-800 mb-12 ">
              <CardContent >
                <Link href="/" className="font-bold  text-4xl text-white ">
                  Our Process
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white   border-gray-100 w-6/12 h-28 rounded-none  hover:bg-slate-100 flex justify-center items-center  ">
              <CardContent >
                <Link href="/" className="font-bold  text-4xl text-slate-950 ">
                  Contact Us
                </Link>
              </CardContent>
            </Card>
          </div>
          <section className='flex-col '>
          <h1 className='text-white font-bold '>Follow Us </h1>
          <div className=' flex'>
            <IconButton aria-label="instagram">
              <FacebookIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>

            <IconButton aria-label="instagram">
              <InstagramIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>


            <IconButton aria-label="instagram">
              <GitHubIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>

            <IconButton aria-label="instagram">
              <LinkedInIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>

            <IconButton aria-label="instagram">
              <WhatsAppIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          </div>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>)
}