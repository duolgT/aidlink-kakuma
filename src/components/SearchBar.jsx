
import { Search, X } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-field">
      <Search size={20} aria-hidden="true" />

      <label className="sr-only" htmlFor="service-search">
        Search for services
      </label>

      <input
        id="service-search"
        type="search"
        value={value}
        placeholder="Search healthcare, education, water..."
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
