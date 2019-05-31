import React from 'react'
import igtext from '../../assests/igtext.png'
import instagramLogo from '../../assests/instagramLogo.svg'
import compass from '../../assests/compass.svg'
import heart from "../../assests/heart.svg"
import profile from "../../assests/profile.svg"
import "../SearchBar/SearchBar.css"

const SearchBar = props => {
    return(
    <div className="search-bar-wrapper">
        <div className="image-wrapper">
            <img alt ="camera" src ={instagramLogo} className="social logo"/>
            <img alt = "instagram-logo" src = {igtext} className="logo-image"/>
        </div>
        <div>
            <form className="search" onSubmit={props.searchGram}>
            <input className="search-bar" type="text" placeholder="Search" value={props.search} onChange={props.change} />
            </form>
        </div>
        <div className="social-wrapper">
            <div className="social">
                <div className="compass-box">
                <img alt ="compass" src={compass} className="log"/>
                </div>
            </div>
            <div className="social">
                <img alt = "heart" src={heart} className="logo"/>
            </div>
            <div className="social">
                <img alt = "profile" src={profile} className="logo"/>
            </div>

        </div>

    </div>
    )
}

export default SearchBar;