import { useState } from "react";
import Values from "values.js";


const FormColor = ({setList}) => {

    const [color, setColor] = useState ("blue");
    const [error, setError] = useState(false);

    const handletGenerator = e => {
        e.preventDefault();
        // console.log(colors);
        

        try {
            let colors = new Values (color).all(5);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
            
        }
    }

    return (  
        <div className="form-color">
            <h1>Color Palete Generator</h1>
            <form onSubmit={ handletGenerator }>
                <input type="text" placeholder="#fff" 
                onChange={e => setColor(e.target.value)} />
                <input type="submit" value="generar" />
            </form>
            {error ? <p className="error">No existe este color</p> : null}
        </div>
    );
}

export default FormColor;