import { format } from "date-fns";
import { createContext, ReactNode, useContext, useState } from "react";

interface IYourTodo {
  id: string;
  projeto: string;
  descricao: string;
  status: "Pausado" | "Em andamento" | "Concluído";
  dataCriacao: string;
  dataPrevisao: string;
  dataFinalizacao?: string;
}

interface IYourTodoContext {
  yourTodoList: IYourTodo[];
  addToYourTodoList: (data: IYourTodo) => void;
  removeYourTodo: (id: string) => void;
  getYourTodoDone: (id: string) => void;
  restartYourTodo: (id: string) => void;
}

interface YourTodoContextProviderProps {
  children: ReactNode;
}

const YourTodoContext = createContext({} as IYourTodoContext);

export const YourTodoContextProvider = ({
  children,
}: YourTodoContextProviderProps) => {
  const [yourTodoList, setYourTodoList] = useState<IYourTodo[]>([]);

  const addToYourTodoList = (data: IYourTodo) => {
    setYourTodoList((state) => [...state, data]);
  };

  const removeYourTodo = (id: string) => {
    const newYourTodoList = yourTodoList.filter((todo) => todo.id !== id);
    setYourTodoList(newYourTodoList);
  };

  const getYourTodoDone = (id: string) => {
    const yourNewTodoList = yourTodoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            dataFinalizacao: format(new Date(), "dd/MM/yyyy"),
          }
        : todo
    );
    setYourTodoList(yourNewTodoList);
  };

  const restartYourTodo = (id: string) => {
    const yourNewTodoList = yourTodoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            dataFinalizacao: "",
          }
        : todo
    );
    setYourTodoList(yourNewTodoList);
  };

  return (
    <YourTodoContext.Provider
      value={{
        yourTodoList,
        addToYourTodoList,
        removeYourTodo,
        getYourTodoDone,
        restartYourTodo,
      }}
    >
      {children}
    </YourTodoContext.Provider>
  );
};

export const useYourTodoContext = () => {
  return useContext(YourTodoContext);
};
