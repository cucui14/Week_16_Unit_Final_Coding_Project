import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Login = () => {
    return ( 
        <>
            <NavDropdown className='my-2 pe-3 text-light' title="Sign In" id="basic-nav-dropdown">
                    <Form className='m-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Login
                        </Button>
                        </Form>
            </NavDropdown>
        </>
     );
}
 
export default Login;