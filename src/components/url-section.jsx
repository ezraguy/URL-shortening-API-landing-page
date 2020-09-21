import React, { useState } from 'react'
import '../scss/url-section.scss';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'animate.css';
import Cards from './cards-section';

const UrlSection = () => {

    const [url, setUrl] = useState('');
    const [urlArr, setUrlArr] = useState([])
    const [error, setError] = useState(false)

    const handleClick = () => {
        let tempUrl = url.trim();
        if (tempUrl === "") {
            setError(true)
        } else {
            setError(false)
            axios.post('https://rel.ink/api/links/', { "url": url }).then((data) => {
                let hashId = data.data.hashid;
                let shorten = 'https://rel.ink/' + hashId;
                let copied = false;
                let newObj = { url, hashId, shorten, copied }
                setUrlArr([...urlArr, newObj]);
            })
            setUrl('');
        }
    }

    const handleCopy = (index) => {
        let arr = [...urlArr];
        let obj = arr[index];
        obj.copied = true;
        setUrlArr(arr)

    }

    return (
        <div className="url-section-wrap">
            <div className="url-section">
                <input type="text" onChange={(e) => setUrl(e.target.value)} className={error ? "url-input error" : " url-input"} placeholder="Shorten a link here..." value={url} />  {error && <span className="err-message">Please add a link</span>}
                <button className="shorten-btn" onClick={handleClick}>Shorten it!</button>
            </div >

            <div className="urls">
                {/* TODO: make url responsive */}
                {urlArr.map((url, index) => {
                    return (
                        <div className="url animate__fadeInDown" key={index}>
                            <span>{url.url}</span>
                            <a className="shorten" href={url.shorten}>{url.shorten}</a>
                            <CopyToClipboard text={url.shorten}>
                                <button className={url.copied ? 'copied' : 'copy-url'} onClick={() => handleCopy(index)}>{url.copied ? 'Copied!' : 'Copy'}</button>
                            </CopyToClipboard>
                        </div>
                    )
                })}
            </div>
            <Cards />
        </div>
    );
}

export default UrlSection;