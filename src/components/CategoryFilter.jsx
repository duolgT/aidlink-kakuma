
import { categories } from "../data/categories";

function CategoryFilter({ selectedCategory, onSelect }) {
  return (
    <div
      className="category-filters"
      role="group"
      aria-label="Filter services by category"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-pill ${
            selectedCategory === category.id ? "active" : ""
          }`}
          aria-pressed={selectedCategory === category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
