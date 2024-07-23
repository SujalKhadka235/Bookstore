import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }    
    const filterData=list.filter((data)=>{ return data.category==="Free"});
  return (
    <><div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
        <p className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt in quibusdam dolores temporibus odit maxime, rerum recusandae, corporis tenetur doloremque? Nam optio molestiae dolorem totam fugiat tempora quasi qui!</p>
        </div>
        <div className=''>
        <Slider {...settings}>
        {filterData.map((item)=>{
            return <Cards item={item} key={item.id}/>
        })}
      </Slider>
            </div>
            </div>
            </>

  )
}

export default Freebook