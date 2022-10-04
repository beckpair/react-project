import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, SignIn } from './components'
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { theme } from './Theme/themes';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth'
import { firebaseConfig } from './firebaseConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home title = {'The Tarot Project'}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element = {<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);


reportWebVitals();
