

import './App.css';
import { Avatar } from './components/Avatar';
import { Message } from './components/Message';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>

      <p className="display-linebreak">{`*Resizing your window changes the clothes and accessories of the avatar.
      *The avatar shown is based on whether your window is big, medium, or small.`}</p>
      <div className="main">
          <Avatar/>
          <Message/>
      </div>
    </GlobalProvider>
  );
}

export default App;
