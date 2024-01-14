const FormInput = ({label, type, name, defaultValue}) => {
  return (
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <input defaultValue={defaultValue} name={name} type={type} placeholder="Type here" className="input input-bordered" />
</label>
  );
}

export default FormInput;
