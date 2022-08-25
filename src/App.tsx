import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/:home" element={<Layout />} />
        <Route path="/:register" element={<Layout />} />
      </Routes>
      <Layout />
    </BrowserRouter>
  );
};
export default App;
