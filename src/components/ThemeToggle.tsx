import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { ToggleSlider, ToggleSwitch } from '../ThemeStyles';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTodoContext();

  return (
      <ToggleSwitch onClick={toggleTheme}>
        <ToggleSlider />
      </ToggleSwitch>
  );
};

export default ThemeToggle;
