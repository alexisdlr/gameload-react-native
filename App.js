import { GamesProvider } from './context/GamesProvider';
import Main from './components/Main';
import { AuthContextProvider } from './context/AuthProvider';

export default function App() {
  return (
    <GamesProvider>
      <AuthContextProvider >
        <Main />
      </AuthContextProvider>
    </GamesProvider>

  );
}
