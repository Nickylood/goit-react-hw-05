import css from "./SearchForm.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";



export default function SearchForm({ onSubmit, }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast.error("Please enter text to search movies!");
      return;
    }
    onSubmit(value);
  }

  const movieFilter = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Toaster />
      <input
        type="text"
        name="find_movie"
        value={value}
        onChange={movieFilter}
      />
      <button className={css.btnSearch}>Search</button>
    </form>
  );
}



    

 