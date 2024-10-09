import React from 'react';
import Logo from './images/logo.png'
import { Link } from 'react-router-dom';

const SiteFooter = () => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-footer-text">
                                <div className="logo"><img src={Logo} alt="" /></div>
                                <h2>Portio is the Best Personal Portfolio Resume Template</h2>
                                <Link className="theme-btn" to="#">Purchase Now </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape">
                <svg width="471" height="540" viewBox="0 0 471 540" fill="none">
                    <circle cx="201" cy="270" r="270" fill="url(#paint0_radial_56_1838)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_56_1838" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(201 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-start">
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none">
                    <path
                        d="M68 0L73.0672 42.5254L94.0225 5.17619L82.4302 46.4037L116.083 19.9167L89.5963 53.5698L130.824 41.9775L93.4746 62.9328L136 68L93.4746 73.0672L130.824 94.0225L89.5963 82.4302L116.083 116.083L82.4302 89.5963L94.0225 130.824L73.0672 93.4746L68 136L62.9328 93.4746L41.9775 130.824L53.5698 89.5963L19.9167 116.083L46.4037 82.4302L5.17619 94.0225L42.5254 73.0672L0 68L42.5254 62.9328L5.17619 41.9775L46.4037 53.5698L19.9167 19.9167L53.5698 46.4037L41.9775 5.17619L62.9328 42.5254L68 0Z"
                        fill="#344400" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="471" height="540" viewBox="0 0 471 540" fill="none">
                    <circle cx="201" cy="270" r="270" fill="url(#paint0_radial_56_18381)" fillOpacity="0.3" />
                    <defs>
                        <radialGradient id="paint0_radial_56_18381" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(201 270) rotate(90) scale(270)">
                            <stop offset="0" stopColor="#C4EF17" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#1B1C1E" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-start-2">
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none">
                    <path
                        d="M68 0L73.0672 42.5254L94.0225 5.17619L82.4302 46.4037L116.083 19.9167L89.5963 53.5698L130.824 41.9775L93.4746 62.9328L136 68L93.4746 73.0672L130.824 94.0225L89.5963 82.4302L116.083 116.083L82.4302 89.5963L94.0225 130.824L73.0672 93.4746L68 136L62.9328 93.4746L41.9775 130.824L53.5698 89.5963L19.9167 116.083L46.4037 82.4302L5.17619 94.0225L42.5254 73.0672L0 68L42.5254 62.9328L5.17619 41.9775L46.4037 53.5698L19.9167 19.9167L53.5698 46.4037L41.9775 5.17619L62.9328 42.5254L68 0Z"
                        fill="#344400" />
                </svg>
            </div>
        </footer>
    );
};

export default SiteFooter;