import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    firstName: "",
    LastName: "",
    email: "",
    country: "",
    StreetAddress: "",
    city: "",
    statet: "",
    postalCode: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("ayan");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="first name"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          name="LastName"
          id="fLastName"
          placeholder="Last name"
          onChange={changeHandler}
          value={formData.LastName}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="">India</option>
          <option value="">Canada</option>
          <option value="">Maxico</option>
          <option value="">United Satates</option>
        </select>

        <label htmlFor="StreetAddress">Street address</label>
        <input
          type="test"
          name="StreetAddress"
          id="StreetAddress"
          placeholder="email"
          onChange={changeHandler}
          value={formData.StreetAddress}
        />
        <label htmlFor="city">city</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="city"
          onChange={changeHandler}
          value={formData.city}
        />
        <label htmlFor="state">state</label>
        <input
          type="text"
          name="statet"
          id="statet"
          placeholder="Ewnetr"
          onChange={changeHandler}
          value={formData.statet}
        />
        <label htmlFor="postalCode">postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder=""
          onChange={changeHandler}
          value={formData.postalCode}
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
