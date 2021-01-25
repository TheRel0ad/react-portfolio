import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (  
    <nav className="navbar">
      <div className="content">
        <h1><Link to="/">The Socialism Blog</Link></h1>
        <div className="links">
          <Link to="/" className={location.pathname === '/' ? 'active' : null}>
            Home
          </Link>
          <Link to="/create" className={location.pathname === '/create' ? 'active' : null}>
            New Blog
          </Link>
          <Link to="/form-data" className={location.pathname === '/form-data' ? 'active' : null}>
            Form data
          </Link>
        </div>
      </div>
    </nav>
  )
}
 
export default Navbar