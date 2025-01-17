import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import PhepCong from './view/PhepCong.tsx';
import PhepNhan from './view/PhepNhan.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="basic-math" element={<App />} />
      <Route path="basic-math/phep-cong" element={<PhepCong />} />
      <Route path="basic-math/phep-nhan" element={<PhepNhan />} />
    </Routes>
  </BrowserRouter>
)
