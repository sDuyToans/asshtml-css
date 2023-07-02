import IMG1 from '../../assets/musk1.jpeg';
import IMG2 from '../../assets/musk2.jpeg';
import IMG3 from '../../assets/musk3.jpeg';
import IMG4 from '../../assets/musk4.jpeg';
import Ass4_BT4_row from '../Ass4_BT4_row/Ass4_BT4_row';
const Ass4_Bai4 = () => {
    const data = [
        { picture: IMG1, name: "Jane Doe", email: "jane.doe@foo.com", phone: "01 800 2000", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        { picture: IMG2, name: "John Doe", email: "john.doe@foo.com", phone: "01 800 2000", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae quod consequatur. Iste, et." },
        { picture: IMG3, name: "Jane Smith", email: "jane.smith@foo.com", phone: "01 800 2000", comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        { picture: IMG4, name: "John Smith", email: "john.smith@foo.com", phone: "01 800 2000", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae quod consequatur. Iste, et." },
    ];
    return (
        <div className='bg-[#91ced4] p-[20px]'>
            <table className='flex flex-col outline outline-[#327a81] rounded-[10px]'>
                <thead className='w-full text-center text-white flex justify-center py-[20px] bg-[#327a81] rounded-t-[10px]'>
                    <tr>
                        <td className='text-2xl'>USERS</td>
                    </tr>
                </thead>
                <tbody className='rounded-b-[10px ]'>
                    <tr className='w-full flex gap-6 py-[10px] text-[#22626b]'>
                        <td className='w-[10%] text-center pl-[10px]'>Picture</td>
                        <td className='w-[10%] text-center'>Name</td>
                        <td className='w-[25%] text-center'>Email</td>
                        <td className='w-[15%] text-center'>Phone</td>
                        <td className='w-[30%] text-center'>Comment</td>
                    </tr>
                    {
                        data.map((d, index) => {
                            if (index % 2 != 0 && index === data.length-1){
                                return <Ass4_BT4_row key={index} {...d} backgroundColor={1} lastTr={1}/>
                            } else if (index % 2 != 0) {
                                return <Ass4_BT4_row key={index} {...d} backgroundColor={1}/>
                            } else if(index === data.length-1) {
                                return <Ass4_BT4_row key={index} {...d} lastTr={1}/>
                            } else return <Ass4_BT4_row key={index} {...d}/> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Ass4_Bai4;