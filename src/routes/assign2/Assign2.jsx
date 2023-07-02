import Assign2_Bai1 from '../../components/Ass2_Bai1/Ass2_Bai1';
import Assign2_Bai2 from '../../components/Ass2_Bai2/Ass2_Bai2';
import Assign2_Bai3 from '../../components/Ass2_Bai3/Ass2_Bai3';
import './Assign2.scss';
import { useState } from 'react';
const Assign2 = () => {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const handleClick = (e) => {
        switch (e) {
            case 1:
                setShowDiv1(!showDiv1);
                setShowDiv2(false);
                setShowDiv3(false);
                break;
            case 2:
                setShowDiv2(!showDiv2);
                setShowDiv1(false);
                setShowDiv3(false);
                break;
            case 3:
                setShowDiv3(!showDiv3);
                setShowDiv1(false);
                setShowDiv2(false);
                break;
            default: 
                break;
        }
    }
    return (
        <div className='assign2-container'>
            <div className='select-btn'>
                <ul>
                    <li><button className='btn-chung' onClick={() => handleClick(1)}>Show BT1</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(2)}>Show BT2</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(3)}>Show BT3</button></li>
                </ul>
            </div>
            {
                showDiv1 && <Assign2_Bai1 />
            }
            {
                showDiv2 && <Assign2_Bai2/>
            }
            {
                showDiv3 && <Assign2_Bai3/>
            }
        </div>
    )
};

export default Assign2;     