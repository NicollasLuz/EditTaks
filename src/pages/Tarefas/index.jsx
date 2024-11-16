import React, { useState } from 'react';
import Card from "../../components/Card"


function Tarefas({ tarefa }) {
    console.log("Tarefas props:", tarefa); // Debugging line

    // Check if tarefa is defined and is an array before mapping
    if (!tarefa || !Array.isArray(tarefa)) {
        return <div>No tasks available.</div>; // Handle the case where tarefa is not defined
    }

    return (
        <div className="tasks-container">
            {tarefa.map((task) => (
                <Card
                    key={task.id}  // Use task.id for a unique key
                    titulo={task.titulo}  // Pass the title
                    afazer={task.descricao}  // Pass the description
                />
            ))}
        </div>
    );
}

export default Tarefas
