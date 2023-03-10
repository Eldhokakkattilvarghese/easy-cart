import './SideDrawer.css'
import { Link } from 'react-router-dom';
function SideDrawer({ show, click }) {
    const sidedrawerClass = ['sidedrawer'];
    if (show) {
        sidedrawerClass.push("show")
    }
    return <div className={sidedrawerClass.join(" ")}>
        <ul className='sidedrawer__links' onClick={click}>
            <li>
                <Link>

                    <i className='fas fa-shopping-cart'></i>
                    <span>
                        Cart <span className='sidedrawer__cartbadge'>0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
    </div>

}

export default SideDrawer