import StarRating from "./components/StarRating";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ProtectedRoute from "./HOC/ProtectedRoute";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import InfiniteScroll from "./components/InfiniteScroll";
// import InfiniteScrollIO from "./components/InfiniteScrollIO";
import Accordian from "./components/Accordian";
import Comment from "./components/Comment";
import ImageSlider from "./components/ImageSlider";
import TrafficLight from "./components/TrafficLight";
import Pagination from "./components/pagination/Pagination";
import GoogleSheet from "./components/GoogleSheet";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/rating" element={<StarRating/>} />
        <Route path="/scrolling" element={<InfiniteScroll/>} />
        <Route path="/accordian" element={<Accordian/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/slider" element={<ImageSlider/>} />
        <Route path="/light" element={<TrafficLight/>} />
        <Route path="/pagination" element={<Pagination/>} />
        <Route path="/sheet" element={<GoogleSheet/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
