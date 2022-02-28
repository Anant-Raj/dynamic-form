import { useState } from "react";
import "./styles.css";

export default function Form(props) {
  const { fieldArr, onSubmitHandler } = props;
  const [valueMap, setValueObj] = useState(() => {
    const valueMap = {};
    fieldArr.map((field) => (valueMap[field.name] = ""));
    return valueMap;
  });

  const handleValueChange = (event) => {
    event.preventDefault();
    const keyName = event.currentTarget.dataset.name;
    const value = event.currentTarget.value;
    const newValueMap = { ...valueMap, [keyName]: value };
    setValueObj(newValueMap);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    for (const property in valueMap) {
      console.log(`${property}: ${valueMap[property]}`);
    }
    onSubmitHandler(valueMap);
  };

  const fieldList = fieldArr.map((field) => {
    const { name, label } = field;
    return (
      <div className="fieldWrap" key={name}>
        <label>
          {label}
          <input
            type="text"
            onChange={handleValueChange}
            data-name={name}
            value={valueMap[name]}
            className="input"
          ></input>
        </label>
      </div>
    );
  });
  return (
    <div className="form">
      <form>
        {fieldList}
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
