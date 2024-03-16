import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  import AddNotes from "./pages/AddNotes";
import ShowModal from "./components/ShowModal";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/addNotes" element={ <ShowModal/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
