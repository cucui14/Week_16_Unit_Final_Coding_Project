import Nav from 'react-bootstrap/Nav';

const TopNavLinks = () => {
    
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' }
    ];
    
    return ( 
        <>
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                {navLinks.map((navLink, index) => {
                    return (
                        <Nav.Link key={index} href={navLink.to}>{navLink.text}</Nav.Link>
                    )
                })}
            </Nav>
        </>
     );
}
 
export default TopNavLinks;