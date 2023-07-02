import './Ass1_Bai3.scss';
import ImageIcon from '../../assets/imageicon.jpeg';

const Ass1_Bai3 = () => {
    return (
        <div className='assign1_bai3'>
            <div className="navigation">
                <p>NAVIGATION</p>
            </div>
            <div className="carousel">
                <img src={ImageIcon} alt="img-icon" />
                <p>LARGE FEATURE</p>
            </div>
            <div className="sub-header">
                <p>SUB-HEADER</p>
            </div>
            <div className="images-container">
                <div className='img-1'>
                    <div className='img-container'>
                        <img src={ImageIcon} alt="img-icon" />
                        <p>IMAGES</p>
                    </div>
                    <p className='sup-content'>
                        SUPPORTING
                        CONTENT
                    </p>
                </div>
                <div className='img-2'>
                    <div className='img-container'>
                        <img src={ImageIcon} alt="img-icon" />
                        <p>IMAGES</p>
                    </div>
                    <p className='sup-content'>
                        SUPPORTING
                        CONTENT
                    </p>
                </div>
                <div className='img-3'>
                    <div className='img-container'>
                        <img src={ImageIcon} alt="img-icon" />
                        <p>IMAGES</p>
                    </div>
                    <p className='sup-content'>
                        SUPPORTING
                        CONTENT
                    </p>
                </div>
            </div>

        </div>
    )
};

export default Ass1_Bai3;