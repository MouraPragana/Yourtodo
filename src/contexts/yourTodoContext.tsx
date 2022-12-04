import { format } from "date-fns";
import { useSnackbar } from "notistack";
import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IYourTodo {
  id: string;
  projeto: string;
  descricao: string;
  status: "Em andamento" | "Concluído";
  dataCriacao: string;
  dataPrevisao: string;
  dataFinalizacao?: string;
}

interface IYourTodoContext {
  localStorageYourTodoList: IYourTodo[];
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
  const [localStorageYourTodoList, setLocalStorageYourTodoList] =
    useLocalStorage("@YourTodoListProduction", []);
  const { enqueueSnackbar } = useSnackbar();

  const addToYourTodoList = (data: IYourTodo) => {
    enqueueSnackbar("YourTodo cadastrado com sucesso", {
      variant: "success",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    setLocalStorageYourTodoList((state: IYourTodo[]) => [...state, data]);
  };

  const removeYourTodo = (id: string) => {
    enqueueSnackbar("YourTodo removido com sucesso.", {
      variant: "error",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const newYourTodoList = localStorageYourTodoList.filter(
      (todo: IYourTodo) => todo.id !== id
    );
    setLocalStorageYourTodoList(newYourTodoList);
  };

  const getYourTodoDone = (id: string) => {
    enqueueSnackbar("YourTodo encerrado com sucesso.", {
      variant: "info",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const yourNewTodoList: IYourTodo[] = localStorageYourTodoList.map(
      (todo: IYourTodo) =>
        todo.id === id
          ? {
              ...todo,
              dataFinalizacao: format(new Date(), "dd/MM/yyyy"),
              status: "Concluído",
            }
          : todo
    );
    setLocalStorageYourTodoList(yourNewTodoList);
  };

  const restartYourTodo = (id: string) => {
    enqueueSnackbar("YourTodo em andamento com sucesso.", {
      variant: "info",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const yourNewTodoList: IYourTodo[] = localStorageYourTodoList.map(
      (todo: IYourTodo) =>
        todo.id === id
          ? {
              ...todo,
              dataFinalizacao: "",
              status: "Em andamento",
            }
          : todo
    );
    setLocalStorageYourTodoList(yourNewTodoList);
  };

  return (
    <YourTodoContext.Provider
      value={{
        localStorageYourTodoList,
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
