import './item-bxh.scss';

const ItemBXH = ({ stt, title, author, active = false }) => {
    return (
        <div className="item-bxh">
            <div className="left-item-bxh">
                <div className={active == true ? "stt-left-active" : "stt-left"}>
                    <span>{stt}</span>
                </div>
                <div className="stt-right">
                </div>
            </div>
            <div className="right-item-bxh">
                <p>{title}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default ItemBXH;