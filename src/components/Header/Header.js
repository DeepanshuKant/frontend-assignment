import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
//import icons
import { MdOutlineLiveTv, MdCardMembership } from 'react-icons/md'
import { FaRunning, FaUserAlt } from 'react-icons/fa'
import { CgMoreR } from 'react-icons/cg'

function Header() {
    return (
        <>
            <header id='header'>
                <div className="header__main__parent">
                    <div className="header__logo">
                        <img src={logo} alt="" width="80px" />
                    </div>
                    <div className="header__nav">
                        <div className="header__nav__items">
                            <MdOutlineLiveTv size={20} />
                            <p>Live</p>
                        </div>
                        <div className="header__nav__items">
                            <MdCardMembership size={20} />
                            <p>Membership</p>
                        </div>
                        <div className="header__nav__items">
                            <FaRunning size={20} />
                            <p>Plans</p>
                        </div>
                        <div className="header__nav__items">
                            <CgMoreR size={20} />
                            <p>More</p>
                        </div>
                    </div>

                    <div className="header__login">
                        <FaUserAlt size={20} />
                        <p>Login</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header