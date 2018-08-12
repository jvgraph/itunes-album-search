const InputField = props => {
  return (
    <input
      type={props.type}
      name={props.name}
      className={`input input--type-${props.type ? props.type : "text"}`}
    />
  );
};
export default InputField;
