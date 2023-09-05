import NavItem from '../NavItem/NavItem';

const NavList = ({ list = [] }) => {
    
    return (
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {Array.isArray(list) &&  list.map((item, idx) => {
                return <NavItem item={ item } index={idx} />
            })}
        </ul>
    )
}

export default NavList