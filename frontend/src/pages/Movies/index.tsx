import "./styles.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const Movies = () => {
  const options = [{value:'chocolate', label:'Chocolate'},
  {value:'strawberry', label:'Strawberry'},
  {value:'vanilla', label:'Vanilla'}
]
  return (
    <>
      <div className="movies-container">
        <div className="movies-info-container">
        <div className="crud-select base-card">
        <Select
          options={options}
          isClearable
          classNamePrefix="prefix-crud-select"
          />
          </div>
          <div>
            <h1>Tela listagem de filmes</h1>
          </div>
          <div>
            <Link to="/movies/1">
              <p>Acessar/movies/1</p>
            </Link>
            <Link to="/movies/2">
              <p>Acessar/movies/2</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
