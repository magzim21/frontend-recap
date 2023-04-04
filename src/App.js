import './App.css';
import InputForm from './Components/InputForm';
import NewStory from './Components/NewStory';
import SavedStories from './Components/SavedStories';

function App() {
  return (
    <div className="App">
      <InputForm />
      <NewStory />
      <SavedStories /> 
    </div>
  );
}

export default App;
