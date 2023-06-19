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
        <>
        <Card.Body as="h5" className="home" >
      Welcome to the bank, {currentUser.name}!
      </Card.Body>
      <Card.Body className="home">
      <Card.Link href="#/Deposit/" >Make a deposit to your account</Card.Link><br/>
      <Card.Link href="#/Withdraw/" >Withdraw money from your account</Card.Link>
      </Card.Body>
      </>
      ):(<><Card.Body as="h5" className="home" >
      Welcome to the bank!
      </Card.Body>
       <Card.Body className="home">
      <Card.Link href="#/CreateAccount/" >Create a new account</Card.Link><br/>
      <Card.Link href="#/Login/" >Login to an existing account</Card.Link>
      </Card.Body></>)}
      <Card.Img variant="bottom" src="../imgs/bank3.png" />
      <br/>
     

      </Card>
  );  
}

export default Home;
