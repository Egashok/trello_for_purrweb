import { useState } from 'react';
import './App.css';
import UserForm from './UI/UserForm';
import Board from './components/Board';


function App() {







  const [visible, setVisible] = useState(true)

  return (
    <div className="App">
      {visible
        ? <UserForm
          visible={visible}
          setVisible={setVisible}
        />

        :
        <Board />
      }
    </div>
  );
}

export default App;
