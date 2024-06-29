import React from "react";
import "./../components_styling/Login.css"
export default function Login() {
    return (
        <div>
            <div className="container">
              <div className="section-1">
                <h2>Login</h2>
                <form className="form">
                    <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div>
                     <label>Password</label>
                     <input type="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button>Login</button>
                </form>
              </div>
            </div>
        </div>
    );
}