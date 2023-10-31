import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    // 
    // <Link className="nav-link active" to="/">Home <i className='fa fa-home'></i></Link>
    // <Link className="nav-link active" to="/weather">Weather <i className='fa fa-cloud'></i></Link>


    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div class="container-fluid d-flex flex-wrap justify-content-between align-items-center mx-2">
                <div >
                    <Link className="navbar-brand" to="/">Weather App <i className="fa fa-cloud"></i></Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link active" to="/">Home <i className='fa fa-home'></i></Link>
                        <Link className="nav-link active" to="/weather">Weather <i className='fa fa-cloud'></i></Link>
                        <a className="nav-link avtice text-dark" href="https://csevicky.netlify.app/" rel="noreferrer" target='_blank'>About Dev</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}
