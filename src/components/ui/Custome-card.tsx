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
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto h-auto p-4">
      <Card className="bg-white border border-gray-300 shadow-lg transition-transform transform hover:scale-105 duration-200">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold text-gray-800">{data.des}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img src={data.url} alt="chantre" className="rounded-full w-32 h-32 border-4 border-gray-200 shadow-md" />
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-gray-600">{data.des || 'Dorado el mejor'}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
