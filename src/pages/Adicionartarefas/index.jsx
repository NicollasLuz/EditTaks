import styles from './AdicionarTarefas.module.css'
import React, { useState } from 'react';
import Tarefas from '../Tarefas';


function AdicionarTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleChange = (inputType, e) => {
    if (inputType === 'titulo') {
      setTitulo(e.target.value);
    } else if (inputType === 'descricao') {
      setDescricao(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
    };
    setTarefas([...tarefas, novaTarefa]);
    setTitulo('');
    setDescricao('');
  };

  const handleEdit = (tarefaAtualizada) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa
      )
    );
  };

  const handleDelete = (id) => {
    const resultado = confirm("Quer mesmo excluir a tarefa?")
    if(resultado) {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
      alert("Tarefa excluida com sucesso!")
    }  
  };

  return (
    <>
      <div className={styles.input__container}>
        <label className={styles.input__label}>Título</label>
        <br />
        <input
          className={styles.input}
          placeholder="Digite o título da tarefa"
          type="text"
          value={titulo}
          onChange={(e) => handleChange('titulo', e)}
          required
        />
        <br />
        <input
          className={styles.input}
          placeholder="Digite a descrição da tarefa"
          type="text"
          value={descricao}
          onChange={(e) => handleChange('descricao', e)}
          required
        />
        <br />
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          Adicionar
        </button>
      </div>
      
          <Tarefas
            tarefas={tarefas}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        
    </>
  );
}

export default AdicionarTarefas