import React from 'react';
import Cover from './Cover';
import './style/OnTheMenu.scss'

const OnTheMenu = () => {

    return  <>
            <Cover/>
            <section className={"introlSection"}>
            <div className="intro1">
                <div>
                    <div className="text">
                        <h1>Choose your meals</h1>
                        <p>Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites</p>
                    </div>
                </div>
                <div className="img">
                    <img src={require('../images/side1.png')}></img>
                </div>
            </div>
            <div className="intro2">
                <div>
                    <div className="text">
                        <h1>Unpack your box</h1>
                        <p>We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.</p>
                    </div>  
                </div>
                <div className="img">
                    <img src={require('../images/side2.png')}></img>
                </div>
            </div>
            <div className="intro3">
                <div>
                    <div className="text">
                        <h1>Create magic</h1>
                        <p>Following our step-by-step instructions you’ll experience the magic of cooking recipes that our chefs create with your family’s tastes in mind.</p>
                    </div>
                </div>
                <div>
                    <img src={require('../images/side3.png')}></img>
                </div>
            </div>
            </section>
            </>
}

export default OnTheMenu;