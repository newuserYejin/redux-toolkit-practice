import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate()
    const LoginPageMove = async () => {
        navigate('/login')
    }

    const moveHome = () => {
        navigate("/")
    }

    return (
        <div>
            <div>
                <div className='loginButton'>
                    <button onClick={LoginPageMove}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
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
                <ul className='menuList'>
                    {menuList.map(menu => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='inputBox'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='제품검색' />
                </div>
            </div>
        </div>
    )
}

export default Navbar