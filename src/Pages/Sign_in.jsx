import "./Sign_in.css";
import { Link } from "react-router-dom";

import {
  MdEmail,
  MdLock,
  MdOutlineLocalShipping,
  MdBarChart,
  MdPerson,
  MdBuild,
  MdKeyboardArrowDown,
} from "react-icons/md";

import { FaGlobe, FaEye } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-card">

        {/* LEFT SIDE */}

        <div className="left-panel">

          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>

          <h1>
            Manage. Monitor.
            <br />
            Move <span>Smarter.</span>
          </h1>

          <p className="subtitle">
            A unified platform to manage your fleet, drivers,
            trips, maintenance, and expenses efficiently.
          </p>

          <div className="features">

            <div className="feature">

              <div className="icon blue">
                <MdOutlineLocalShipping />
              </div>

              <div>
                <h4>Complete Fleet Management</h4>

                <p>
                  Manage vehicles, trips, and operations in one place
                </p>

              </div>

            </div>

            <div className="divider"></div>

            <div className="feature">

              <div className="icon green">
                <MdPerson />
              </div>

              <div>

                <h4>Driver & Compliance Tracking</h4>

                <p>
                  Track driver performance and license compliance
                </p>

              </div>

            </div>

            <div className="divider"></div>

            <div className="feature">

              <div className="icon orange">
                <MdBuild />
              </div>

              <div>

                <h4>Maintenance & Service Alerts</h4>

                <p>
                  Schedule maintenance and get real-time alerts
                </p>

              </div>

            </div>

            <div className="divider"></div>

            <div className="feature">

              <div className="icon purple">
                <MdBarChart />
              </div>

              <div>

                <h4>Real-time Analytics & Reports</h4>

                <p>
                  Make data-driven decisions with smart insights
                </p>

              </div>

            </div>

          </div>

          <div className="truck-image">
            <img src="/truck.png" alt="truck" />
          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="right-panel">

          <div className="language">

            <button>

              <FaGlobe />

              English

              <MdKeyboardArrowDown />

            </button>

          </div>

          <div className="login-box">

            <h1>Welcome Back!</h1>

            <p>
              Sign in to continue to your TransitOps account
            </p>

            <form>

              <label>Email Address</label>

              <div className="input-box">

                <MdEmail className="left-icon" />

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

              <label>Password</label>

              <div className="input-box">

                <MdLock className="left-icon" />

                <input
                  type="password"
                  placeholder="Enter your password"
                />

                <FaEye className="right-icon" />

              </div>

              <div className="options">

                <div className="remember">

                  <input type="checkbox" />

                  Remember me

                </div>

                <Link to="/">
                  Forgot Password?
                </Link>

              </div>

              <button className="signin-btn">
                Sign In
              </button>

              <div className="or">

                <span></span>

                <p>or</p>

                <span></span>

              </div>

              <div className="role-select">

                <MdPerson />

                <select>

                  <option>
                    Select your role
                  </option>

                  <option>Admin</option>

                  <option>Fleet Manager</option>

                  <option>Driver</option>

                </select>

                <MdKeyboardArrowDown />

              </div>

              <p className="contact">

                Don't have an account?

                <Link to="/">
                  Contact your administrator
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}