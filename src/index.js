import { Provider } from 'react-redux';
import { store } from './store';
import AppNavigator from './navigation';
import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.warn('Database failed to connect');
    console.warn(err.message);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

