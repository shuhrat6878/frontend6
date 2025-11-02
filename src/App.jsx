import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import { Newbook } from "./pages/books/components/newbook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/newbook/:id" element={<Newbook/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
