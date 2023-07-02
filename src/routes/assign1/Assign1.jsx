import React, { useState } from 'react'
import './Assign1.scss';
import Ass1_Bai1 from '../../components/Ass1_Bai1/Ass1_Bai1';
import Ass1_Bai2 from '../../components/Ass1_Bai2/Ass1_Bai2';
import Ass1_Bai3 from '../../components/Ass1_Bai3/Ass1_Bai3';
const Assign1 = () => {
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
        <div className='assign1-container'>
            <div className='select-btn'>
                <ul>
                    <li><button className='btn-chung' onClick={() => handleClick(1)}>Show BT1</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(2)}>Show BT2</button></li>
                    <li><button className='btn-chung' onClick={() => handleClick(3)}>Show BT3</button></li>
                </ul>
            </div>
            {
                showDiv1 && <Ass1_Bai1 />
            }
            {
                showDiv2 && <Ass1_Bai2/>
            }
            {
                showDiv3 && <Ass1_Bai3/>
            }
        </div>
    )
}

export default Assign1;
