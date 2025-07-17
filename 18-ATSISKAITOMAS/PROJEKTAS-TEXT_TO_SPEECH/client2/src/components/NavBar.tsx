import {Link} from 'react-router-dom';


const Navbar = () => {


    return (
        <header>
            <div className='container'>
                    <>
                        <Link to='/Home'>
                            <h1>Mano Pratimai</h1>
                        </Link>
                        <Link to='/TextToSpeech'>
                            <h1>Sukurti nauja pratima</h1>
                        </Link>
                     
                    </>
                
            </div>
        </header>
    )
};



export default Navbar;