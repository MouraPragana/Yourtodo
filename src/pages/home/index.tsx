import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, startOfDay } from "date-fns";
import { FormProvider, useForm } from "react-hook-form";
import "twin.macro";
import * as zod from "zod";
import { CardYourTodo } from "../../components/cardYourTodo";
import { FormYourTodo } from "../../components/formYourTodo";
import { NoYourTodo } from "../../components/noYourTodo";
import { useYourTodoContext } from "../../contexts/yourTodoContext";
import { v4 as uuidv4 } from "uuid";

interface IYourTodo {
  id: string;
  projeto: string;
  descricao: string;
  status: "Pausado" | "Em andamento" | "Concluído";
  dataCriacao: string;
  dataPrevisao: string;
  dataFinalizacao?: string;
}

const Home: React.FC = () => {
  const {
    addToYourTodoList,
    yourTodoList,
    removeYourTodo,
    getYourTodoDone,
    restartYourTodo,
  } = useYourTodoContext();

  const newYourTodoValidationSchema = zod.object({
    projeto: zod.string().min(1, "Escreva um nome de projeto válido"),
    descricaoProjeto: zod.string().min(1, "Escreva uma descrição válida"),
    dataPrevisao: zod
      .string()
      .min(10, "Selecione uma data de previsão completa"),
  });

  type newYourTodoFormData = zod.infer<typeof newYourTodoValidationSchema>;

  const newYourTodoForm = useForm<newYourTodoFormData>({
    resolver: zodResolver(newYourTodoValidationSchema),
    defaultValues: {
      projeto: "",
      descricaoProjeto: "",
    },
  });

  const { handleSubmit } = newYourTodoForm;

  const handleAddNewYourTodo = (data: newYourTodoFormData) => {
    const newYourTodoToAdd: IYourTodo = {
      id: uuidv4(),
      projeto: data.projeto,
      descricao: data.descricaoProjeto,
      status: "Em andamento",
      dataCriacao: format(new Date(), "dd/MM/yyyy"),
      dataPrevisao: format(
        startOfDay(addDays(new Date(data.dataPrevisao), 1)),
        "dd/MM/yyyy"
      ),
      dataFinalizacao: "",
    };
    addToYourTodoList(newYourTodoToAdd);
  };

  const handleRemoveYourTodo = (id: string) => {
    removeYourTodo(id);
  };

  const error = (error: any) => {
    console.log(error);
  };

  return (
    <div tw="min-h-screen w-full bg-gray-800">
      <div tw="h-full flex flex-col space-y-6 min-h-screen lg:w-[876px] w-[85%] bg-gray-700 mx-auto text-center py-8 px-4 shadow-lg rounded">
        <div>
          <h1 tw="text-white font-bold text-4xl">Welcome to YourTodo</h1>
          <span tw="text-white text-[small] italic">
            Aqui você faz a gestão de suas atividades !
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleAddNewYourTodo, error)}
          tw="lg:w-10/12 w-full mx-auto"
        >
          <FormProvider {...newYourTodoForm}>
            <FormYourTodo />
          </FormProvider>
        </form>
        {yourTodoList.length === 0 ? (
          <NoYourTodo />
        ) : (
          <div tw="space-y-3">
            {yourTodoList?.map((yourTodo) => {
              return (
                <CardYourTodo
                  id={yourTodo.id}
                  key={yourTodo.id}
                  projeto={yourTodo.projeto}
                  descricao={yourTodo.descricao}
                  status={yourTodo.status}
                  dataCriacao={yourTodo.dataCriacao}
                  dataPrevisao={yourTodo.dataPrevisao}
                  dataFinalizacao={yourTodo.dataFinalizacao}
                  onClickToAdd={handleRemoveYourTodo}
                  onClickToGetDone={getYourTodoDone}
                  onClickToRestart={restartYourTodo}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { Home };
