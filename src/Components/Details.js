

import {Row, Col} from 'react-bootstrap';

const Details = (props) => {
//   console.log(props)
  var phonetics = props.location.state[0].phonetics;
  var  meanings = props.location.state[0].meanings;
//   meanings = [...meanings];

    return (
        <div style={{paddingLeft:'20%', paddingRight:'20%'}}>
                    
                    <h1>Description - {props.location.state[0].word}</h1>
                    <Row className='py-4'>
                    <Col>
                        <h3>phonetic text</h3>
                    </Col>
                    <Col>
                        <h3>phonetic audio </h3>
                    </Col>
                </Row>
            {phonetics.map((phonetic, idx) =>{
                return(

                    <Row className='py-4'>
                    <Col>
                        <h5>{phonetic.text}</h5>
                    </Col>
                    <Col>
                        <a href={phonetic.audio}> {phonetic.audio}</a>
                        
                    </Col>
                </Row> 
                    )
            })}

            <h2>Meanings</h2>

            {meanings.map((meaning, idx) => {
                return(

                    <>
                    <h4 className='py-4'>Part of speech : {meaning.partOfSpeech}</h4>
                    {meaning.definitions.map((defination_data, idx2) => {
                    return(

                        <>
                            <h4>defination :  {defination_data.definition}</h4>
                             {'synonyms' in defination_data === true ? 
                                
                                    
                                        <>
                                        <h3 className='py-3'>synonyms:</h3>
                                        <Row>

                                        {defination_data.synonyms.map((synonym, idx3) => {
                                            return(
                                                <>
                                                <Col>{synonym}</Col>
                                                </>
                                                )
                                            })}
                                            </Row>
                                    </>
                                 :
                                  null 
                                }

                                
                                  <h4 className='py-4'>Example: </h4>  
                                <p>{defination_data.example}</p>
                                <hr/>
                        </>
                        )
                    })}
                </>
                )
            })}
        </div>

  
  );
}

export default Details;
