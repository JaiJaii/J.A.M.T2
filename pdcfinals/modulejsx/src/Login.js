import React, {useState} from 'react';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleLogin =() => {
        if (username && password) {
            onLogin(username);
        } else {
            alert('Please enter your username and password');

        }
    };

    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username:
                    <input type='text'
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>Password:
                    <input type='password'
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type='button' onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};
export default Login;