import Ass2_Bai2_Box from '../Ass2_Bai2_Box/Ass2_Bai2_Box';
import './Ass2_Bai2.scss';

const Assign2_Bai2 = () => {
    return (
        <div className='Assign2-bai2-container'>
            <header className='header'>
                <h1>
                    Upcomming Events
                </h1>
            </header>
            <div className="body">
                 <Ass2_Bai2_Box 
                    backgroundColor={'#de5646'} 
                    padding={'20px'} 
                    day={'THU'} 
                    date={'03/20'} 
                    title={'Empower Hour'} 
                    content={'Social Media Office Hour'} 
                />
                  <Ass2_Bai2_Box 
                    backgroundColor={'#de5646'} 
                    padding={'20px'} 
                    day={'MON'} 
                    date={'03/22'} 
                    title={'Empower Hour'} 
                    content={'Getting Started On Social Media'} 
                />
                  <Ass2_Bai2_Box 
                    backgroundColor={'#3f9063'} 
                    padding={'30px 20px'} 
                    day={'TUE'} 
                    date={'03/27'} 
                    title={'CE Classes'} 
                    content={'Conducting Open Houses and Developing a Safety Plan'} 
                />
                  <Ass2_Bai2_Box 
                    backgroundColor={'#5696b0'} 
                    padding={'30px 20px'} 
                    day={'WED'} 
                    date={'04/01'} 
                    title={'Board Meetings'} 
                    content={'Board of Directors Aprill Meeting'} 
                />
            </div>
            <div className="footer">
                <button>See Full Events Calender</button>
            </div>
        </div>
    )
}

export default Assign2_Bai2;