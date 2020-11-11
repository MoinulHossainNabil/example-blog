import React, {useContext} from 'react';
import {Context} from '../ContextApi';

export default function Login() {
    const context = useContext(Context);
    const data = {
        email: "nnaabiill@gmail.com",
        password: "django1234"
    }
    return (
        <div>
            <button className="btn btn-primay" onClick={() => {context.login(data)}}>Login</button>
        </div>
    )
}
