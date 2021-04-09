
const CarouselItem = ({name, img}) =>{
    console.log(img)
        return(
                
            <div style={{backgroundImage: `url('${img.default}')`, width:'10vw', height: '20vh', backgroundPosition:'center', backgroundSize:'cover' }}><span>{name}</span> </div>

    
            
    )

}

export default CarouselItem


{}