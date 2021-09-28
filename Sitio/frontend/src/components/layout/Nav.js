import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
               <div align="center">
                    <Link to="/">HOME</Link>&nbsp;
                    &nbsp;<Link to="/biografia">BIOGRAFÍA</Link>&nbsp;
                    &nbsp; <Link to="/video">VIDEOS</Link>
                </div>
            </div>
        </nav >
    );
}

export default Nav;