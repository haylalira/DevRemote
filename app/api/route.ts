import type { NextApiRequest, NextApiResponse } from 'next'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ data:[
  {id: 1 , name:'hayla esteve na devRemote desde quando tudo era mato'},
  {id: 2 , name:'futuros developers treme treme'},
  {id: 3 , name:'hayla esteve na devRemote desde quando tudo era mato'}
  ]})
}