import "./Navbar.css";
import navlogo from '../../assets/logoIcon.png';
import adminProfile from '../../assets/adminprofile.jpg';
function Navbar(){
    return (
        <div className="navbar">
            <img src={navlogo} className="logo-image"></img>
            <img src={adminProfile} className="admin-profile"></img>
        </div>
    )
}

export default Navbar;