import React from 'react';
import '../scss/footer.scss';
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg'
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg'
import { ReactComponent as PinterestSvg } from '../images/icon-pinterest.svg'
import { ReactComponent as InstagramSvg } from '../images/icon-instagram.svg'
const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <div className="footer ">
                <p className="main-title">Shortly</p>

                <div className="title-wrap">
                    <p className="title">Features</p>
                    <p className="sub-title">Link Shortening</p>
                    <p className="sub-title">Branded Links</p>
                    <p className="sub-title">Support</p>
                </div>
                <div className="title-wrap">
                    <p className="title">Resources</p>
                    <p className="sub-title">Blog</p>
                    <p className="sub-title">Developers</p>
                    <p className="sub-title">Analytics</p>
                </div>
                <div className="title-wrap">
                    <p className="title">Company</p>
                    <p className="sub-title">About</p>
                    <p className="sub-title">Our Team</p>
                    <p className="sub-title">Careers</p>
                    <p className="sub-title">Contact</p>
                </div>

                <div className="icons">
                    <FacebookSvg className="icon" />
                    <TwitterSvg className="icon" />
                    <PinterestSvg className="icon" />
                    <InstagramSvg className="icon" />

                </div>

                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                 Coded by <a href="https://github.com/ezraguy">Guy Ezra</a>.
                </div>
            </div>
        </div>
    );
}

export default Footer;