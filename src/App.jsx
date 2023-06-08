import Questions from './components/questions';
import './styles/app.css';

function App() {

  return (
    <main className='App'>
      <img className='top-image' src="/img1.png" alt="" />
      <img className='bottom-image' src="/img2.png" alt="" />
      <Questions />
    </main>
  )
}

export default App
