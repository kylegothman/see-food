import React from 'react';
import './emailForm.css';


export function EmailForm() {
    return (
                <div className="inputGroup">
                    <input type="text" required="" autoComplete="off"/>
                    <label htmlFor="email">Email</label>
                </div>
    )
}

export default EmailForm;

