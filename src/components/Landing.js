import React from 'react';
import {Link} from 'react-router-dom'

function Landing(){
    return (
    <div className="landing">
        <h1>
            Everyone is in the Converence Room. <br/>
            Who would you like to meet?
        </h1>
        <Link to='/meet-me/Michael/Scott'>Michael Scott</Link>
        <Link to='/meet-me/Dwight/Schrute'>Dwight Schrute</Link>
        <Link to='/meet-me/Jim/Halpert'>Jim Halpert</Link>
        <Link to='/meet-me/Phyllis/Vance'>Phyllis Vance</Link>
    </div>
    )
}