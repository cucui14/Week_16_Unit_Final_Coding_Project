import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = () => {
    return ( 
        <>
            <Form className="d-flex me-5">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-light text-secondary"
                aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
            </Form>
        </>
     );
}
 
export default Search;