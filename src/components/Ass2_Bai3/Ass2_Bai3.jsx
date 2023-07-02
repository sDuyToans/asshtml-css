import { Link } from 'react-router-dom';
import IMG1 from '../../assets/ass2-img1.png';
import IMG2 from '../../assets/ass2-img2.png';
import IMG3 from '../../assets/ass2-img3.png';
import IMG4 from '../../assets/ass2-img4.png';
import IMG5 from '../../assets/ass2-img5.png';
import IMG6 from '../../assets/ass2-img6.png';
import IMG7 from '../../assets/ass2-img7.png';

import './Ass2_Bai3.scss';
import Ass2_BT3_Col_Box from '../Ass2_BT3_Col_Box/Ass2_BT3_Col_Box';
import Ass2_Bai3_Col_Box_1 from '../Ass2_Bai3_Col_Box_1/Ass2_Bai3_Col_Box_1';
import Ass2_BT3_Topcol from '../Ass2_BT3_Topcol/Ass2_BT3_Topcol';

const Assign2_Bai3 = () => {
    const arrIMG = [IMG1, IMG2, IMG3, IMG5, IMG6, IMG7];
    return (
        <div className='assign2-bai3-container'>
            <div className="column-1">
                {
                    <Ass2_BT3_Topcol title={'News'} valid={true} value={'All news'}/>
                }
                <div className="body-col1">
                    {
                        [1, 2, 3].map(i => <Ass2_BT3_Col_Box img={arrIMG[i - 1]} />)
                    }
                </div>
            </div>  
            <div className="column-2">
                {
                    <Ass2_BT3_Topcol title={'Welcome'} valid={false}/>
                }
                <div className="body-col2">
                    <div className="img-contain">
                        <img src={IMG4} alt="img" />
                    </div>
                    <div className="para-contain">
                        <p className='p-1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Fugit dolorem voluptates odit vero rerum vel placeat, iste sapiente a quo consequuntur,
                            officia, numquam corrupti dolore similique molestiae. Dolor, vel enim.
                        </p>
                        <p className='p-2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Fugit dolorem voluptates odit vero rerum vel placeat, iste sapiente a quo consequuntur,
                            officia, numquam corrupti dolore similique molestiae. Dolor, vel enim.
                        </p>
                    </div>
                </div>
            </div>
            <div className="column-3">
                {
                    <Ass2_BT3_Topcol title={'Agents'} valid={true} value={'All agents'}/>
                }
                <div className="body-col3">
                    {
                        [5, 6, 7].map(num => <Ass2_Bai3_Col_Box_1 key={num} img={arrIMG[num-2]}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Assign2_Bai3;