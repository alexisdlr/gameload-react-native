import { GamesProvider } from './context/GamesProvider';
import Main from './components/Main';

export default function App() {
  return (
    <GamesProvider>
        <Main />
    </GamesProvider>

  );
}
