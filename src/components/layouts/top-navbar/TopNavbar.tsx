import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shavimLogo from '../../../assets/photos/logo/Shavim_Logo.jpg';

const TopNavbar = () => {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container className='m-0'>
                <Navbar.Brand href='/' className='ms-2'>
                    <img
                        src={shavimLogo}
                        width='100'
                        height='30'
                        className='d-inline-block align-top'
                        alt='דף הבית'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className=''>
                        <Nav.Link href='/introduction'>החזון</Nav.Link>
                        <Nav.Link href='/partyplatform'>הנבחרת שלנו</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;
