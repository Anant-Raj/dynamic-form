import "./styles.css";

import Form from "./Form";

export default function App() {
  const fieldArr = [
    { name: "Name", label: "Enter Your Name" },
    { name: "Age", label: "Enter Your Age" }
  ];
  const onSubmitHandler = () => {};
  return (
    <div className="App">
      <Form fieldArr={fieldArr} onSubmitHandler={onSubmitHandler} />
    </div>
  );
}
