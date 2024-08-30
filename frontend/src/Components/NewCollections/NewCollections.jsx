import './NewCollections.css';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
function NewCollections(){
    return <div className="NewCollections">
        <h1>NEW COLLECTIONS</h1>
        <hr></hr>
        <div className='collections'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
}
export default NewCollections;