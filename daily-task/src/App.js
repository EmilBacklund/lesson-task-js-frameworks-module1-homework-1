import './App.css';
import ProfileName from './components/ProfileName';
import DefaultProfilePic from './components/DefaultProfilePic';

function App() {
  return (
    <div className='App'>
      <ProfileName name='Ahmed' />
      <DefaultProfilePic />
    </div>
  );
}

export default App;
