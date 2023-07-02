import './Ass3_Bai2.scss';

import IMG1 from '../../assets/ass3-img2.png'
import IMG2 from '../../assets/ass3-img3.png'
import IMG3 from '../../assets/ass3-img4.png'
import Ass3_Bai2_imgcontainer from '../Ass3_Bai2_imgcontainer/Ass3_Bai2_imgcontainer';

const Ass3_Bai2 = () => {
    const arrImg = [IMG1, IMG2, IMG3];
    return (
        <div className='ass3_bai2_container'>
            {
                [1,2,3].map(num => <Ass3_Bai2_imgcontainer key={num} img={arrImg[num-1]}/>)
            }
        </div>
    )
}

export default Ass3_Bai2;