import { format } from "date-fns";
import { useSnackbar } from "notistack";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    "@YourTodo",
    ""
  );
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [yourTodoList, setYourTodoList] =
    useState<IYourTodo[]>(localStorageValue);

  useEffect(() => {
    setLocalStorageValue(JSON.stringify(yourTodoList));
  }, [yourTodoList]);

  const addToYourTodoList = (data: IYourTodo) => {
    enqueueSnackbar("YourTodo cadastrado com sucesso", {
      variant: "success",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    setYourTodoList((state) => [...state, data]);
  };

  const removeYourTodo = (id: string) => {
    enqueueSnackbar("YourTodo removido com sucesso.", {
      variant: "error",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const newYourTodoList = yourTodoList.filter((todo) => todo.id !== id);
    setYourTodoList(newYourTodoList);
  };

  const getYourTodoDone = (id: string) => {
    enqueueSnackbar("YourTodo encerrado com sucesso.", {
      variant: "info",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const yourNewTodoList: IYourTodo[] = yourTodoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            dataFinalizacao: format(new Date(), "dd/MM/yyyy"),
            status: "Concluído",
          }
        : todo
    );
    setYourTodoList(yourNewTodoList);
  };

  const restartYourTodo = (id: string) => {
    enqueueSnackbar("YourTodo em andamento com sucesso.", {
      variant: "info",
      anchorOrigin: {
        horizontal: "center",
        vertical: "bottom",
      },
    });
    const yourNewTodoList: IYourTodo[] = yourTodoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            dataFinalizacao: "",
            status: "Em andamento",
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
