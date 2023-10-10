import React from "react";
import NavegationBar from "./components/NavegatioBar";
import { ThemeProvider } from 'styled-components';
import meeveTheme from './style/meeveTheme.js'; 

function Layout({ children }) {
  return (
    <ThemeProvider theme={meeveTheme}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {children}
        </div>
        <NavegationBar />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
