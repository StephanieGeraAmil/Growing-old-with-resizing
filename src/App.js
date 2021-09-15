

import './App.css';
import { Avatar } from './components/Avatar';
import { Message } from './components/Message';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="main">   
          <Avatar/>
          <Message/>
      </div>
      <p className="display-linebreak">{`*Resizing your window  too see changes the clothes and accessories of the avatar.
            *The avatar age is based on whether your window is big, medium, or small.`}</p> 
    </GlobalProvider>
  );
}

export default App;
