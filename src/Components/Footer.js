import React from 'react'

export default function Footer() {
    return (

        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="https://csevicky.netlify.app/" target="_blank" rel="noreferrer" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <h3>vishma-vicky</h3>
                    </a>
                    <span class="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
                </div>
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <a href="https://www.linkedin.com/in/vicky-cse03" target="_blank" rel="noreferrer"  ><i className='fa fa-linkedin mx-3' ></i></a>
                    <a href="https://github.com/vicky0004" target="_blank" rel="noreferrer"><i className='fa fa-dribbble mx-3' ></i></a>
                    <a href="https://www.youtube.com/@selfcomputerclass2351" target="_blank" rel="noreferrer"><i className='fa fa-youtube mx-3' ></i></a>
                    <a href="https://www.instagram.com/vicky_csk07/" target="_blank" rel="noreferrer"><i className='fa fa-instagram mx-3' ></i></a>
                    <a href="https://www.facebook.com/vickyraj.suhash" target="_blank" rel="noreferrer"><i className='fa fa-facebook mx-3'></i></a>
                </ul>
            </footer>
        </div>

    )
}
