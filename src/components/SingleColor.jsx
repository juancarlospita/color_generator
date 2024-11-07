import { useState } from "react";
import Clip from "/clipTransparent.png"

const SingleColor = ({hexColor}) => {

    const [copy, setCopy] = useState (false);
    const handletCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() =>{
            setCopy(false);
        }, 1000)
    }

    return (  
        <div className="single-card" style={{ backgroundColor: `#${hexColor}`}}>
            <div className="content">
                <p>#{ hexColor }</p>
                <button onClick={ handletCopy(hexColor) }>
                    <img src={ Clip } alt="Copy" />
                </button>
            </div>
            { copy ? <p className="copy-alert">Copied to Clipboard</p> : null}
        
        </div>
    );
}

export default SingleColor;