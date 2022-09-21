import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/ProductActions";
import { ProjectRoutes } from "./components/Routes";

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  //TO GET PRODUCTS
  useEffect(() => {
    (() => {
      dispatch(getProducts());
    })();
  }, [dispatch]);

  return (
    <>
      <ProjectRoutes />
    </>
  );
}

export default App;
