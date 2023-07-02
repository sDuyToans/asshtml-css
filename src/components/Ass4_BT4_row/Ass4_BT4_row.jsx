const Ass4_BT4_row = ({picture, name, email, phone, comment, backgroundColor = null, lastTr = null}) => {
    return (
        <tr className='w-full flex gap-6 items-center py-[10px] text-[#22626b]'  
        style={{background : backgroundColor ? "#edf7f8" : "#fff",
                borderBottomRightRadius : lastTr ? "10px" : null,
                borderBottomLeftRadius : lastTr ? "10px" : null,
        }}>
            <th className='w-[10%] text-center pl-[10px]'>
                <img src={picture} alt="img" style={{ width: "70px", height: "70px" }} className='rounded-[50%]' />
            </th>
            <th className='w-[10%] text-center'>{name}</th>
            <th className='w-[25%] text-center'>{email}</th>
            <th className='w-[15%] text-center'>{phone}</th>
            <th className='w-[30%] text-left'>{comment}</th>
        </tr>
    )
}
export default Ass4_BT4_row;