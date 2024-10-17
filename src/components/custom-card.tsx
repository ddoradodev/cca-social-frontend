import imagen from '@/assets/fein.jpg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CustomCard = ({data}:{data:any}) => {
  return (
    <div className="w-[350px] sm:w-[420px] mx-auto">
    <Card className="bg-gradient-to-r from-cyan-500 to-blue-500">
  <CardHeader>
    <CardTitle className="mx-auto text-purple-950">{data.name}</CardTitle>
    <CardDescription className="text-1xl text-[black]  mx-auto">{data.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <img src={data.image} className="rounded-xl mx-auto w-[320px]" alt="" />
  </CardContent >
  <CardFooter>
    <p className="mx-auto text-1xl">Especie: {data.species}</p>
  </CardFooter>
</Card>
</div>
  )
}

export default CustomCard  