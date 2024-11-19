import React, { useState } from 'react';
import Card from "../../components/Card";
import styles from "./Tarefas.module.css";  
import Container from '../../components/Container'; 

function Tarefas({ tarefas, onEdit, onDelete }) {
    const [editingId, setEditingId] = useState(null);
    const [completedTasks, setCompletedTasks] = useState({});

    const handleEdit = (tarefa) => {
        if (editingId === tarefa.id) {
            onEdit(tarefa);
            setEditingId(null);
        } else {
            setEditingId(tarefa.id);
        }
    }

    const handleCheckboxChange = (taskId) => {
        setCompletedTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId], // Alterna o estado do checkbox
        }));
    }

    return (
        <>
            <Container>
                {tarefas.map((task) => (
                    <div key={task.id}>
                        {editingId === task.id ? (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleEdit({
                                        ...task,
                                        titulo: e.target.titulo.value,
                                        descricao: e.target.descricao.value,
                                    });
                                }}
                            >  
                            <div className={styles.inputedit}>
                                <input className={styles.input} name="titulo" defaultValue={task.titulo} />
                                <br/>
                                <br/>
                                <input className={styles.input} name="descricao" defaultValue={task.descricao} />
                                <br/>
                                <button className={styles.ButtonEdit2} type="submit">Salvar</button>
                            </div>
                            </form>
                        ) : (
                            <div className={styles.card}>
                                <div className={styles.card__border} />
                                <div className={styles.card_title__container}>
                                    <span className={styles.card_title}>{task.titulo}</span>
                                </div>
                                <hr className={styles.line} />
                                <p className={styles.description}>{task.descricao}</p>
                                <button onClick={() => setEditingId(task.id)} className={styles.ButtonEdit}>Editar</button>
                                <button className={styles.button} onClick={() => onDelete(task.id)}>Excluir</button>
                                <div className={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        className={styles.check}
                                        id={`check-${task.id}`} // id único
                                        checked={completedTasks[task.id] || false} // Garantir que o valor padrão seja false
                                        onChange={() => handleCheckboxChange(task.id)}  
                                    />
                                    <label htmlFor={`check-${task.id}`} className={styles.label}>
                                        <svg width={55} height={55} viewBox="0 0 95 95">
                                            <rect
                                                x={30}
                                                y={20}
                                                width={50}
                                                height={50}
                                                stroke="white"
                                                fill="none"
                                            />
                                            <g transform="translate(0,-952.36222)">
                                                <path
                                                    d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                                                    stroke="white"
                                                    strokeWidth={3}
                                                    fill="none"
                                                    className={styles.path1}
                                                />
                                            </g>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </Container>
        </>
    );
}

export default Tarefas;