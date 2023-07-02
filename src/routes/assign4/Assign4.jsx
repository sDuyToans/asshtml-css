import Ass4_Bai1 from '../../components/Ass4_Bai1/Ass4_Bai1';
import Ass4_Bai2 from '../../components/Ass4_Bai2/Ass4_Bai2';
import Ass4_Bai3 from '../../components/Ass4_Bai3/Ass4_Bai3';
import Ass4_Bai4 from '../../components/Ass4_Bai4/Ass4_Bai4';
import './Assign4.scss';
import { useState } from 'react';
const Assign4 = () => {
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    const [showDiv4, setShowDiv4] = useState(false);
    const handleClick = (e) => {
        switch (e) {
            case 1:
                setShowDiv1(!showDiv1);
                setShowDiv2(false);
                setShowDiv3(false);
                setShowDiv4(false);
                break;
            case 2:
                setShowDiv2(!showDiv2);
                setShowDiv1(false);
                setShowDiv3(false);
                setShowDiv4(false);
                break;
            case 3:
                setShowDiv3(!showDiv3);
                setShowDiv1(false);
                setShowDiv2(false);
                setShowDiv4(false);
                break;
            case 4:
                setShowDiv4(!showDiv4);
                setShowDiv1(false);
                setShowDiv2(false);
                setShowDiv3(false);
                break
            default:
                break;
        }
    }
    return (
        <div className='assign3-container'>
            <div className='select-btn'>
                <ul>
                    <li><button className='btn-chung' onClick={() => handleClick(1)}>Show BT1</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(2)}>Show BT2</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(3)}>Show BT3</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(4)}>Show BT4</button></li>
                </ul>
            </div>
            {
                showDiv1 && <Ass4_Bai1 />
            }
            {
                showDiv2 && <Ass4_Bai2 />
            }
            {
                showDiv3 && <Ass4_Bai3 />
            }
             {
                showDiv4 && <Ass4_Bai4 />
            }
        </div>
    )
}

export default Assign4;