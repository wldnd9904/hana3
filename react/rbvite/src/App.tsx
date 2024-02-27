// src/App.tsx
import My from "./components/My";
import "./App.css";
import { SessionProvider } from "./contexts/session-context";
import Nav from "./Nav";

import { NotFound } from "./NotFound";
import DeferTrans from "./components/DeferTrans";
import Home from "./components/Home";
import Login from "./components/Login";
import PostDetail from "./components/Post/PostDetail";
import PostItem from "./components/Post/PostItem";
import Posts from "./components/Post/Posts";
import PostLayout from "./components/Post/PostsLayout";
import { Routes, Route } from "react-router-dom";
import ItemDetail from "./components/Item/ItemDetail";
import ItemLayout from "./components/Item/ItemLayout";
import Items from "./components/Item/Items";
import Items2 from "./components/Item2/Items2";
import ItemDetail2 from "./components/Item2/ItemDetail2";
import ItemLayout2 from "./components/Item2/ItemLayout2";

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
          <Route path="/items" element={<ItemLayout />}>
            <Route index element={<Items />} />
            <Route path=":id" element={<ItemDetail />} />
          </Route>

          <Route path="/items2" element={<ItemLayout2 />}>
            <Route index element={<Items2 />} />
            <Route path=":id" element={<ItemDetail2 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/defertrans" element={<DeferTrans />} />
        </Routes>
      </div>
    </SessionProvider>
  );
}

export default App;
