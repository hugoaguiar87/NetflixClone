import './style.css'

import LogoNetflix from '../../assets/netflixlogo.svg'
import LogoUser from '../../assets/logouser.png'

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src={LogoNetflix} alt='logo'/> 
                </a>
            </div>

            <div className='header--user'>
                <a href='/'>
                    <img src={LogoUser} alt='user'/>
                </a>
            </div>
        </header>
    )
}

export default Header;