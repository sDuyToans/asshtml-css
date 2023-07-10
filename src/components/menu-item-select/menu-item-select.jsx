import './menu-item-select.scss';

const MenuItemSelect = ({ hinhdang, title, active = false}) => {
    return (
        <div className={active == true ? 'menu-item-select-active' : 'menu-item-select'}>
            <span className={hinhdang}></span>
            <span>{title}</span>
        </div>
    )
}
export default MenuItemSelect;