import CarouselItem from "./CarouselItem"


const CarouselGroups = ({group}) =>{

    return(
                <div className="carousel-item active">
                    {group.map(city => {
                        const imgRequired = require(`../assets/${city.img}`)
                        return <CarouselItem key={city.id} name={city.name} img={imgRequired}/>
                    })}
                </div>
               
    )

}

export default CarouselGroups
