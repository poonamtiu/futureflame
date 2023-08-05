"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
 // requires a loader

 const Slider1 = () => {

  return (
    <Carousel>
    <div>
        <Image src="/1.jpg" alt='img' width={300}  height={200}/>
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <Image src="/2.jpg" alt='img' width={100}  height={100}/>
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <Image src="/3.jpg" alt='img' width={100}  height={100} />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  )
}



export default Slider1;