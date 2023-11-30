import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Navigation = ({children}) => {

    return ( 
        <>
            <Navbar expand="lg" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Blogs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">       
                            {children}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default Navigation;