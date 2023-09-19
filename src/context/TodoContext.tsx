import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

export interface Todo {
  id: number;
  name: string;
  age: number;
  employment: boolean;
  subscription: string;
}

type Theme = 'light' | 'dark';

interface TodoContextType {
  todos: Todo[];
  theme: Theme;
  addTodo: (
    name: string,
    age: number,
    employment: boolean,
    subscription: string
  ) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: () => void;
  getIdToDelete: (id: number) => void;
  toggleTheme: () => void;
  age: number;
  setAge: (age: number) => void;
  name: string;
  setName: (name: string) => void;
  employed: boolean;
  setEmployed: (employed: boolean) => void;
  subscription: string;
  setSubscription: (subscription: string) => void;
  isSave: boolean;
  saveEditedTodo: (
    name: string,
    age: number,
    employment: boolean,
    subscription: string
  ) => void;
  setEdit: () => void;
  idForDel: number | null;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(18);
  const [employed, setEmployed] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<string>('subscribed');
  const [idForDel, setIdForDel] = useState<null | number>(null);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('current-theme');
    if (currentTheme) {
      setTheme(currentTheme as Theme);
    } else {
      localStorage.setItem('current-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('theme', theme);
  }, [todos, theme]);

  const addTodo = (
    name: string,
    age: number,
    employment: boolean,
    subscription: string
  ) => {
    setTodos([
      ...todos,
      { id: Date.now(), age, name, employment, subscription },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, employment: !todo.employment } : todo
      )
    );
  };

  const saveEditedTodo = (
    name: string,
    age: number,
    employment: boolean,
    subscription: string
  ) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === idForDel
          ? { ...todo, name, age, employment, subscription }
          : todo
      )
    );
    setIsSave(false);
    setIdForDel(null);
    setName('');
    setAge(1);
    setSubscription('subscribed');
    setEmployed(false);
  };

  const getIdToDelete = (id: number) => {
    setIdForDel(id);
  };

  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idForDel));
    setIdForDel(null);
    setIsSave(false);
  };

  const setEdit = () => {
    const todoToEdit = todos.find((todo) => todo.id === idForDel);
    if (todoToEdit) {
      setName(todoToEdit.name);
      setAge(todoToEdit.age);
      setSubscription(todoToEdit.subscription);
      setEmployed(todoToEdit.employment);
      setIsSave(true);
      setIdForDel(idForDel);
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('current-theme', newTheme);
      return newTheme;
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        theme,
        addTodo,
        toggleTodo,
        deleteTodo,
        getIdToDelete,
        toggleTheme,
        name,
        setName,
        age,
        setAge,
        employed,
        setEmployed,
        subscription,
        setSubscription,
        saveEditedTodo,
        isSave,
        setEdit,
        idForDel,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('Error With TodoProvider');
  }
  return context;
};
