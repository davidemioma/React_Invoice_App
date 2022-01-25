import { Routes, Route } from "react-router";
import InvoicePage from "./pages/invoice/InvoicPage";
import HomePage from "./pages/Home/HomePage";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.appTheme.theme);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:invoiceId" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
