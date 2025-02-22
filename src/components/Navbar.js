import Reac from 'react'
import { Outlet,Link } from "react-router-dom";
// import SelectComponent from './SelectComponent';
// import News from './components/News.js';

const Navbar =() => {
  return (
      <div>
           <nav className="navbar fixed-top navbar-expand-lg bg-light nav-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">News How Now</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/business">Business</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/entertainment">Entertainment</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/general">General</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/health">Health</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/science">Science</Link></li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/sports">Sports</Link></li>
                          <li className="nav-item">
                          <Link className="nav-link" to="/technology">Technoloy</Link>
                          </li>
                          
                      </ul>
                      <div>
                       </div>
                      
                  </div>
              </div>
            </nav>
            <Outlet/>
      </div>
    )
}

export default Navbar
