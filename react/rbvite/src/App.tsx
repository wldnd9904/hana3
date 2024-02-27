// src/App.tsx
import My from "./components/My";
import "./App.css";
import { SessionProvider } from "./contexts/session-context";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Home from "./components/Home";
import DeferTrans from "./components/DeferTrans";
import PostItem from "./components/PostItem";
import PostLayout from "./components/PostsLayout";
import PostDetail from "./components/PostDetail";

function App() {
  console.log("rerender");
  return (
    <SessionProvider>
      <Nav />
      <div id="App">
        <span className="title">App</span>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my" element={<My />} />
          <Route path="/posts" element={<PostLayout />}>
            <Route index />
            <Route path=":id" element={<PostDetail />} />
          </Route>

          <Route path="/post">
            <Route index element={<Posts />} />
            <Route path=":id" element={<PostItem />} />
          </Route>
          <Route path="/items" element={<My />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/defertrans" element={<DeferTrans />} />
        </Routes>
      </div>
    </SessionProvider>
  );
}

export default App;
