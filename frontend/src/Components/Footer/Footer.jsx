// import './Footer.css';
// function Footer(){
//     return <div className="footer">
//         i am from Footer
//     </div>
// }
// export default Footer;
import footerLogo from '../Assets/logoIcon.png';
import './Footer.css';
import instaIcon from '../Assets/instagram_icon.png';
import pinterst from '../Assets/pintester_icon.png';
import whatsappIcon from '../Assets/whatsappIcon.png';
function Footer(){
    return <div className="footer">
        <div className="footerLogo  ">
            <img src={footerLogo} alt=""></img>
            <p>Nocturne Bazzar</p>
        </div>
            <ul className='footerLinks'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        <div className='footerSocialIcons'>
            <div className='footerIconsContainer'>
                <img src={instaIcon} alt=''></img>
            </div>
            <div className='footerIconsContainer'>
                <img src={pinterst} alt=''></img>
            </div>
            <div className='footerIconsContainer whatsappImg'>
                <img src={whatsappIcon} alt=''></img>
            </div>
        </div>
        <div className='footerCopyright'>
            <hr></hr>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
}

export default Footer;
