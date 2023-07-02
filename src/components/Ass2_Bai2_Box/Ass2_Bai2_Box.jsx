import './Ass2_Bai2.scss';

const Ass2_Bai2_Box = ({ backgroundColor, padding, day, date, title, content}) => {
    return (
        <div className="box-ass2">
            <div className="leftbox" style={{ background: backgroundColor, padding: padding }}>
                <h5>{day}</h5>
                <h4>{date}</h4>
            </div>
            <div className="rightbox">
                <p className='p-1' style={{ color: backgroundColor }}>{title}</p>
                <p className='p-2'>{content}</p>
            </div>
        </div>
    )
}

export default Ass2_Bai2_Box;