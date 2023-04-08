import "./App.css";
import InputForm from "./Components/InputForm";
import NewStory from "./Components/NewStory";
import SavedStories from "./Components/SavedStories";
import Wrapper from "./utils/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <div className="App">
          <InputForm />
          <NewStory />
          <SavedStories />
        </div>
      </Wrapper>
    </>
  );
}

export default App;
