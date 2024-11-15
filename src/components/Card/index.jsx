import styles from './Card.module.css'


function Card ({titulo, afazer}){
    return (
        
        <div className={styles.card}>
                <div className={styles.card_header}>
                <h3 className={styles.title}>{titulo}</h3>
                <p className={styles.description}>{afazer}</p>
            </div>

            <div className={styles.temp_scale}>
                <button>excluir</button>
            </div>
        </div>
        
    );
}
export default Card;