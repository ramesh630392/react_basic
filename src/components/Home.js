import {useEffect, useState} from 'react'
import Header from './Header'
import Product from './Product'

const Home  = () =>{
    const[name, setName] = useState('')
    const[receivedData, setReceivedData] = useState([])
    console.log(receivedData)
    
    useEffect(()=>{
        getData()
    }, [])

    const getData = async()=>{
        const response = await fetch('https://fakestoreapi.in/api/products')
        if (response.ok){
            const data = await response.json()
            console.log(data)
            setReceivedData(data.products)
        }
    }

    const List = () => <ul>{receivedData.map(eachItem=>(<Product key ={eachItem.id} eachItem={eachItem} />))}</ul>

    return (
        <div className='home' >
            <Header/>
            <List/>

            
        </div>
    )
}

export default Home