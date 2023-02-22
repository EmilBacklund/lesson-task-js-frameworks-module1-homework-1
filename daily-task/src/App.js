import './App.css';
import ProfileName from './components/ProfileName';
import DefaultProfilePic from './components/DefaultProfilePic';
import Person from './components/Person';
import Button from './components/Button';

function App() {
  return (
    <div className='App'>
      <ProfileName name='Ahmed' />
      <DefaultProfilePic />
      <Person firstName='Sarah' lastName='Johnson' city='Orlando' />
      <Person firstName='Mick' lastName='Swagger' city='Los Angeles' />
      <Button />
    </div>
  );
}

export default App;
