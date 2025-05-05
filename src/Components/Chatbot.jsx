import React, { useState } from 'react';

// Regular expressions and responses (pairs from your Python code)
const pairs = [
  {
    regex: /(.*)(Hi|Hello|Hey|Good morning|Evening)(.*)/i,
    responses: [
      'Hi, how can I help you today?',
      'Hello, how can I help you today?',
      'Hey, how can I help you today?',
      'Good morning, how can I help you today?',
      'Good evening, how can I help you today?'
    ]
  },
  {
    regex: /(.*)(products|goods|items)(.*)/i,
    responses: ['We have a wide variety of products ranging from electronics to furniture. Which items are you interested in?']
  },
  {
    regex: /(.*)(electronics)(.*)/i,
    responses: [
      'We have different electronics like phones, watches, laptops, electric irons, and many more. What else do you need to know about?'
    ]
  },
  {
    regex: /(.*)(furniture)(.*)/i,
    responses: ['Most of the furniture we have are beds.']
  },
  {
    regex: /(.*)(foods|fruits|vegetables)(.*)/i,
    responses: [
      "Unfortunately, we don't have food items like fruits and vegetables. We're sorry for disappointing you. What else are you interested in?"
    ]
  },
  {
    regex: /(.*)(phones)(.*)/i,
    responses: [
      'You can get all types of phones. Some of them include: Infinix, iPhone, Samsung, and Tecno. All our phones have affordable prices.'
    ]
  },
  {
    regex: /(.*)(delivery|delivered)(.*)/i,
    responses: [
      'On payment, our products are delivered directly to your home. What you need to do is provide us with the location of your home.'
    ]
  },
  {
    regex: /(.*)(location|area|located|sited)(.*)/i,
    responses: [
      'We are situated in Westlands, Nairobi, along Waiyaki Way, opposite Lions Place.'
    ]
  },
  {
    regex: /(.*)/i,
    responses: [
      'Please clarify...',
      'Elaborate further...',
      "Pardon me, I didn't get that.",
      "Sorry! I didn't get that."
    ]
  }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // User's message
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Find response
    const botReply = getBotResponse(input);

    // Add bot's reply
    setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botReply }]);
  };

  // Match input with patterns
  const getBotResponse = (input) => {
    for (let pair of pairs) {
      const match = input.match(pair.regex);
      if (match) {
        return pair.responses[Math.floor(Math.random() * pair.responses.length)];
      }
    }
    return "Sorry, I didn't understand that.";
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', padding: '2px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <div style={{ height: '300px', overflowY: 'scroll', marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{  padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          placeholder="Type a message..."
        />
        <img src='images/multimedia-42-64.webp' alt='' onClick={handleSend} style={{borderRadius:"10px", padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none' }}/>
         
    
      </div>
    </div>
  );
};

export default Chatbot;

