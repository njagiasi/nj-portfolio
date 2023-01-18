import React, { useState } from 'react'


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
    <a class="navbar-brand" href="#">
    <img src={navlogo} width="30" height="30" alt="" />
  </a>
    <span class="navbar-brand mb-0 h1">NAINA<span className='jchar'>.J</span></span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
          <>
          {navDataItems.map(({ navlinkdata }) => (
            <li className="nav-item">
                <a className="nav-link" href="/">{navlinkdata}</a>
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
