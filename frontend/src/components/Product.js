import './Product.css'
import {Link} from 'react-router-dom'
function Product() {
    return (
        <div className="product">
            <img src= "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
            <div className="product__info"></div>
            <p className="info__name"></p>
            <p className="info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est aliquid! Distinctio cumque dolorem dicta unde culpa veritatis iusto laudantium!</p>
            <p className='info__name'>$499.9</p>
            <Link className='info__button' to={`/product/${1111}`}>View</Link>
        </div>
    )
}

export default Product