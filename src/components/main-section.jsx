import React from 'react';
import '../scss/main-section.scss';
import workingIllustration from '../images/illustration-working.svg';
import GetStarted from '../utils/get-started';
const Main = () => {
    return (
        <div className="container-fluid main-wrap">
            <div className="main">

                <div className="main-left">
                    <p className="main-header">More than just shorter links</p>
                    <p className="under-title">Build your brand’s recognition and get detailed insights on how your links are performing. </p>
                    <GetStarted />
                </div>


                <div className="main-right">
                    <img className="working-illustration" src={workingIllustration} alt="working-illustration" />
                </div>



            </div>

        </div>
    );
}

export default Main;