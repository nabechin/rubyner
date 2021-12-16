import React, { FC, useContext, createContext, useState } from 'react';

const Context = createContext({ counter: () => {} });

const App: FC = () => {
  const { count, plusCount } = customState();
  const contextValue = {
    counter: () => plusCount(),
  };
  return (
    <Context.Provider value={contextValue}>
      <div>
        <button>{count}</button>
        <br />
        <Test />
        <br />
        <Test2 />
      </div>
    </Context.Provider>
  );
};

const Test = () => {
  const { counter } = useContext(Context);
  const { count } = customState();
  return <button onClick={counter}>{count}</button>;
};

const Test2 = () => {
  const { counter } = useContext(Context);
  const { count } = customState();
  return <button onClick={counter}>{count}</button>;
};

const customState = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount(count + 1);
  return { count, plusCount };
};
