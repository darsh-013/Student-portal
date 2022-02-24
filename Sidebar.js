import React from 'react'
import '../App.css';
import { SidebarData } from "./SidebarData";
import profile from './profile.PNG';



function Sidebar() {

    /*
    let text='';
    let Email='';

    <input id="name" type={text}/>
    <input id="name" type={Email}/>
      */

    return (
        <div className='sidebar'>


            <div className='profile'>
                <img id="img" src={profile} alt="" />
               
               <p>XYZ<br/>(xyz@gecg28.ac.in)</p>
            </div>


            <ul className='listItem'>
                {SidebarData.map((val, key) => {
                    return (

                        <li key={key}
                            className="row"
                            onClick={() => { window.location.pathname = val.link }}>

                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>

                        </li>
                    );

                })};
            </ul>
        </div>
    );
}

export default Sidebar