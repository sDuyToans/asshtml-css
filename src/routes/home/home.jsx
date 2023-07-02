import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <p className='Logo'>
                <span>Account: </span>
                <span className='name'>ToanNLD</span>
            </p>
            <p className='sologan'>Make your selection</p>
            <ul className='ul-home'>
                <li>
                    <Link to={'/assign1'}>
                        <button className='btn-home'>
                            <span className='text-in-btn'>1. Assignment 1</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'/assign2'}>
                        <button className='btn-home'>
                            <span className='text-in-btn'>2. Assignment 2</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'/assign3'}>
                        <button className='btn-home'>
                            <span className='text-in-btn'>3. Assignment 3</span>
                        </button>
                    </Link>
                </li>
                <li>
                <Link to={'/assign4'}>
                        <button className='btn-home'>
                            <span className='text-in-btn'>4. Assignment 4</span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;