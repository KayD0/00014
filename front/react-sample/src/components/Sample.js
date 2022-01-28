import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function Sample() {
  
  const [sample, setSamples] = useState([]);
  const [ loading, setLoading] = useState(false)
  const [ error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios.get(`http://localhost:3001/api/v1/sample`)
    .then((res) => {
      console.log(res)
        const sampleData = res.data
        setSamples(sampleData)
        setLoading(false)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);

  return (
    <div className="Sample">
        <p>Hello World!</p>
        {
          error ? (
            <p style={{color: "red"}} >
              データを取得できませんでした。
            </p>
          )
          :loading ? (
            <p style={{color: "green"}}>
              loading...
            </p>
          )
          :(
            <div>
              <p>{sample.status}</p>
              <p>{sample.message}</p>
            </div>
          )
        }
    </div>
  );
}

export default Sample;
