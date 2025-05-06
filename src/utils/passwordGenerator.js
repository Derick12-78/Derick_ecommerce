

function generateStrongPassword(username) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    const all = upper + lower + digits + special;
  
    const minLength = 10;
  
    // Ensure we include at least one of each type
    const getRandom = (charset) => charset[Math.floor(Math.random() * charset.length)];
  
    let password = [
      getRandom(upper),
      getRandom(lower),
      getRandom(digits),
      getRandom(special),
    ];
  
    // Add random characters based on username seed and total length
    const seed = username + Date.now();
    for (let i = password.length; i < minLength; i++) {
      const index = seed.charCodeAt(i % seed.length) % all.length;
      password.push(all[index]);
    }
  
    // Shuffle the password for randomness
    return password.sort(() => 0.5 - Math.random()).join('');
  }
  
  export default generateStrongPassword;