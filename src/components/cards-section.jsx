import React, { useState } from 'react'
import '../scss/cards.scss';
import iconBrand from '../images/icon-brand-recognition.svg';
import iconDetailed from '../images/icon-detailed-records.svg';
import iconCustomizable from '../images/icon-fully-customizable.svg';
const Cards = () => {
    const [cards] = useState([
        {
            id: 1,
            title: 'Brand Recognition',
            text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
            icon: iconBrand
        },
        {
            id: 2,
            title: 'Detailed Records',
            text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
            icon: iconDetailed
        },
        {
            id: 3,
            title: 'Fully Customizable',
            text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
            icon: iconCustomizable
        }
    ]);
    return (
        <div className="cards">
            <div className="main-title">Advanced Statistics</div>
            <div className="under-main-title">Track how your links are performing across the web with our advanced statistics dashboard.</div>
            <div className="cards-content">

                {cards.map((card) => {
                    return (<div className="card" key={card.id}>
                        <div className="card-icon">
                            <img src={card.icon} alt="icon" />
                        </div>
                        <p className="card-title">{card.title}</p>
                        <p className="card-text">{card.text}</p>
                    </div>
                    )
                })}
                <div className="connector"></div>
            </div>
        </div>
    );
}

export default Cards;