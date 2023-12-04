import Nav from 'react-bootstrap/Nav';

const Login = () => {
    return ( 
        <>
            <Nav.Link href="/profile">
                    <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/660.jpg" alt="User profile image" className='rounded-circle border-1 border border-white' width={40} />
            </Nav.Link>
        </>
     );
}
 
export default Login;