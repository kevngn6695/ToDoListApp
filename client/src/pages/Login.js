import React from "react";

import "../assets/style/css/pages/login.sass";

function Login(props) {
  return (
    <section className={props.className}>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            {/* Remember Checkbox */}
            <div className="form-group">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            {/* Forget Password */}
            <div className="forget-psswrd">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>

      {/* Sign in with Gmail and other social media with their logo */}
      <div className="social-media-login">
        <div className="social-media-login-container">
          <h2>Or Sign In With</h2>
          <div className="social-media-login-buttons">
            <button className="google-login">Google</button>
            <button className="facebook-login">Facebook</button>
            <button className="twitter-login">Twitter</button>
          </div>
        </div>
      </div>

      {/* Line break */}
      <div className="line-break">
        <hr />
        <span>OR</span>
        <hr />
      </div>

      {/* Register */}
      <div className="register">
        <p>Don't have an account?</p>
        <a href="/register">Register</a>
      </div>
    </section>
  );
}

export default Login;
