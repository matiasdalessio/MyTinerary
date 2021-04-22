import React, { useState } from "react";


export default function Itineraries() {

  const [viewMore, setViewMore] = useState({
    button: false,
    text: "View More"
  })

  const prueba = [
    {
      _id: 1,
      itineraryName:	"Caminata por Fuerte Apache",
      author:	{userName: "Carlitos Tevez", image: ""},
      price: 5,
      duration:	5,
      like:	0,
      hashtags:	["#hastags ", "#hastags ", "#hastags ", "#hastags ", "#hastags "],
      cityID:	"607a2f1a745e5322941e0015",
      comments:	[],
      usersLiked:	[0]

    }
  ]

  const showMoreShowLess = ((e) => {
    setViewMore(viewMore.button 
      ? {button: false, text: "View More"}
      : {button: true, text: "View Less"}
    )}
  )

  return ( 

      <div className="cityBanners">
        <div className="animate__animated animate__fadeIn itinerary" style={{backgroundColor: "white"}}> 
                <h1 className="">{prueba[0].itineraryName}</h1> 
                <div className="authorDiv">
                    <div className="avatarAuthor" style={{backgroundColor: "lightblue"}}></div>
                    <h3>{prueba[0].author.userName}</h3>
                </div>
                <div className="itineraryObservations">
                  <p className="">❤{prueba[0].like}</p>
                  <p className="">🕒{prueba[0].duration}</p>
                  <p className="">💰{prueba[0].price}</p>
                </div>
                <p className="">{prueba[0].hashtags}</p>
            <button className= "btnCta" onClick={(e) => showMoreShowLess(e.target.textContent)}>{viewMore.text}</button>
          </div>
      </div>
        
  );
}


