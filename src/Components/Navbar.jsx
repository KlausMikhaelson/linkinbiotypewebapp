import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className='bg-black' style={{padding: "10px 15px",display: "flex", justifyContent: "space-between", margin: "0px"}}>
            <ul style={{margin: "0px", padding: "0px", display: "flex", alignItems: "center"}}>
                <li style={{listStyle: "none"}}>Klaus</li>
            </ul>
            <ul style={{display: "flex", padding: "0px", margin: "px",columnGap: "15px"}}>
                <li style={{listStyle: "none"}}><a href='https://github.com/KlausMikhaelson' target='_blank' style={{textDecoration: "none", color: "black"}}>GitHub</a></li>
                <li style={{listStyle: "none", fontWeight: "bold"}}><a href='https://twitter.com/___klaus_31452' target='_blank' style={{textDecoration: "none", color: "black"}}>X</a></li>
                <li style={{listStyle: "none"}}><a href='https://linkedIn.com/Satyamsingh2003' target='_blank' style={{textDecoration: "none", color: "black"}}>LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar