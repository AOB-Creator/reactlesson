import "./foto.css";

function Fotto(props) {
  let { content, products } = props;
  console.log(content);
  return (
    <div>
      {products.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

export default Fotto;
