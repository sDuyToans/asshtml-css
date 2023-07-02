import Ass2_Box from '../Ass2_Bai1_Box/Ass2_Bai1_Box';
import './Ass2_Bai1.scss';

const Assign2_Bai1 = () => {
    const printBox = (min, max) => {
        const arrStatement = [];
        for (let i = min; i <= max; i++) {
            arrStatement.push(i);
        }
        return arrStatement.map(number => <Ass2_Box key={number} />)
    }
    return (
        <div className='ass2-bai1-container'>
            <header className="header">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum alias molestiae similique perspiciatis consequuntur a labore, culpa inventore sed fugit corporis laboriosam iusto nulla quis voluptatibus. Voluptatibus, veniam repellendus.</p>
            </header>
            <div className="carousel">
                {
                    printBox(1, 3)
                }
            </div>
            <footer className="footer">
                <div className="box">
                    <div className="box-img"></div>
                    <div className="box-param">
                        <h3>HEADING</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium nihil earum. Ducimus sunt nobis molestiae? Dolorem veritatis aspernatur reiciendis atque perferendis incidunt nam facilis voluptas, voluptatum architecto, nostrum accusamus.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Assign2_Bai1;