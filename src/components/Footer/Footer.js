import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white appbar-footer">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:vaha1455@yahoo.com" role="button"
                        ><i className="fa fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/valeryo-haimov-5a2b05251/" role="button"
                        ><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Valeryo145" role="button"
                        ><i className="fa fa-github"></i></a>
                </section>
            </div>
            <div>
                <p>I am very passionate about the opportunity to working together with you. Looking forward to it!.</p>
                <p>&copy; ValeryoHaimov</p>
            </div>
        </footer>
    );
}