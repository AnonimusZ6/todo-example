import React, { useEffect, useState } from "react";
import './styles.css';
import SidebarComponent from "./SidebarComponent";
import { Link } from "react-router-dom";
import axios from "axios";

const ActiveComponent = () => {

    const emptyList = <>
    <div className="main-container">
        <div className="check-info">
            <span>Список дел пуст. Вы можете добавить <Link to="/create">новый</Link></span>
        </div>
    </div>
    </>;

    const [lists, setList] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/tasks').then((response) => {
                setList(response.data);
            });
        } catch(err)
        {
            throw new Error('server not founding');
        }


    }, []);

    console.log(lists);

    let result = lists.map((result) => {
        return (
            <>
                <div className="col-sm-18" style={{zIndex: "-1"}}>
                    <div className="card" style={{margin: "10px"}}>
                        <div className="card-body" style={{backgroundColor: "rgb(11, 11, 46)", borderRadius: "0px 0px 6px 6px"}}>
                            <h5 className="card-title" style={{color: "white"}}>{result.name}</h5>
                            <span className="card-text" style={{color: "white"}}>{result.description}</span>
                            <div className="card-footer text-muted">
                                {result.date}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    });
    return (
        <>
        <SidebarComponent />
        <div className="card-container">
        <div className="row">
            {lists.length != 0 ? result : emptyList}
            </div>
        </div>
        </>
    )
}

export default ActiveComponent;