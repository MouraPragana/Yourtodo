import "twin.macro";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { StyledParagraph, StyledSpan } from "./styles";

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
        <StyledSpan>
          Projeto:&nbsp;
          <StyledParagraph dataFinalizacao={dataFinalizacao}>
            {projeto}
          </StyledParagraph>
        </StyledSpan>

        <StyledSpan>
          Descrição:&nbsp;
          <StyledParagraph dataFinalizacao={dataFinalizacao}>
            {descricao}
          </StyledParagraph>
        </StyledSpan>

        <StyledSpan>
          Status:&nbsp;
          <StyledParagraph dataFinalizacao={dataFinalizacao}>
            {status}
          </StyledParagraph>
        </StyledSpan>

        <div tw="lg:flex hidden flex-row space-x-2.5 pt-4">
          <BsTrash
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToAdd(id)}
          />
          {status === "Em andamento" ? (
            <AiOutlineCheckCircle
              size={22}
              tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
              onClick={() => onClickToGetDone(id)}
            />
          ) : (
            <VscDebugRestart
              size={22}
              tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
              onClick={() => onClickToRestart(id)}
            />
          )}
        </div>
      </div>

      <div tw="lg:w-1/3 w-full text-right  flex flex-col">
        <StyledSpan>
          Criado:&nbsp;
          <StyledParagraph dataFinalizacao={dataFinalizacao}>
            {dataCriacao}
          </StyledParagraph>
        </StyledSpan>

        <StyledSpan>
          Previsto:&nbsp;
          <StyledParagraph dataFinalizacao={dataFinalizacao}>
            {dataPrevisao}
          </StyledParagraph>
        </StyledSpan>

        {dataFinalizacao && (
          <StyledSpan tw="block">
            Finalizado:&nbsp; <p tw="inline font-normal">{dataFinalizacao}</p>
          </StyledSpan>
        )}

        <div tw="lg:hidden flex w-full border-t-2 border-gray-500 mt-6"></div>
        <div tw="flex w-full lg:hidden justify-start space-x-2 pt-6">
          <BsTrash
            size={22}
            tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
            onClick={() => onClickToAdd(id)}
          />
          {status === "Em andamento" ? (
            <AiOutlineCheckCircle
              size={22}
              tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
              onClick={() => onClickToGetDone(id)}
            />
          ) : (
            <VscDebugRestart
              size={22}
              tw="hover:text-blue-800 hover:scale-105 cursor-pointer"
              onClick={() => onClickToRestart(id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { CardYourTodo };
