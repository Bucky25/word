
import { useState, useEffect } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Home() {
  
  const [word, setWord] = useState();
  let history = useHistory();
  let [data ,setData] = useState(null);
    
    const handleSubmit= () => {
      const endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/'+word;
    const getData = async () => {
        const response = await fetch(endpoint)
        const er = await response.json();
        setData(er)
        history.push({pathname:'/detail', state:er } )
        return data;
        // console.log(data)
    }
    
    var ty= getData()   

  }

  const handleChange= (e) => {
      let value = e.target.value;
      setWord(value);
  }
  return (

    <>
    <div style={{paddingRight: '20%', paddingLeft:'20%'}}>

      <h1 className=' py-3'>Word Details</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Word </Form.Label>
          <Form.Control value={word} type="text" placeholder="Enter a word" onChange={e => handleChange(e)} />
          
        </Form.Group>

        <Button variant="primary"  onClick={e => handleSubmit(e)}>
          Submit
        </Button>
        </Form>
    </div>

    </>
    
  );
}

export default Home;
