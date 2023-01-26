import React from 'react';
import '../../registerCard/registerCard.css';


export function EmailForm() {
    return (
        <div className="inputGroup">
            <input className="emailInput" type="text" name="name" required="" autoComplete="off"/>
            <label htmlFor="email">email</label>
        </div>
    )
}

export default EmailForm;

