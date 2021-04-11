import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react"

const ContentCarousel = ({cities}) =>{
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };  

    return (
        <div>
            <h1 class=" carouselTitle">Popular MyTineraries</h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {cities.map(cityGroup =>{                
                return <Carousel.Item className="carousel-item">
                    <div className="carousel-slides" >
                    {cityGroup.map(city => {
                        const foto = require(`../assets/${city.img}`)
                        return <div className="carousel-img" key={city.id} style={{backgroundImage: `url('${foto.default}')`}}><h3 class="cityName">{city.name}</h3></div>
                    })}
                    </div>                
                    </Carousel.Item >
            })}          
        </Carousel>
        </div>
      );
}

export default ContentCarousel
