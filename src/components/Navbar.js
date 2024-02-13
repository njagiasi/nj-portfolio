import React, { useState } from 'react'
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export default function Navbar(props) {
  const navDataItems = props.nav_data;
  const navlogo = props.nav_logo;
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 20){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    }
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='container'>
    <nav className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark fixed-top'}>
<<<<<<< Updated upstream
    <Link class="navbar-brand navImage" to="/">
=======
    <a class="navbar-brand" href="/">
>>>>>>> Stashed changes
    <img src={navlogo} width="30" height="30" alt="" />
  
    <span class="navbar-brand mb-0 h1">NAINA<span className='jchar'>.J</span></span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
          <>
<<<<<<< Updated upstream
          {navDataItems.map(({ navlinkdata, path }) => (
            <li className="nav-item">
                <Link className="nav-link" to={path}>{navlinkdata}</Link>
=======
          {navDataItems.map(({ navlinkdata, href }) => (
            <li className="nav-item">
                <Link className="nav-link" to={href}>{navlinkdata}</Link>
>>>>>>> Stashed changes
            </li>
          ))}

          </>
      </ul>
      <button className='btn'>Let's Connect</button>
    </div>
  </nav>
  </div>
  )
}
