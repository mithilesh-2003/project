import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Form a URL with the entered username and password
    const loginUrl = `https://example.com/login?username=${username}&password=${password}`;

    // You would typically make an API request here, but this is just for illustration
    console.log('Login URL:', loginUrl);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
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
