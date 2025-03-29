import React from "react";

import "../assets/style/css/pages/profile.sass";

function Profile(props) {
  return (
    <section className={props.className}>
      <div className="profile-container">
        <div className="profile-form">
          <h1>Profile</h1>
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

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" />
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

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
              />
            </div>

            {/* Register Button */}
            <div className="form-group">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Profile);
