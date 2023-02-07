import Link from 'next/link';

const Navigation = () => {
    return (        
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"> 
              <li className="nav-item">             
                <Link className='nav-link' href='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">             
                <Link className='nav-link' href='/estudiante/new'>
                  Estudiante
                </Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' href='/about'>
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>       
    )
};

export default Navigation;