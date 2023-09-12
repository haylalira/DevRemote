
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import WebIcon from '@mui/icons-material/Web';
import LockIcon from '@mui/icons-material/Lock';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export function CardSectionHarnessing (){
 return(
<div className='flex justify-center gap-12 mt-32'>
          
    
<Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96 flex-col' data-aos="fade-up">
              
              <CardContent className=' font-extrabold text-2xl mt-36  '> <WebIcon  sx={{ fontSize:"50px" , mb:1}}/>  <h1>Usabilidade</h1></CardContent>
              <CardFooter className='text-center'> <p>Interfaces fáceis de entender e usar</p></CardFooter>
            </Card>

            <Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96' data-aos="fade-up">
             
              <CardContent className=' font-extrabold text-2xl mt-36 '>  <LockIcon  sx={{ fontSize:"50px" , mb:1}}/> <h1>Security</h1></CardContent>
              <CardFooter><p>Concern about your data from its origin.</p></CardFooter>
            </Card>


            <Card className='w-96 rounded-t-[30px]  rounded-b-[30px] h-96' data-aos="fade-up">
             
              <CardContent className=' font-extrabold text-2xl mt-36 ' > <AllInclusiveIcon  sx={{ fontSize:"50px" , mb:1}}/> <h1>Longevidade</h1></CardContent>
              <CardFooter><p>Práticas sólidas garantem sustentabilidade duradoura.</p></CardFooter>
            </Card>
</div>
 )
}