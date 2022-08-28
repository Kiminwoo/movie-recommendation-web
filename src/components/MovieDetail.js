import PropTypes from "prop-types";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

function MovieDetail({ id, coverImg, title, year, summary, genres, quickUrl }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>{title}
                    <h3 className={styles.movie__year}>{year}</h3>
                </h2>
                <p>{summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                    <a href={quickUrl} target="_blank"> --> </a>
                </ul>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
