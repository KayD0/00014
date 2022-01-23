import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function Sample() {
  
  const [ret, setRet] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const response = await axios.get('http://localhost:3001/api/v1/sample');
    setRet(response.data.results);
    return response;
  }
  fetchData();
}, []);
  
  return (
    <div className="Sample">
        <p>Hello World!</p>
        {ret}
    </div>
  );
}

export default Sample;
