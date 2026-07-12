import "./CreateAccount.css";
import { Link } from "react-router-dom";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiCreditCard,
} from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function CreateAccount() {
  return (
    <div className="createAccount">

      {/* LEFT PANEL */}

      <div className="leftSection">

        <div className="brand">

          <div className="logoBox">
            <img
              src="/images/logo.png"
              alt="TransitOps"
              className="logo"
            />
          </div>

          <div>
            <h2>TransitOps</h2>
            <p>Smart Transport Operations</p>
          </div>

        </div>

        <div className="heroContent">

          <h1>
            Manage. Monitor.
            <br />
            Move <span>Smarter.</span>
          </h1>

          <p className="heroDescription">
            Create your account and take control of your fleet
            operations in one unified platform.
          </p>

          <div className="feature">

            <div className="featureIcon blue">
              🚚
            </div>

            <div>
              <h4>Complete Fleet Management</h4>
              <p>
                Manage vehicles, trips, and operations in one place
              </p>
            </div>

          </div>

          <div className="feature">

            <div className="featureIcon green">
              👨‍✈️
            </div>

            <div>
              <h4>Driver & Compliance Tracking</h4>
              <p>
                Track driver performance and license compliance
              </p>
            </div>

          </div>

          <div className="feature">

            <div className="featureIcon orange">
              🔧
            </div>

            <div>
              <h4>Maintenance & Service Alerts</h4>
              <p>
                Schedule maintenance and get real-time alerts
              </p>
            </div>

          </div>

          <div className="feature">

            <div className="featureIcon purple">
              📊
            </div>

            <div>
              <h4>Real-time Analytics & Reports</h4>
              <p>
                Make data-driven decisions with smart insights
              </p>
            </div>

          </div>

        </div>

        <div className="truckImage">
          <img
            src="/images/truck.jpg"
            alt="Truck"
          />
        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="rightSection">

        <div className="loginTop">

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            <button className="loginBtn">
              Log in
            </button>
          </Link>

        </div>

        <div className="formWrapper">

          <h1>Create Your Account</h1>

          <p className="subtitle">
            Join TransitOps and streamline your fleet operations.
          </p>

          <form>

            <div className="grid">

              <TextField
                fullWidth
                label="Full Name"
                placeholder="Enter your full name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiUser />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                placeholder="Enter your email address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiMail />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiPhone />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Identification Number"
                placeholder="Enter your identification number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiCreditCard />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                placeholder="Create a strong password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiLock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <FiEye />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiLock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <FiEye />
                    </InputAdornment>
                  ),
                }}
              />

            </div>

            <TextField
              fullWidth
              select
              className="roleSelect"
              label="Select Your Role"
              defaultValue=""
            >
              <MenuItem value="">Select your role</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Driver">Driver</MenuItem>
            </TextField>

            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  I agree to the
                  <span className="linkBlue">
                    {" "}Terms & Conditions{" "}
                  </span>
                  and
                  <span className="linkBlue">
                    {" "}Privacy Policy
                  </span>
                </>
              }
            />

            <Button
              fullWidth
              variant="contained"
              className="createBtn"
            >
              Create Account
            </Button>

            <div className="divider">
              <span>or sign up with</span>
            </div>

            <div className="socialButtons">

              <Button
                variant="outlined"
                className="socialBtn"
              >
                <FcGoogle size={24} />
                Continue with Google
              </Button>

              <Button
                variant="outlined"
                className="socialBtn"
              >
                <FaApple size={22} />
                Continue with Apple
              </Button>

            </div>

            <p className="bottomText">
              By creating an account, you agree to our
              <span className="linkBlue">
                {" "}Terms & Conditions
              </span>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}