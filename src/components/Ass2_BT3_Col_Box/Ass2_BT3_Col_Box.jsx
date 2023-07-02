import './Ass2_BT3_Col_Box.scss';
const Ass2_BT3_Col_Box = ({ img }) => {
    return (
        <div className="body-row-col1-box">
            <div className="contain-img">
                <img src={img} alt="img" />
            </div>
            <div className="box-content">
                <p className='p-1'>Donec convallis accumsan elit, ac intern</p>
                <p className='p-2'>Feb 14, 2013</p>
                <div className='div-content'>
                    <span className='p-3'>
                        Curabitur ut dui lacus. Pellentesque habitant morbi tristique senectus et malesuada.
                    </span>
                    <span className='p-4'>Read more</span>
                </div>
            </div>
        </div>
    )
}

export default Ass2_BT3_Col_Box;