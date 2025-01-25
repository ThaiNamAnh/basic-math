import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import PhepCong from './view/PhepCong.tsx';
import PhepNhan from './view/PhepNhan.tsx';
import TextToSpeech from './view/TextToSpeech.tsx';
import VideoPYoutube from './view/VideoYoutube.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="basic-math" element={<App />} />
      <Route path="basic-math/phep-cong" element={<PhepCong />} />
      <Route path="basic-math/phep-nhan" element={<PhepNhan />} />
      <Route path="basic-math/text-to-speech" element={<TextToSpeech />} />
      <Route path="basic-math/video-youtube" element={<VideoPYoutube />} />
    </Routes>
  </BrowserRouter>
)
