import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/Home";
import { Blog } from "@/pages/Blog";
import { Terms } from "@/pages/Terms";
import { Register } from "@/pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}