import React, { useState } from 'react'
import '../scss/url-section.scss';

const UrlSection = () => {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false)
    const handleClick = () => {
        if (url === "") {
            setError(true)
        } else
            setError(false)
    }
    return (
        <div className="url-section">

            <input type="text" onChange={(e) => setUrl(e.target.value)} className={error ? "url-input error" : " url-input"} placeholder="Shorten a link here..." />
            <button className="shorten-btn" onClick={handleClick}>Shorten it!</button>

            {error && <span className="err-message">Please add a link</span>}
        </div >
    );
}

export default UrlSection;