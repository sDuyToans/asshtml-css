import './Ass2_Bai3_Col_Box_1.scss';
import { Link } from 'react-router-dom';
const Ass2_Bai3_Col_Box_1 = ({ img }) => {
    return (
        <div className="body-row-col3-box">
            <div className="contain-img">
                <img src={img} alt="img" />
            </div>
            <div className="box-content-col3">
                <h6 className='h6-1'>Jason Clint</h6>
                <p className='p-1'>Curabitur ut dui lacus. Pellentesque habitant morbi tristique senectus et malesuada</p>
                <Link className='a-1'>Contact agent</Link>
            </div>
        </div>
    )
}

export default Ass2_Bai3_Col_Box_1;