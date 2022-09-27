import "./Input.css";
import { FiSearch } from "react-icons/fi";
function Input({ text, submit }) {
  return (
    <form action="" className="input" onSubmit={submit}>
      <input
        type="text"
        placeholder="Please enter location"
        className="input_value"
        onChange={text}
      />
      <span className="input_icon">
        <FiSearch />
      </span>
    </form>
  );
}

export default Input;
