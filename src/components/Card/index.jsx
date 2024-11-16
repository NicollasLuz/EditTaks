import styles from './Card.module.css'

function Card ({titulo, afazer, vapo}){
    return (
        <div className={styles.card}>
            <div className={styles.card__border} />
            <div className={styles.card_title__container}>
            <span className={styles.card_title}>{titulo}</span>
            </div>
            <hr className={styles.line} />
            <p className={styles.description}>{afazer}</p>
            <button className={styles.button} onChange={vapo}>Excluir</button>

            <div className={styles.checkboxWrapper}>
                <input
                defaultValue={false}
                type="checkbox"
                className={styles.check}
                id="check1-61"
                />
                <label htmlFor="check1-61" className={styles.label}>
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
    );
}
export default Card;