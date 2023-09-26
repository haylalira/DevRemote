

import { Card } from "@mui/material"
import { CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"



export const CardContato = () => {

    return (

    <div className=" mt-32 rounded-xl bg-neutral-950 sm-w-[70px]">
  
        <div className="p-20">
          <h1 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Tell us about your project
          </h1>
          <div className="mt-6 flex">
            <Button className="text-sm sm:text-base font-bold text-black rounded-full px-4 py-1.5 transition bg-white hover:bg-neutral-200">
              Say Hey
            </Button>
          </div>
      
        <div className="mt-10 border-t border-white/10 pt-10">
          <h3 className="font-display text-base font-semibold text-white">Our offices</h3>
        </div>
   
   </div>
</div>



                    )
}