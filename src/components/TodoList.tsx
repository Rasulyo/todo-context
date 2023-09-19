import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import {
  AddBlock,
  Button,
  Checkbox,
  FirstBlock,
  Input,
  List,
  Option,
  Select,
  StyledTable,
  StyledTableBody,
} from '../ThemeStyles';
import ThemeToggle from './ThemeToggle';

const TodoList: React.FC = () => {
  const {
    todos,
    deleteTodo,
    name,
    setName,
    age,
    setAge,
    employed,
    setEmployed,
    subscription,
    saveEditedTodo,
    isSave,
    setSubscription,
    getIdToDelete,
    setEdit,
    idForDel,
  } = useTodoContext();

  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (name.trim() !== '') {
      addTodo(name, age, employed, subscription);
      setName('');
      setAge(1);
      setEmployed(false);
      setSubscription('');
    }
  };
  const handleSaveTodo = () => {
    if (name.trim() !== '') {
      saveEditedTodo(name, age, employed, subscription);
      setName('');
      setAge(1);
      setEmployed(false);
      setSubscription('');
    }
  };

  return (
    <List>
      <AddBlock>
        <FirstBlock>
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <label>
            <Checkbox
              type='checkbox'
              checked={employed}
              onChange={() => setEmployed(!employed)}
            />
            Employed
          </label>
          <Select
            value={subscription}
            onChange={(e) => setSubscription(e.target.value)}
          >
            <Option value='subscribed'>Subscribed</Option>
            <Option value='Not Subscribed'>Not Subscribed</Option>
            <Option value='Other'>Other</Option>
          </Select>

          {idForDel && <Button onClick={setEdit}>Edit</Button>}
          {isSave ? (
            <Button onClick={handleSaveTodo}>Save</Button>
          ) : (
            <Button onClick={handleAddTodo}>Insert</Button>
          )}
        </FirstBlock>

        <ThemeToggle />
        <Button onClick={deleteTodo}>Delete</Button>
      </AddBlock>
      <>
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Subscription</th>
              <th>Employment</th>
            </tr>
          </thead>
          <StyledTableBody>
            {todos.map((todo) => (
              <tr key={todo.id} onClick={() => getIdToDelete(todo.id)}>
                <td>{todo.name}</td>
                <td>{todo.age}</td>
                <td>{todo.subscription}</td>
                <td>{todo.employment ? 'Employed' : 'Unemployed'}</td>
              </tr>
            ))}
          </StyledTableBody>
        </StyledTable>
      </>
    </List>
  );
};

export default TodoList;
