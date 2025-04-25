import { useState } from "react";
import "./App.css";

function App() {
  const {formData, setFormData} = useState({
    name: "",
    genger: "",
    age: "",
    fathername: "",
    mothername: "",
    city: "",
    state: "",
    country: "",
    college: "",
    semister : "",
    skills: ""
  });
  const handlingChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const handlesubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    }
  }
}