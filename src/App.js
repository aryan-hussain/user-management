
import './App.css';
import Header from './components/Header';
import ListAndForm from './components/ListAndForm';
import AddNewItem from './components/AddNewItem';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Setting from './components/Setting';
import Dashboard from './components/Dashboard';
import UserPost from './components/UserPost';
import UserComments from './components/UserComments'
import Demo from './components/Demo';

function App() {
  const [showAddSection, setShowAddSection] = useState(false);
  const showHide = (clicked) => {
    setShowAddSection(clicked);
  }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <ListAndForm showHide={showHide} />
          {showAddSection ? <AddNewItem showHide={showHide} /> : ""}
        </div>
        <Routes>
          <Route path="/setting" element={<Setting />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<UserPost />} />
          <Route path="/comments" element={<UserComments />} />
        </Routes>
        <Demo />
      </BrowserRouter>
    </>

  );
}

export default App;
