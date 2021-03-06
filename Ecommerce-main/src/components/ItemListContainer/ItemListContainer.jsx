import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase'

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
        const db = getFirestore()
        let itemCollection

        if (categoryName){
            itemCollection = db.collection("instruments").where("category", "==", categoryName)
        } else{
            itemCollection = db.collection("instruments")
        }
        
        const itemCollectionQuery = itemCollection.get()

        itemCollectionQuery.then((querySnapshot) => {
            setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((e) => {console.log(e)})
        
    },[categoryName])
    

    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}


export default ItemListContainer;