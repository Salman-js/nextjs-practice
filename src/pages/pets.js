import Image from 'next/image';
import React from 'react';
import img from '../../public/2.jpg';

function Pets() {
  return (
    <>
      <Image src={img} placeholder='blur' alt='pet' width={280} height={420} />
      {['1', '2', '3', '4'].map((path, index) => {
        return (
          <div key={index}>
            <Image
              src={`/${path}.jpg`}
              alt='pet'
              blurDataURL=''
              width={280}
              height={420}
            />
          </div>
        );
      })}
    </>
  );
}

export default Pets;
