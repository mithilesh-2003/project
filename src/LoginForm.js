// import React, { useState } from 'react';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Form a URL with the entered username and password
//     const loginUrl = `https://example.com/login?username=${username}&password=${password}`;

//     // You would typically make an API request here, but this is just for illustration
//     console.log('Login URL:', loginUrl);

//     // Reset the form fields
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Authentication successful, you can redirect or perform other actions here
        alert('Login successful');
      } else {
        // Authentication failed, you can handle the error here
        alert('Login failed');
      }
    } catch (error) {
      // Handle network or other errors here
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login form</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;

