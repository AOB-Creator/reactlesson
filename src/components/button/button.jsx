import "./button.css";
function Button(props) {
  let { content } = props;
  console.log(content);
  return <button>{content}</button>;
}

export default Button;
