// App.js or any other component
import React, { useEffect } from 'react';
import { authenticate, makeAuthenticatedRequest } from './src/services/token'; // Adjust the path as necessary
import AppContainer from './src/routes';

const App = () => {
  useEffect(() => {
    authenticate("marteinnn", "Fiskur121");
  }, []);

  // You can now call `makeAuthenticatedRequest` wherever you need to perform an authenticated API call
  // ...

  return (
    <AppContainer />
  );
};

export default App;



