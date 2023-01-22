import React from 'react';
import './emailForm.css';


export function EmailForm() {
    return (
        <div className="inputGroup">
            <input type="text" name="name" required="" autoComplete="off"/>
            <label htmlFor="email">email</label>
        </div>
    )
}

export default EmailForm;

