import "twin.macro";
import { CardYourTodo } from "../../components/cardYourTodo";
import { FormYourTodo } from "../../components/formYourTodo";
import { NoYourTodo } from "../../components/noYourTodo";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const Home: React.FC = () => {
  const newYourTodoValidationSchema = zod.object({
    projeto: zod.string().min(1, "Escreva um nome de projeto válido"),
    descricaoProjeto: zod.string().min(1, "Escreva uma descrição válida"),
    dataPrevisão: zod
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

  return (
    <div tw="min-h-screen w-full bg-gray-800">
      <div tw="h-full flex flex-col space-y-6 min-h-screen lg:w-[876px] w-[85%] bg-gray-700 mx-auto text-center py-8 px-4 shadow-lg rounded">
        <div>
          <h1 tw="text-white font-bold text-4xl">Welcome to YourTodo</h1>
          <span tw="text-white text-[small] italic">
            Aqui você faz a gestão de suas atividades !
          </span>
        </div>
        <form tw="lg:w-10/12 w-full mx-auto">
          <FormYourTodo />
        </form>
        {/* <div tw="space-y-3">
          <CardYourTodo
            projeto="Migração do banco de Dados Protheus"
            descricao="Migração do banco para melhoria de performance"
            status="Em andamento"
            dataCriacao="29/11"
            dataPrevisao="30/11"
          />
          <CardYourTodo
            projeto="Migração do banco de Dados Protheus"
            descricao="Migração do banco para melhoria de performance"
            status="Pausado"
            dataCriacao="29/11"
            dataPrevisao="30/11"
            dataFinalizacao="31/11"
          />
          <CardYourTodo
            projeto="Migração do banco de Dados Protheus"
            descricao="Migração do banco para melhoria de performance"
            status="Pausado"
            dataCriacao="29/11"
            dataPrevisao="30/11"
            dataFinalizacao="31/11"
          />
          <CardYourTodo
            projeto="Migração do banco de Dados Protheus"
            descricao="Migração do banco para melhoria de performance"
            status="Pausado"
            dataCriacao="29/11"
            dataPrevisao="30/11"
            dataFinalizacao="31/11"
          />
        </div> */}
        <NoYourTodo />
      </div>
    </div>
  );
};

export { Home };
