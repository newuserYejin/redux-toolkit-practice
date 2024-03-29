import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ auth }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const [sideVisible, setSideVisible] = useState(false)

    const navigate = useNavigate()
    const LoginPageMove = async () => {
        navigate('/login')
    }

    const moveHome = () => {
        document.querySelector('.inputBox input').value = '';
        navigate("/")
    }

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value

            navigate(`/?q=${keyword}`)
        }
    }

    const toggleSideMenu = () => {
        setSideVisible(!sideVisible)
    }

    return (
        <div>
            <div>
                <div className='loginButton'>
                    <button className='sideMenuButton' onClick={toggleSideMenu}>
                        <FontAwesomeIcon icon={faBars} size='xl' />
                    </button>
                    <button onClick={LoginPageMove}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>{auth === true ? "로그아웃" : "로그인"}</div>
                    </button>
                </div>
            </div>
            <div className='navSection'>
                <img
                    onClick={moveHome}
                    width={100}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
            </div>
            <div className='menuArea'>
                <div className={sideVisible ? 'sideMenu show' : 'sideMenu'}>
                    <div>
                        <div className='hideIcon' onClick={toggleSideMenu}>
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                        </div>
                        <div className='sideMenus'>
                            {menuList.map(menu => (
                                <div>{menu}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <ul className='menuList'>
                    {menuList.map(menu => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='inputBox'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='제품검색' onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar