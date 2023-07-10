import './top-hit-item.scss';

const TopHitItemContainer = ({title}) => {
    return (
        <div className="top-hit">
            <h4 className='title'>{title}</h4>
            <div className="top-hit-item-container">
                <div className="top-hit-item">
                    <div className="top-box-item">
                    </div>
                    <div className="bottom-box-item">

                    </div>
                </div>
                <div className="top-hit-item">
                    <div className="top-box-item">

                    </div>
                    <div className="bottom-box-item">

                    </div>
                </div>
                <div className="top-hit-item">
                    <div className="top-box-item">

                    </div>
                    <div className="bottom-box-item">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHitItemContainer;