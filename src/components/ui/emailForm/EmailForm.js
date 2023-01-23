import React from 'react';
import '../../signInCard/signInCard.css';


export function EmailForm() {
    return (
        <div className="inputGroup">
            <input className="emailInput" type="text" name="name" required="" autoComplete="off"/>
            <label htmlFor="email">email</label>
        </div>
    )
}

export default EmailForm;

