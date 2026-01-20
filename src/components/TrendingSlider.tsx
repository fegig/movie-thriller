import { Swiper } from "swiper/react"


function TrendingSlider({children}: {children: React.ReactNode}) {
    return (

        <Swiper
        direction="horizontal"
        className="mb-8"
        spaceBetween={4}
        slidesPerView={8}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >


        {children}
       
       
      </Swiper>
    
    )
}

export default TrendingSlider
