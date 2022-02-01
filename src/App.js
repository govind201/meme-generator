import React, { useEffect, useState } from 'react';
import { MemeImage } from './MemeImage';

function App() {
  const [apiImages, setapiImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState(null);

  useEffect(()=>{
      fetch('https://api.imgflip.com/get_memes')
      .then(res =>  res.json())
      .then(res => setapiImages(res.data.memes))
      .catch(error => console.error(error));

  },[]) // only on mount

  const handleSelectedImageText = async (event) =>  {
    event.preventDefault();
    const params = {
      template_id: selectedImage.id,
      text0: topText,
      text1: bottomText,
      username: 'bletsbelts',
      password: 'password'
    }
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`https://api.imgflip.com/caption_image? ${queryParams}`)
    const jsonResponse = await  response.json();
    setMeme(jsonResponse.data);

  }
  if(meme) {
    return (
      <div>
        <MemeImage image={meme}
        />
      </div>
    )
  }
  return (
    <div className="App">
      {selectedImage &&
      <form onSubmit={(event)=> handleSelectedImageText(event)}>
       <MemeImage 
          image = {selectedImage}
       />
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
       <button type='submit'>
          Create Meme
       </button>
      </form>
      }
      {!selectedImage && (
        <div>
          <h1>Pick an image</h1>
        {apiImages.map(apiImage=> {
        return (
          <MemeImage 
              key={apiImage.id}
              image = {apiImage}
              onClick={()=>setSelectedImage(apiImage)}
          />
        )
         })
      }
      </div>
      )}
    </div>
  );
}

export default App;
