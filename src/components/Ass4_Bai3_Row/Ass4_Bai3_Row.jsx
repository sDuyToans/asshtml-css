const Ass4_Bai3_Row = ({ style, author, title, reserve_price, current_bid}) => {
    return (
        <tr className={style}>
            <td className="px-3.5 border-r-2 border-white">{author}</td>
            <td className="px-3.5 border-r-2 border-white">{title}</td>
            <td className="px-3.5 border-r-2 border-white text-right">{reserve_price}</td>
            <td className="px-3.5 border-r-2 border-white text-right">{current_bid}</td>
        </tr >
    )
}
export default Ass4_Bai3_Row;