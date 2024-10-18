import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

 import chantre from '@/assets/chantre.jpeg'
  
  export const CustomeCard = ({data}:{data:any}) => {
    return (
        <div className='w-1/6  h-2/4 mx-auto'>
 <Card className="bg-slate-400 ">
        <CardHeader>
          <CardTitle className="mx-auto">Chantre is so gay</CardTitle>
          
        </CardHeader>
        <CardContent>
         <img src={data.url} alt="" className='mx-auto rounded-full'/>
        </CardContent>
        <CardFooter >
          <p className='mx-auto'>Dorado el mejor</p>
        </CardFooter>
      </Card>

        </div>
       
        
    )
  }
  
