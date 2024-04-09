import './App.css';
import {Container, Navbar, Button, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/cC.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CurtainCall
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main-bg"></div> 
      <br></br>
      <div className="mb-2">
        <Button variant="danger" size="lg">
          방 만들기
        </Button>{' '}
        <Button variant="secondary" size="lg">
          초대 받기
        </Button>
      </div>


    </div>

  );
}

export default App;
