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
