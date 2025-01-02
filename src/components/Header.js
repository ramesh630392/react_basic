import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const Header = () =>{
    const [ham, setHam] = useState(true)
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')
    const [toggleSort, setToggleSort] = useState(false)
    const [toggleCategory, setToggleCategory] = useState(false)

    return (<div className="height" >
    <div className='header-container' >
        <div className="header-container2" >
            <img  src ="https://wallup.net/wp-content/uploads/2019/09/902423-electronics-machine-technology-circuit-electronic-computer-technics-detail-psychedelic-abstract-pattern.jpg" className="header-image" alt ="bx"/>
           <p className="header-text">Bx Electronics</p>
            
        </div>
        <div className="header-container3">
            <p className="header-text">Home</p>
            <p className="header-text">About</p>
            <button type="button" className="button-logout" >Logout</button>
        </div>
       
       <div className="header-container4">
        {ham?<GiHamburgerMenu  className="hamburger" onClick = {()=>setHam(false)} />:<h1 className="hamburger" onClick = {()=>setHam(true)}>X</h1>}
        </div>

    </div>
    <div>{!ham?<div className="header-container5">
        <button className="ham-text" type="button" onClick ={()=>setToggleSort(toggleSort?false:true)} >Sort</button>
        {toggleSort?<select className="sm-select" onChange={event=>setSort(event.target.value)} >
            <option>ASC</option>
            <option>DESC</option>
        </select>:<></>}
        <button type="button" className="ham-text" onClick ={()=>setToggleCategory(toggleCategory?false:true)} >Category</button>
        {toggleCategory?<select className="sm-select" onChange={event=>setCategory(event.target.value)} >
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>electronics</option>
            <option>women's clothing</option>
        </select>:<></>}
        <button type="button" className="ham-text" >Home</button>
        <button type="button" className="ham-text">About</button>
        <button type="button" className="ham-text">Logout</button>
    </div>:<></>}</div>
    </div>)
}

export default Header 