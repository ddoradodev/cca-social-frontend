import React from 'react';
import { CustomeCard } from '@/components/ui/Custome-card';
import chantreImage from '../public/assets/chantre.jpeg'; // Import the image directly

const ImageArray = [
  { id: 1, url: chantreImage, des: 'chantrees una putica' },
  { id: 2, url: chantreImage, des: 'chantrees una putica' },
  { id: 3, url: chantreImage, des: 'chantrees una putica' }
];

function Chantre() {
  return (
    <div>
      {ImageArray.map((x) => (
        <CustomeCard data={x} key={x.id} />
      ))}
    </div>
  );
}

export default Chantre;
