import StarRating from "./components/StarRating";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ProtectedRoute from "./HOC/ProtectedRoute";
import InfiniteScroll from "./components/InfiniteScroll";
// import InfiniteScrollIO from "./components/InfiniteScrollIO";
import Accordian from "./components/Accordian";
import Comment from "./components/Comment";
import ImageSlider from "./components/ImageSlider";
import TrafficLight from "./components/TrafficLight";
import Pagination from "./components/pagination/Pagination";
import GoogleSheet from "./components/GoogleSheet";
import Counter from "./components/Counter";
import FolderStructure from "./components/FolderStructure";
import Letters from "./components/Letters";
import ApiCall from "./components/ApiCall";
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/products" element={<ProductPage />} /> */}
        </Route>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/rating" element={<StarRating/>} />
        <Route path="/scrolling" element={<InfiniteScroll/>} />
        <Route path="/api" element={<ApiCall/>} />
        <Route path="/accordian" element={<Accordian/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/slider" element={<ImageSlider/>} />
        <Route path="/light" element={<TrafficLight/>} />
        <Route path="/pagination" element={<Pagination/>} />
        <Route path="/sheet" element={<GoogleSheet/>} />
        <Route path="/folder" element={<FolderStructure/>} />
        <Route path="/letters" element={<Letters/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
