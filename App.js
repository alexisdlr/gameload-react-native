import { GamesProvider } from './context/GamesProvider';

import Main from './components/Main';
import { NativeRouter, Route, Routes } from 'react-router-native';
import AuthView from './Screens/AuthView';

export default function App() {
  return (
    <GamesProvider>
      <NativeRouter>
      <Routes>
        <Route path='/auth' exact element={
                  <AuthView />
        }
        />
        <Route path='/' exact element={
                  <Main />
        }
        />
       
      </Routes>
      </NativeRouter>
    </GamesProvider>

  );
}
