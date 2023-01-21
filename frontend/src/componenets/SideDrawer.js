import './SideDrawer.css'

function SideDrawer({show}) {
    const sidedrawerClass=['sidedrawer'];
    if(show){
        sidedrawerClass.push("show")
    }
  return   <div className={sidedrawerClass.join("")}>SideDrawer</div>

}

export default SideDrawer