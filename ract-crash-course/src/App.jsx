import { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
   
  return (
   <>
   <Header onCreatePost={showModalHandler}/>
    <main>
     <PostList  isPosting={modalIsVisible}  onStopPosting={hideModalHandler}/>  
    </main>
   </>
  );
}

export default App;
