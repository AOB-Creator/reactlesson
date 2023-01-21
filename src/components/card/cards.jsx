import "./card.css";
import { Button } from "@mui/material";
function Cards(props) {
  let { products = [] } = props;
  return (
    <div className="cards">
      {products.map((item, index) => {
        return (
          <div className="card" key={index}>
            <label htmlFor={`check${index}`}>
              <Button variant="contained">{item.title}</Button>
            </label>
            <input type="checkbox" id={`check${index}`} />
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
