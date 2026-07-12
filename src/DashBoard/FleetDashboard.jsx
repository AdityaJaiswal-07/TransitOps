import "./FleetDashboard.css";
import FleetStatus from "./FleetStatus";
import RecentTrips from "./RecentTrips";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiChevronDown,
  FiChevronRight,
  FiCalendar,
  FiTruck,
  FiTool,
  FiFileText,
  FiDroplet,
  FiBarChart2,
  FiSettings,
  FiUser,
  FiGrid,
} from "react-icons/fi";

import {
  FaTruck,
  FaCheckCircle,
  FaTools,
  FaProjectDiagram,
  FaGasPump,
} from "react-icons/fa";

import { Avatar, Badge } from "@mui/material";

export default function FleetDashboard() {
  return (
    <div className="fleet-dashboard">

      {/* ================= Sidebar ================= */}

      <aside className="sidebar">

        <div className="logo">

          <div className="logo-icon">
            <FaTruck />
          </div>

          <div>
            <h2>TransitOps</h2>
            <span>Fleet Manager</span>
          </div>

          <FiChevronDown />
        </div>

        <nav>

          <a className="active">
            <FiGrid />
            Dashboard
          </a>

          <a>
            <FiTruck />
            Fleet Management
            <FiChevronDown className="arrow" />
          </a>

          <a>
            <FiTool />
            Maintenance
            <FiChevronDown className="arrow" />
          </a>

          <a>
            <FiFileText />
            Documents
          </a>

          <a>
            <FiDroplet />
            Fuel Management
          </a>

          <a>
            <FiBarChart2 />
            Fleet Analytics
          </a>

          <a>
            <FiBell />
            Notifications

            <span className="notification-count">
              4
            </span>
          </a>

          <a>
            <FiSettings />
            Settings
          </a>

          <a>
            <FiUser />
            Profile
          </a>

        </nav>

        <div className="help-card">
          <h4>Need Help?</h4>
          <p>Contact support team</p>
        </div>

        <div className="sidebar-user">

          <Avatar />

          <div>
            <h4>Fletcher</h4>
            <span>Fleet Manager</span>
          </div>

          <FiChevronDown />

        </div>

      </aside>

      {/* ================= Main ================= */}

      <main className="main-content">

        {/* Navbar */}

        <header className="topbar">

          <button className="menu-btn">
            <FiMenu />
          </button>

          <div className="search-box">

            <FiSearch />

            <input
              type="text"
              placeholder="Search vehicles, drivers, trips..."
            />

            <span>Ctrl + K</span>

          </div>

          <div className="top-actions">

            <Badge
              color="secondary"
              badgeContent={4}
            >
              <FiBell className="bell-icon" />
            </Badge>

            <div className="profile">

              <Avatar />

              <div>

                <h4>Fletcher</h4>

                <span>Fleet Manager</span>

              </div>

              <FiChevronDown />

            </div>

          </div>

        </header>

        {/* Welcome */}

        <section className="welcome">

          <div>

            <h1>
              Welcome back, Fletcher! 👋
            </h1>

            <p>
              Here's what's happening with your fleet today.
            </p>

          </div>

          <button className="date-btn">

            <FiCalendar />

            May 12 – May 18, 2025

            <FiChevronDown />

          </button>

        </section>

        {/* Statistic Cards */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="icon blue">
              <FaTruck />
            </div>

            <div>

              <p>Total Vehicles</p>

              <h2>128</h2>

              <span className="green">
                ↑ 8 vs last week
              </span>

            </div>

            <FiChevronRight />

          </div>

          <div className="stat-card">

            <div className="icon green-bg">
              <FaCheckCircle />
            </div>

            <div>

              <p>Active Vehicles</p>

              <h2>96</h2>

              <span className="green">
                75% of total
              </span>

            </div>

            <FiChevronRight />

          </div>

          <div className="stat-card">

            <div className="icon orange">
              <FaTools />
            </div>

            <div>

              <p>In Maintenance</p>

              <h2>12</h2>

              <span className="orange-text">
                ↑2 vs last week
              </span>

            </div>

            <FiChevronRight />

          </div>

          <div className="stat-card">

            <div className="icon purple">
              <FaProjectDiagram />
            </div>

            <div>

              <p>Active Trips</p>

              <h2>34</h2>

              <span className="green">
                ↑6 vs last week
              </span>

            </div>

            <FiChevronRight />

          </div>

          <div className="stat-card">

            <div className="icon red">
              <FaGasPump />
            </div>

            <div>

              <p>Avg. Fuel Efficiency</p>

              <h2>6.45 km/l</h2>

              <span className="red-text">
                ↓0.35 vs last week
              </span>

            </div>

            <FiChevronRight />

          </div>

        </section>
        <FleetStatus />
        <RecentTrips />

      </main>

    </div>
  );
}