import './Backdrop.css'

function Backdrop({show,click}) {
  return show && <div className='backdrop' onClick={click}>Backdrop</div>

}

export default Backdrop