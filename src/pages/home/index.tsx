import "twin.macro";
import { CardYourTodo } from "../../components/cardYourTodo";
import { FormYourTodo } from "../../components/formYourTodo";

const Home: React.FC = () => {
  return (
    <div tw="min-h-screen w-full bg-gray-800">
      <div tw="flex flex-col space-y-4 min-h-screen lg:w-[876px] w-[85%] bg-gray-700 mx-auto text-center py-8 px-4 shadow-lg rounded">
        <div>
          <h1 tw="text-white font-bold text-4xl">Welcome to YourTodo</h1>
          <span tw="text-white text-[small] italic">
            Aqui você faz a gestão de suas atividades !
          </span>
        </div>
        <form tw="flex flex-col lg:w-10/12 w-full mx-auto space-y-2">
          <FormYourTodo />
        </form>
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
      </div>
    </div>
  );
};

export { Home };
