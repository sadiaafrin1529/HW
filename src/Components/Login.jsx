import React from "react";

const Login = () => {
  return (
    <div style="text-align: center;">
        <h1>Login</h1>
        <form style="max-width: 300px; margin: 0 auto;">
            <div style="margin-bottom: 10px;">
                <label for="username" style="display: block;">Username:</label>
                <input type="text" id="username" name="username" style="width: 100%; padding: 5px;"/>
            </div>

            <div style="margin-bottom: 10px;">
                <label for="password" style="display: block;">Password:</label>
                <input type="password" id="password" name="password" style="width: 100%; padding: 5px;"/>
            </div>

            <div style="margin-bottom: 10px;">
                <input type="submit" value="Login" style="width: 100%; padding: 10px; background-color: #007BFF; color: #fff; border: none; cursor: pointer;"/>
            </div>
        </form>
    </div>
  );
};

export default Login;
