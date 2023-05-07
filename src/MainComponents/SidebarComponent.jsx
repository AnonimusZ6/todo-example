import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const SidebarComponent = () => {
    return (
        <div className="main-sidebar">
            <div className="header-logo">
                <span>Todo Example</span>
            </div>
            <div className="flex-container">
                <div className="create-todos">
                    <Link to="/create" style={{textDecoration: "none", color: "white"}}>Создать</Link>
                </div>
                <div className="active-todos">
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>Активные дела</Link>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent;