import ItemBXH from '../../components/item-bxh/item-bxh';
import MenuItemSelect from '../../components/menu-item-select/menu-item-select';
import TopHitItemContainer from '../../components/top-hit-item/top-hit-item';
import './final.scss';

const Final = () => {
    const arrItemBXH = [
        { stt: '1', title: 'Gánh Mẹ', author: 'Quách Beem', active: true },
        { stt: '2', title: 'Waitting For You', author: 'Momo, Onion', active: false },
        { stt: '3', title: 'Trong Mơ', author: 'Mỹ Mỹ', active: false },
        { stt: '4', title: 'Đáp Án Cuối Cùng', author: 'Quân A.P', active: false },
        { stt: '5', title: 'The Last Goodbye', author: 'Nguyễn Trần Trung Quân', active: false },
        { stt: '6', title: 'Ngày Chưa Giông Bão', author: 'Tùng Dương', active: false },
        { stt: '7', title: 'Buồn Làm Chi Em Ơi', author: 'Hoài Lâm', active: false },
    ];
    const arrMenuItemTop = [
        { hinhdang: 'hinh-tron', title: 'Home', active: true },
        { hinhdang: 'hinh-vuong', title: 'Explore', active: false },
        { hinhdang: 'hinh-tron', title: 'Shorts', active: false },
        { hinhdang: 'hinh-vuong', title: 'Subcriptions', active: false }
    ];
    const arrMenuItemBottom = [
        { hinhdang: 'hinh-vuong', title: 'Library', active: false },
        { hinhdang: 'hinh-tron', title: 'History', active: false },
        { hinhdang: 'hinh-vuong', title: 'Your videos', active: false },
        { hinhdang: 'hinh-tron', title: 'Watch later', active: false }
    ]
    return (
        <div className='final-container'>
            <header className="header">
                <div className="logo">
                    <span>Logo</span>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Tìm kiếm' className='search-box' />
                    <button className='btn-search'>Search</button>
                </div>
            </header>
            <div className="body">
                <div className="menu-item">
                    <div className="top-column">
                        {
                            arrMenuItemTop.map((item, index) => <MenuItemSelect {...item} key={index} />)
                        }
                    </div>
                    <div className="bottom-column">
                        {
                            arrMenuItemBottom.map((item, index) => <MenuItemSelect {...item} key={index} />)
                        }
                    </div>
                </div>
                <div className="middle-column">
                    <div className="menu-select">
                        <ul>
                            <li className='li-active'>All</li>
                            <li>Music</li>
                            <li>Mixes</li>
                            <li>Playlist</li>
                            <li>Live</li>
                            <li>EMD</li>
                            <li>Love songs</li>
                        </ul>
                    </div>
                    {
                        <TopHitItemContainer title={'TOPHIT'} />
                    }
                    {
                        <TopHitItemContainer title={'NGÀY PHÁT HÀNH'} />
                    }
                </div>
                <div className="right-column">
                    <div className="top-right-column">
                        <h4 className='title'>BẢNG XẾP HẠNG</h4>
                    </div>
                    <div className="bottom-right-column">
                        {
                            arrItemBXH.map((item, index) => <ItemBXH {...item} key={index} />)
                        }
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Copyright(C) 2023/07/10 - DN23_FRF_FIF_05. By ToanNLD</p>
            </footer>
        </div>
    )
};

export default Final;