import React from 'react';

interface ThemeProviderProps {
  colors: string[];
}

const contextDefaultValues: ThemeProviderProps = {
  colors: [],
};

export const ThemeContext =
  React.createContext<ThemeProviderProps>(contextDefaultValues);
