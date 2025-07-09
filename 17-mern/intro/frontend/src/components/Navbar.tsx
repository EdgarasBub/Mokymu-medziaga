import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <Nav variant='underline' className='NavBars' >
            <div className='container'>
                <Nav.Link href='/'>
                    <h1>Mano Pratimai</h1>
                </Nav.Link>
                <Nav.Link href='/newPratimas'>
                    <h1>Sukurti nauja pratima</h1>
                </Nav.Link>
            </div>
        </Nav>
    )
};

export default Navbar;