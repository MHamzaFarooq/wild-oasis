import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
