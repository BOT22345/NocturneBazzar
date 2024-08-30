import Hero from '../Components/Hero/Hero.jsx';
import NewCollections from '../Components/NewCollections/NewCollections.jsx';
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx';
import Offers from '../Components/Offers/Offers.jsx';
import Popular from '../Components/Popular/Popular.jsx';
function Shop(){
    return <>
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <NewsLetter></NewsLetter>
    </div>
    </>
}

export default Shop;