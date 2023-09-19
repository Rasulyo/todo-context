import React from 'react';
import TodoList from './components/TodoList';
import { ThemeContainer, TodoAppContainer } from './ThemeStyles';
import { TodoProvider, useTodoContext } from './context/TodoContext'; // Make sure the correct import path is used
import { ThemeProvider } from 'styled-components';
import { dark, light } from './components/themes';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
};

const AppContent: React.FC = () => {
  const { theme } = useTodoContext();

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <ThemeContainer>
        <TodoAppContainer>
          <TodoList />
        </TodoAppContainer>
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default App;
