import React from 'react';
import "./style/SpecialOffer.scss"

const SpecialOffer = () => {
    return <div className="specialOffer">
            <div>
                <div className="speText">
                    <img src={require('../images/specialOffer.svg')} alt='special offer'></img>
                </div>
                <div className="hmText">
                    <p>homemade burger</p>
                    <button>GET STARTED</button>
                </div>
            </div>
        </div>
}

export default SpecialOffer;