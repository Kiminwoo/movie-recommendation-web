import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetailMovie(json.data.movie);
    setLoading(false);

    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        
          <div className={styles.movie}>
            <MovieDetail
              key={detailMovie.id}
              id={detailMovie.id}
              year={detailMovie.year}
              summary={detailMovie.description_full}
              coverImg={detailMovie.medium_cover_image}
              title={detailMovie.title}
              genres={detailMovie.genres}
              quickUrl={detailMovie.url}
              />

          </div>
      )}
    </div>
  );
}
export default Detail;
