import './NewsLetter.css'
function NewsLetter(){
    return <div className='newsLetterContainer'>
    <div className="newsLetter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email id"></input>
            <button>Subscribe</button>
        </div>
    </div>
    </div>
}
export default NewsLetter