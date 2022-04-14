import React, { useState } from "react";

import Frame from '../../asset/Frame 304.svg';

import './styles/access.css'


const Access = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="d-flex column access__message">
            <div className="">
                <h1>Want to be the first to <br /> know when we launch?</h1>
            </div>
            <div className="d-flex row mt-32 sm-column">
                <input
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Kemdirim@gmail.com"

                />

                <button
                    className="btn2"
                    type="submit"
                >
                    <span>Get Early Access</span>

                </button>
            </div>

        </div>


    );
}

export default Access