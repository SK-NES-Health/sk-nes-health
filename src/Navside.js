import { Link } from "react-router-dom"
function Navside() {
  return (
    <div className="navside">
      <Link to="/">
        <button className="navside-btn">Infoceuticals</button>
      </Link>
      <Link to="/mihealth-guide">
        <button className="navside-btn">miHealth Guide</button>
      </Link>
      <Link to="/contact">
        <button className="navside-btn">Contact</button>
      </Link>
    </div>
  )
}

export default Navside
