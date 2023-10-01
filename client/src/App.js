
import './App.css';
import Post from "./post";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <main>
      <Routes>
        <Route index element={ 
        <main>
         
         <Header/>
         <Post/>
         <Post/>
         <Post/>
         </main>
        } />
        <Route path={'/login'} element={
          <div>login</div>

        } />
      </Routes>
     
     

    </main>
  );

  
}

export default App;
