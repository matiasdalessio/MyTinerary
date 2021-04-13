


const CityBanner = ({name, img}) =>{
    console.log(img)


    return(
        <div className="cityBanner" style={{backgroundImage: `url('${img.default}')`}}> <h1 class="cityName">{name}</h1>  

        </div>
    )

}

export default CityBanner
