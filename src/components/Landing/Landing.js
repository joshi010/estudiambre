import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/inicio");
    }

    return(
        <body>
            <div>
                <h1>LLENA TUS DATOS E INICIA A ESTUDIAR</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="">Nombre:</label>
                    <input 
                        required
                        type="text"
                        autoComplete="false"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Correo</label>
                    <input 
                        required
                        type="email"
                        autoComplete="false"
                    
                    
                    />
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </body>
    );
}