
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import{useState} from 'react';
import{nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header'
function App() {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text:"This is my first Note",
    date:"15/04/2021"
    },
    {
      id: nanoid(),
      text:"This is my Second Note",
      date:"21/04/2021"
    },
    {
      id: nanoid(),
      text:"This is my third  Note",
      date:"28 /04/2021"
    }


  ]);

  const [searchText,setSearchText] = useState(' ');
  const [darkMode,setDarkMode]=useState(false);


  const addNote =(text)=>{
    const date = new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date: date.toLocaleDateString()
    };
    const newNotes =[...notes, newNote];
    setNotes(newNotes);
  };  
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id !==id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>

        <>

        <Navbar/>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <div className='container'>
          <TodoList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
        </div>



        </>
    </div>
    
   
  );
}

export default App
