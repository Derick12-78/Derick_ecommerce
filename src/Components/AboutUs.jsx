import React, { useEffect, useState } from 'react'
import Chatbot from './Chatbot'


const AboutUs = () => {
  
  const [voices, setVoices] = useState([]);
const [selectedVoice, setSelectedVoice] = useState(null);

// "About Us" text as the predefined content
const aboutUsText = `Soko Electrofurnitures is a e-commerce website that enables people to buy products and also sell products online.
            Soko Electrofurnitures is meant to prevent people from travelling costs and boreness of travelling to markets to buy and sell products.You can buy a product of your wish using Soko Electrofurnitures.
            We sell a wide variety of products including electronics like phones ,iron kettles,inpods and many more .We also sell all types of furnitures.On pay our products are delivered to your home place thus minimising travelling expenses and also save on time.
`;

useEffect(() => {
  // Load available voices once the speech synthesis is initialized
  const loadVoices = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices);
    setSelectedVoice(availableVoices.find(voice => voice.lang === 'en-US') || availableVoices[0]);
  };

  // Get voices when the page is loaded
  loadVoices();

  // Listen for voice changes (in case voices are loaded after page load)
  window.speechSynthesis.onvoiceschanged = loadVoices;
}, []);

// Function to handle the button click and trigger text-to-speech
const handleReadAloud = () => {
  if (aboutUsText !== '') {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(aboutUsText);

    // Set language and voice
    utterance.voice = selectedVoice;

    // Optional parameters like pitch and rate
    utterance.pitch = 1;
    utterance.rate = 1;

    // Speak the text
    speechSynthesis.speak(utterance);
  } else {
    alert('There is no text to read aloud.');
  }
};
  return (
    <div>
      <h2 className='display-4 text-center text-dark'>ABOUT US</h2>
      <div className='card shadow' style={{ marginBottom: '20px' }}>
        <p className='bg-light text-muted'>
          {aboutUsText}
        </p>
          {/* Voice Selection */}
          <hr />
      <div style={{ marginBottom: '20px' }} className="justify-content-center read">
        <label htmlFor="voiceSelect">Choose a voice: </label>
        <select
          id="voiceSelect"
          onChange={(e) => setSelectedVoice(voices.find(voice => voice.name === e.target.value))}
          value={selectedVoice?.name}
        >
          {voices.map((voice, index) => (
            <option key={index} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>

           {/* Button to trigger text-to-speech */}
      <button className="btn btn-dark text-light m-3"
        onClick={handleReadAloud}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' ,height:"40px"}}
      >Read aloud</button>
      </div>

      </div>

   
      <section className="row" style={{ marginBottom: '20px' ,display:"flex",justifyItems:"stretch"}}>
   
        <div className="card m-1 shadow justify-content-center">
          <h4 className="text-center text-dark">Ask Anything</h4>
        <Chatbot/>
        </div>
        
      </section>
    </div>
  )
}

export default AboutUs
