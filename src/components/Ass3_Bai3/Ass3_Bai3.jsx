import './Ass3_Bai3.scss';
import IMG1 from '../../assets/ass3-img8.png';
import IMG2 from '../../assets/ass3-img5.png';
import IMG3 from '../../assets/ass3-img6.png';
import IMG4 from '../../assets/ass3-img6.png';
import IMG5 from '../../assets/ass3-img7.png';
import IMG6 from '../../assets/ass3-img8.png';
import Ass3_Bai3_product from '../Ass3_Bai3_product/Ass3_Bai3_product';

const Ass3_Bai3 = () => {
    const arrIMG = [ IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
    return (
        <div className='ass3-bai3-container'>
            {
                [1,2,3,4,5,6].map(num => <Ass3_Bai3_product img={arrIMG[num-1]} key={num}/>)
            }
        </div>
    )
}

export default Ass3_Bai3;