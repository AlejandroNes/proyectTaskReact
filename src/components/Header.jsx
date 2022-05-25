import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">APP TASK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-center" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center">Mi Cuenta</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header