import React from "react"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './home.scss'



const Home= ({greeting}) => {
    return(
        <section className="home">
            <div>
            <h1>{greeting}</h1>
            </div>
            <ItemListContainer/>
        </section>
       
    )
    
}
export default Home