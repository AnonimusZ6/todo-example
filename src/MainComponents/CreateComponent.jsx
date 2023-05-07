import React, { useState } from "react";
import SidebarComponent from "./SidebarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateComponent = () => {
    const [names, setName] = useState('');
    const [descriptions, setDescription] = useState('');
    const [states, setStates] = useState('');
    const redirect = useNavigate();

    async function postHandle(e) {
        e.preventDefault();
        setStates('Идет отправка...');

        try
        {
            return await axios.post('http://localhost:3000/tasks', {
                "name": names,
                "description": descriptions,
                "date": new Date().toLocaleDateString()
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                setStates('Отправлено!');
                return redirect('/');
            });
        }
        catch(err)
        {
            setStates('Ошибка отправки!');
        }
    }

    return (
        <div>
            <SidebarComponent />
            <div className="main-form">
                <span>Создать новую запись</span>
                <form action="" method="POST">
                    <div className="form-name">
                        <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} placeholder="Введите название"></input>
                    </div>
                    <div className="form-description">
                        <textarea type="text" name="user_description" onChange={(e) => setDescription(e.target.value)} placeholder="Введите описание"></textarea>
                    </div>
                    <div className="form-button">
                        <button type="submit" onClick={(e) => postHandle(e)}>Создать</button>
                    </div>
                    <div className="form-state">
                        <span>{states}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent;