import './Ass3_Bai1.scss';

const Ass3_Bai1 = () => {
    return (
        <div className='ass3-bai1-container'>
            <span className='next'>
                <i>
                </i>
            </span>
            <span className='prev'>
                <i></i>
            </span>
            <h1>
                Four Boxes Slideshow
                <span>
                    Recreating the background image slideshow seen on
                    <a href="http://www.atelier-serge-thoraval.com/en/">Atelier Serge Thoroval's website</a>
                </span>
            </h1>
            <div className="corops-demos">
                <div className="demos-contain">
                    <a href="#" className='a-1'>Serge Thoroval</a>
                    <a href="#" className='a-2'>Lateral</a>
                </div>
                <a href="#" className='a-3'>Fall</a>
            </div>
        </div>
    )
};

export default Ass3_Bai1;