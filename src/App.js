import React, { useState } from "react";
import { GlobalStyles } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          element={
            <HomePage
              theme={theme}
            />
          }
          path="/"
          exact={true}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
