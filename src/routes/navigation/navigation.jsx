import './navigation.scss';
import Logo from '../../assets/logo_200x200.png';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Navigation = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        }
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [])
    return (
        <>
            <div className="nav-container">
                <NavLink to={'/'} className='logo'>
                    <img src={Logo} alt="Logo" />
                </NavLink>
                <ul className={scrollPosition === 0 ? 'ul-nav' : 'ul-nav flex-col gap-[20px] mt-[200px]'}>
                    <li>
                        <Link to={'/assign1'}>
                            <button className='btn-nav'>
                                <span className='text-in-btn'>Assignment 1</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/assign2'}>
                            <button className='btn-nav'>
                                <span className='text-in-btn'>Assignment 2</span>
                            </button>
                        </Link>
                    </li>
                    <Link to={'/assign3'}>
                        <button className='btn-nav'>
                            <span className='text-in-btn'>Assignment 3</span>
                        </button>
                    </Link>
                    <li>
                        <Link to={'/assign4'}>
                            <button className='btn-nav'>
                                <span className='text-in-btn'>Assignment 4</span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
export default Navigation;