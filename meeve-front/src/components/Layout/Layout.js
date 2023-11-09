import React from "react";
import NavigationBar from "../../pages/NavigationBar.js";
import { ThemeProvider } from 'styled-components';
import meeveTheme from '../../style/meeveTheme.js'; 
import meeve from "../../assets/img/meeve-noir.png"
import contour from "../../assets/img/contour-logo.png"

function Layout({ children }) {
  return (
    <ThemeProvider theme={meeveTheme}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>    
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {children}
        </div>
        <NavigationBar />
      </div>
    </ThemeProvider>
  );
}

export default Layout;
