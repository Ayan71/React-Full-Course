import { useState } from "react";

function App() {
  // const [first, setFirst] = useState("");
  // const [last, setLast] = useState("");

  // function changeHandlerF(event) {
  //   setFirst(event.target.value);
  // }
  // function changeHandlerS(event) {
  //   setLast(event.target.value);
  // }

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    commets: "",
    isVisible: false,
    mode: "",
  });

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((preFormData) => {
      return {
        ...preFormData,
        [name]: type === "checkBox" ? checked : value,
      };
    });
  }
  function SubmitHandler(event) {
    event.preventDefault();

    console.log("finnally submitted");
    console.log(form);
  }

  return (
    <div className="App">
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={change}
          name="firstName"
          value={form.firstName}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="second name"
          onChange={change}
          name="lastName"
          value={form.lastName}
        />

        <br />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={change}
          name="email"
          value={form.email}
        />
        <br />
        <br />
        <br />
        <textarea
          placeholder="commententer ur comment"
          onChange={change}
          name="commets"
          value={form.commets}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={change}
          name="isVisible"
          // value={form.isVisible}
          id="isVisible"
          checked={form.isVisible}
        />
        <label htmlFor="isVisible">Am I Visisble?</label>
        <br />
        <input
          type="radio"
          onChange={change}
          name="mode"
          value="Online mode"
          id="Online mode"
        />
        <label htmlFor="Online mode">Online mode</label>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
