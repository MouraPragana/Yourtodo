import "twin.macro";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";

interface ICardYourTodo {
  id: string;
  projeto: string;
  descricao: string;
  status: "Pausado" | "Em andamento" | "Concluído";
  dataCriacao: string;
  dataPrevisao: string;
  dataFinalizacao?: string;
  onClickToAdd: (id: string) => void;
  onClickToGetDone: (id: string) => void;
  onClickToRestart: (id: string) => void;
}

const CardYourTodo = ({
  id,
  projeto,
  descricao,
  status,
  dataCriacao,
  dataPrevisao,
  dataFinalizacao,
  onClickToAdd,
  onClickToGetDone,
  onClickToRestart,
}: ICardYourTodo) => {
  return (
    <div tw="flex lg:flex-row flex-col bg-blue-100 lg:w-10/12 w-full rounded min-h-[fit-content] mx-auto p-4 lg:gap-0 gap-2">
      <div tw="lg:w-2/3 w-full text-left flex flex-col space-y-2">
        <span tw="block">Projeto: {projeto}</span>
        <span tw="block">Descrição: {descricao}</span>
        <span tw="block">{status}</span>
        <div tw="lg:flex hidden flex-row space-x-2.5 pt-4">
          <BsTrash
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToAdd(id)}
          />
          <AiOutlineCheckCircle
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToGetDone(id)}
          />
          <VscDebugRestart
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToRestart(id)}
          />
        </div>
      </div>
      <div tw="lg:w-1/3 w-full text-right  flex flex-col">
        <span tw="block">Criado: {dataCriacao}</span>
        <span tw="block">Previsto: {dataPrevisao}</span>
        {dataFinalizacao && (
          <span tw="block">Finalizado: {dataFinalizacao}</span>
        )}
        <div tw="lg:hidden flex w-full border-t-2 border-gray-500 mt-6"></div>
        <div tw="flex w-full lg:hidden justify-between pt-6">
          <BsTrash
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToAdd(id)}
          />
          <AiOutlineCheckCircle
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToGetDone(id)}
          />
          <VscDebugRestart
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToRestart(id)}
          />
        </div>
      </div>
    </div>
  );
};

export { CardYourTodo };
