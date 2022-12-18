import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './admin.css'
const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const details = ["admin@gmail.com", "admin"]
    const onSubmit = (e) => {
        e.preventDefault();
        if (email === details[0] && password == details[1]) {
            alert("Login successful");
            navigate("/queries");
        } else {
            alert("Incorrect Details");
        }
    };
    useEffect(() => {
        if (!localStorage.getItem("queries")) {
            localStorage.setItem("queries", JSON.stringify([]));
        }
    }, []);

    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <h1><span>Admin</span> Login</h1>
                        <div>
                            <label>email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label>Password</label>
                            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Enter your password' />
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin