import styles from './AdicionarTarefas.module.css'
import React, { useState } from 'react';
import Tarefas from '../Tarefas';


function AdicionarTarefas() {
    const [tarefa, setTarefa] = useState([])
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')


    const handleChange = (inputType, e) => {
        if (inputType === 'titulo') {
          setTitulo(e.target.value);
        } else {
          setDescricao(e.target.value);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newTarefa = {
          id: Date.now(),
          titulo,
          descricao
        };

        setTarefa([...tarefa, newTarefa]);
        setTitulo('');
        setDescricao('');
      };
    
      const handleEdit = (updatedTarefa) => {
        setTarefa(tarefa.map(tarefa => 
          tarefa.id === updatedTarefa.id ? updatedTarefa : tarefa
        ));
      };
    
      const handleDelete = (id) => {
        setTarefa(tarefa.filter(tarefa => tarefa.id !== id));
      };

    return(
        <>
        <div className={styles.input__container}>
            <label className={styles.input__label}>Título</label>
            <br/>
            <input 
                className={styles.input}  
                placeholder="Digite o título da tarefa" 
                type="text" 
                value={titulo}
                onChange={(e) => handleChange('titulo', e)} 
                required
            />
            <br/>
            <input
                className={styles.input} 
                placeholder="Digite a descrição da tarefa" 
                type="text"
                value={descricao}
                onChange={(e) => handleChange('descricao', e)} 
                required
            />
            <button 
                className={styles.button}
                type="submit"
                onClick={handleSubmit}
            >Adicionar</button>
        </div>
        <Tarefas
            tarefa={tarefa}
            onEdit={handleEdit} 
            onDelete={handleDelete}
        />
        </>
    );
}

export default AdicionarTarefas