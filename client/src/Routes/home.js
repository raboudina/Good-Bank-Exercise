import { useContext } from 'react';
import {Card} from 'react-bootstrap'
import { userContext, loggedIn } from "../userContext"; 
import { UserContext } from '../context';

function Home(){
  //const loggedIn= useContext(loggedInContext);
  const currentUser =useContext(UserContext);
 
  
  return (  
    <Card >
      <Card.Header className="home" as="h4">       
      BadBank Home
      </Card.Header>
      <br/>
      {currentUser.loggedIn?(
        <Card.Body as="h5" className="home" >
      Welcome to the bank, {currentUser.name}!
      </Card.Body>
      ):(<Card.Body as="h5" className="home" >
      Welcome to the bank!
      </Card.Body>)}
      <Card.Img variant="bottom" src="../imgs/bank3.png" />
      <br/>
      </Card>
  );  
}

export default Home;
