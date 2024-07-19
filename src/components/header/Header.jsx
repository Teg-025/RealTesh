import React, {useState, useEffect} from "react";
import Button from "../button/Button";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css"

export default function Header(){

    
    const [menuOpened, setMenuOpened] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 820)

    function handleResize(){
        setIsWideScreen(window.innerWidth > 820);

    }
    useEffect(()=>{
        // useEffect is triggered each time there is a resize or change in state
        window.addEventListener('resize', handleResize) 
    }, [])

    function openMenu(){
        setMenuOpened((prev)=>{
            return !prev;
        })
    }

    return(
        <div className="navbar">
            <div className="left-box">
                <img src="/realtesh-high-resolution-logo-transparent.png" alt="logo" width={160}/>
            </div>
            {   (isWideScreen == false)
                ?   (menuOpened
                    ? (
                        <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
                            <div className="right-box">
                                <a href="">Properties</a>
                                <a href="">About Us</a>
                                <a href="">Get Started</a>
                                <a href="">Register</a>
                                <Button text="Contact"/>
                            </div>
                        </OutsideClickHandler>
                        )
                    : null)
                :   <div className="right-box">
                        <a href="">Properties</a>
                        <a href="">About Us</a>
                        <a href="">Get Started</a>
                        <a href="">Register</a>
                        <Button text="Contact"/>
                    </div>
            }

            <div className="menu-icon">
                {
                    menuOpened
                    ? <MenuIcon onClick={openMenu} style={{color: "#eeeeeec9"}}/>
                    : <MenuOpenIcon onClick={openMenu} style={{color: "#eeeeeec9"}}/>
                }
            </div>
        </div>
    )
}