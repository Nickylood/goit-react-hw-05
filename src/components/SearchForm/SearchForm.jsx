import css from "./SearchForm.module.css";

export default function SearchForm({ value, onSubmit, movieFilter }) {
  return (
    <form className={css.form} onSubmit={onSubmit}>
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
