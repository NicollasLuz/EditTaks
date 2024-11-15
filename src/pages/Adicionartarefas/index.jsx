import styles from './AdicionarTarefas.module.css'

function AdicionarTarefas() {
    return(
        <div className={styles.input__container}>
            <label className={styles.input__label}>Título</label>
            <input 
                className={styles.input}  
                placeholder="Digite o título da tarefa" 
                type="text" 
            />
            <input
                className={styles.input} 
                placeholder="Digite a descrição da tarefa" 
                type="text"
            />
            <button >Adicionar</button>
        </div>
    );
}

export default AdicionarTarefas