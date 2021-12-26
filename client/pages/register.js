import { useState } from "react";
import axios from 'axios';
const register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, secret)
        axios.post('http://localhost:8000/api/register', {
            name, email, password, secret
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light">
                <div className="col text-center">
                    <h1>register Page</h1>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                           <small> <label className="text-muted"> Name</label></small>
                            <input
                            value = {name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className = "form-control" placeholder="Enter your name" />
                        </div>
                        <div className="form-group p-2">
                           <small> <label className="text-muted"> Email</label></small>
                            <input
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" className = "form-control" placeholder="Enter your email" />
                        </div>
                        <div className="form-group p-2">
                           <small> <label className="text-muted"> Password</label></small>
                            <input
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" className = "form-control" placeholder="Enter your password" />
                        </div>

                        <div className="form-group p-2">
                        <small> <label className="text-muted"> Pick a question</label></small>
                            <select className="form-control">
                                <option>What is your favourite color?</option>
                                <option>What is your best friend's name?</option>
                                <option>What is your place of birth?</option>
                            </select>
                            <small className="form-text text-muted">
                                You can use this to reset your password if forgotten.
                            </small>
                        </div>
                        <div className="form-group p-2">
                            <input
                            value = {secret}
                            onChange={(e) => setSecret(e.target.value)}
                            type="text" className="form-control" placeholder= 'Write your answer here'/>
                        </div>
                        <div className="form-group p-2">
                        <button className="btn btn-primary col-12">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default register;