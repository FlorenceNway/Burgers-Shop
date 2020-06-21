import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';

const Cover = ({scroll}) => {
    
    const ref = useRef();

    const handleClick = () => {
        if(!scroll) {
            return true;
        }    
        else {ref.current.scrollIntoView({
            behavior: 'smooth'
          });
        }  
    }

    return  <>
            <div className="coverPage">
                <div className="coverText">
                    <h1> Order our top-rated recipes today!</h1>
                    <NavLink to={"/recipes"} activeClassName={'active'}>
                        <button onClick={handleClick}>GET STARTED</button>
                    </NavLink>
                </div>
            </div>
            <div ref={ref}/>
            </>
}

export default Cover;
