import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { ProductType } from "@/types/ProductType";
import { useEffect, useReducer } from "react";
import { useProducts } from "@/utils/useProducts";
import productReducer from "@/reducers/ProductReducer";
import Products from "@/components/Products"; 

const Home = () => {
  const [state, dispatch] = useReducer(productReducer, {
    allProducts: [],
    filteredProducts: [],
    filters: {
      text: "",
      category: "all",
    },
    sort: "price-lowest",
  });
  
  const { data, isLoading, isError, error } = useProducts();

  useEffect(() => {
    if (isLoading) {
      dispatch({ type: 'FETCH_PRODUCTS_START' });
    } else if (isError) {
      dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
    } else if (data) {
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
    }
  }, [data, isLoading, isError, error]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  
  const resetFilters = () => {
    dispatch({ type: "RESET_FILTERS" });
  };
  
  const updateSort = (event) => {
    dispatch({ type: "UPDATE_SORT", payload: event.target.value });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.filters, state.sort]);

  const products = state.allProducts as ProductType[];

  return (
    <PageWrapper>
      <Products 
        filteredProducts={state.filteredProducts}
        allProducts={state.allProducts}
        updateFilters={updateFilters}
        resetFilters={resetFilters}
        updateSort={updateSort}
        filters={state.filters}
        sort={state.sort}
      />
    </PageWrapper>
  );
};

export default Home;
