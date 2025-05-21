"use client";

import { useState } from 'react';

export default function PasswordProtect({ onPasswordVerified }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/verify-photo-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        onPasswordVerified();
      } else {
        let errorMessage = 'Invalid password.';
        try {
          const data = await response.json();
          if (data && data.message) {
            errorMessage = data.message;
          }
        } catch (e) {
          // Ignore parsing error, use default message
        }
        setError(errorMessage);
        console.error('Password verification failed:', response.status, response.statusText);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error during password verification fetch:', err);
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
