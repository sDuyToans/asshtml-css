import './Ass3_Bai2_imgcontainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as ArrowUpDown } from '../../assets/arrrow-ass3.svg';

const Ass3_Bai2_imgcontainer = ({ img }) => {
    return (
        <div className='img-container'>
            <div className="block-hover">
                <div className="contain-icon">
                    <span className='span-1'><FontAwesomeIcon icon={faLink} /></span>
                    <span className='span-2'><ArrowUpDown /></span>
                </div>
                <div className="text-contain">
                    <p className='p-1'>EXPLAINING THE IOS BLOCK</p>
                    <p className='p-2'>WEB DESIGN</p>
                    <p className='p-3'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Illo voluptate non quos animi itaque eligendi porro dolorem aperiam
                    </p>
                </div>
            </div>
            <div className="contain-img">
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default Ass3_Bai2_imgcontainer;