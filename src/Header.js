import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useStateValue } from '../../StateProvider';
// import { auth } from '../../config/firebase';
// import { signOut } from 'firebase/auth';

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      signOut(auth);
    }
  }

  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'} className='header__link'>
          <div onClick={login} className='header__option'>
            <span className='header__optionLineOne'>Hello {user?.email}</span>
            <span className='header__optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'> &amp; Orders</span>
          </div>
        </Link>

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingCartOutlinedIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  )
}

export default Header