import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Stage3() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve existing state
  const { platform, username, password, selectedOptions } = location.state || {};

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Sending data to server:', {
        platform,
        username,
        password,
        options: selectedOptions
      });

      const response = await axios.post('http://localhost:5000/run-script', {
        platform,
        username,
        password,
        options: selectedOptions
      });

      console.log('Response from server:', response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error details:', error);
      setError('Error running scripts');
      setLoading(false);
    }
  };

  const handleNext = () => {
    navigate('/stage4', { state: { platform, data } });
  };

  return (
    <div className='loginContainer  h-[60vh] flex flex-col gap-10 rounded-md w-[25vw] border-2 border-black bg-white '>
      <h2>Stage 3</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Running Scripts...' : 'Fetch Data'}
      </button>
      {error && <p>{error}</p>}
      {data && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default Stage3;