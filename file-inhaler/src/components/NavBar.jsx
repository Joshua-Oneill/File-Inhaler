import "../css/NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">File Inhaler</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Library" className="nav-link">Library</Link>
        </div>
    </nav>
}

export default Navbar