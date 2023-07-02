import './Ass3_Bai3_product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Ass3_Bai3_product = ({img}) => {
    return (
        <div className="product-container">
            <div className="img-container">
                <img src={img} alt="img" />
                <span><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
            <div className="des-container">
                <div className="left-des">
                    <p className='title'>TITLE HERE</p>
                    <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora tempore iste incidunt.</p>
                </div>
                <div className="right-des">
                    <p className='price'>$20</p>
                </div>
            </div>
        </div>
    )
}

export default Ass3_Bai3_product;