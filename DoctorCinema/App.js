// App.js or any other component
import React, { useEffect } from 'react';
import { authenticate, clearStorage } from './src/services/token'; // Adjust the path as necessary
import AppContainer from './src/routes';

const App = () => {
  useEffect(() => {
    clearStorage();
    authenticate("marteinnn", "Fiskur121");
  }, []);

  return (
    <AppContainer />
  );
};

export default App;



