const NavItem = ({ item, index }) => {
    
    return (
        <li className="nav-item" key={index}>
            <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href={`#${item}`}
            >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{item}</span>
            </a>
        </li>
    )
}

export default NavItem 