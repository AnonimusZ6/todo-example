import React from "react";
import SidebarComponent from "./SidebarComponent";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return (
        <>
        <SidebarComponent />
        <div className="main-container">
            <div className="check-info">
                <span>Страница не найдена! <Link to="/">Вернуться</Link></span>
            </div>
        </div>
        </>
    )
}

export default ErrorComponent;

