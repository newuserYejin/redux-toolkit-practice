import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    return (
        <div>
            <div>
                <div className='loginButton'>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className='navSection'>
                <img
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