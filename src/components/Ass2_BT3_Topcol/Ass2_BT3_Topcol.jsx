import './Ass2_BT3_Topcol.scss';
import { Link } from 'react-router-dom';
const Ass2_BT3_Topcol = ({ title, valid, value }) => {
    return (
        <div className="top-col">
            <h4>{title}</h4>
            {
                valid &&  <Link>{ value }</Link>
            }
        </div>
    )
}
export default Ass2_BT3_Topcol;