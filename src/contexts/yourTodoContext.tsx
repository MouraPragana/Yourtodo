import { createContext, ReactNode, useContext, useState } from "react";

interface IYourTodo {
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

  return (
    <YourTodoContext.Provider value={{ yourTodoList, addToYourTodoList }}>
      {children}
    </YourTodoContext.Provider>
  );
};

export const useYourTodoContext = () => {
  return useContext(YourTodoContext);
};
