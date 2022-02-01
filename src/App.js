import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./App.css";
import { MemeImage } from './MemeImage';
import { Share } from "./Share";

function App() {
  const [apiImages, setapiImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [loading, setLoading] = useState(true);


  async function fetchImages() {
    try{
      setLoading(true);
      let {data} = await (await fetch('https://api.imgflip.com/get_memes')).json();
       await setapiImages(data.memes);
        const image = data.memes[Math.floor(Math.random() * data.memes.length)]
       await setSelectedImage(image);
      setLoading(false);
    }catch(ex) {
      console.error(ex);
    }
  }
  
  function handleImageChange(event) {
    event.preventDefault();
    const image = apiImages[Math.floor(Math.random() * apiImages.length)]
     setSelectedImage(image)
     setTopText('')
     setBottomText('')
  }


  useEffect(()=>{
    fetchImages();
  },[]) // only on mount

  return (
    <div className="App">
      <Header />
      {!loading &&
      <>
      <form className='selectedImage-form'>
       <input
       placeholder='top-text'
       onChange={event => setTopText(event.target.value)}
       value={topText}
       />
       <input
       placeholder='bottom-text'
       onChange={event => setBottomText(event.target.value)}
       value={bottomText}
       />
       <button type='button' onClick={handleImageChange}>
         Next Image
       </button>
      </form>
         <MemeImage 
         topText={topText}
         bottomText={bottomText}
          image = {selectedImage}
       />
          <Share
         url={selectedImage.url}
         shareText= "Check out this selectedImage"
        />
      </>

      }
    </div>
  );
}

export default App;
