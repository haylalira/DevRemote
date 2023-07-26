import { Card } from "@mui/material"
import { CardHeader } from "../ui/card"
import { Button } from "../ui/button"

export const CardContato =()=>{
    return(
        <>
        <div className="flex justify-center">

       
        <Card className="w-[1200px] h-[500px] bg-black rounded-3xl  " >
            <CardHeader className="ml-44 ">
                <h1 className="text-white font-normal text-4xl  mb-5 mt-28">Tell us about your project</h1>
                <Button className="  w-28 py-5 bg-slate-50 text-black rounded-3xl ">Say Hei</Button>
                
            </CardHeader>
        
        </Card>
        </div>
        </>
    )
}