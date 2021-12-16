import React, { useState, FC, createContext, useContext } from 'react';

type Page = 'inbox' | 'null';

const createAppHooks = () => {
  const useAppState = () => {
    const [page, setPage] = useState<Page>('inbox');
    const contextValue = {
      actions: {
        goTo: (page: Page) => {
          setPage(page);
        },
      },
    };
    const AppProvider: FC = ({ children }) => {
      return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
      );
    };

    return { page, AppProvider };
  };
  type Actions = {
    goTo: (page: Page) => void;
  };
  type ContextValueType = {
    actions: Actions;
  };

  const Context = createContext<ContextValueType>({
    actions: undefined as unknown as Actions,
  });

  const useActions = () => {
    const { actions } = useContext(Context);
    return actions;
  };

  return { useAppState, useActions };
};

export const { useAppState, useActions } = createAppHooks();
