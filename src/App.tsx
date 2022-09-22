import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/Actions/productActions";
import { ProjectRoutes } from "./components/routes";

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  //TO GET PRODUCTS
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <ProjectRoutes />
    </>
  );
}

export default App;
