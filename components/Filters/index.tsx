import { getUniqueValues } from "@/utils/helpers";
import { ProductStateType, ProductType } from "@/types/ProductType";

type FiltersProps = {
  allProducts: ProductType[];
  filterElements: Partial<ProductStateType>;
  updateFilters: (e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>) => void;
  resetFilters: () => void;
};

const Filters = ({ allProducts, filterElements, updateFilters, resetFilters }: FiltersProps) => {

  const { filters = {} as ProductStateType['filters']} = filterElements;

  const categories = getUniqueValues(allProducts, "category");
  return (
    <section>
      <div className="md:sticky top-20">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <input
              type="text"
              name="text"
              placeholder="Rechercher..."
              className="text-sm p-2 border border-gray-300 transition duration-200 ease-in-out"
              value={filters.text}
              onChange={(e) => updateFilters(e)}
            />
          </div>
          <div className="mb-4">
            <h5 className="mb-2 text-base">CATEGORIES</h5>
            <div>
              {categories.map((c: string, index) => (
                <div key={index} className="flex items-center gap-1 mb-1">
                  <button
                    type="button"
                    name="category"
                    onClick={(e) => updateFilters(e)}
                    className={`capitalize cursor-pointer bg-transparent border-none p-1 ${c === filters.category ? 'text-primary' : 'text-gray-700'}`}
                  >
                    {c}
                  </button>
                  <p className="text-xs">
                    (
                    {c === "all"
                      ? allProducts.length
                      : allProducts.filter((p) => p.category === c).length}
                    )
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="cursor-pointer py-2 px-4 bg-gray-700 text-white border border-gray-700 transition duration-200 ease-in-out hover:bg-white hover:text-gray-700"
          >
            Reset Filters
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filters;
