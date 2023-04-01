import './App.css'
import Header from './componets/Header/Header'
import Blogs from './componets/Blogs/Blogs';
import Question from './componets/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Blogs></Blogs>
      <Question></Question>
    </div>
  )
}

export default App
