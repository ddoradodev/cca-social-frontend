import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CustomeCardProps {
  data: {
    id: number;
    url: string;
    des: string;
  };
}

export const CustomeCard: React.FC<CustomeCardProps> = ({ data }) => {
  return (
    <div className="w-[400px]  mx-auto h-auto p-4 ">
      <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 ... border border-gray-300 shadow-lg transition-transform transform hover:scale-105 duration-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">{data.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img src={data.image} alt="chantre" className="rounded-full w-32 h-32 border-4 border-gray-200 shadow-md" />
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-gray-900 text-2xl  mx-auto">Specie: {data.species || 'Dorado el mejor'}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
