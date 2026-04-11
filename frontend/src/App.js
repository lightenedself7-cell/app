import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MeditationsPage from "@/pages/MeditationsPage";
import ProgramsPage from "@/pages/ProgramsPage";
import WorkWithMePage from "@/pages/WorkWithMePage";
import BookingSuccessPage from "@/pages/BookingSuccessPage";
import BookingCancelPage from "@/pages/BookingCancelPage";

function App() {
  return (
    <div className="App">
      {/* Fixed Golden Watermark - visible while scrolling */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
        style={{
          opacity: 0.12
        }}
      >
        <div
          className="w-[700px] h-[980px]"
          style={{
            backgroundImage: 'url(/watermark.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 0 20px rgba(201, 168, 124, 0.2))'
          }}
        ></div>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meditations" element={<MeditationsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/work-with-me" element={<WorkWithMePage />} />
          <Route path="/booking/success" element={<BookingSuccessPage />} />
          <Route path="/booking/cancel" element={<BookingCancelPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
