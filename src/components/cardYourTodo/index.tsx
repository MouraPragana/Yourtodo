import "twin.macro";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";

const CardYourTodo: React.FC = () => {
  return (
    <div tw="flex lg:flex-row flex-col bg-blue-100 lg:w-10/12 w-full rounded min-h-[fit-content] mx-auto p-4 lg:gap-0 gap-2">
      <div tw="lg:w-1/2 w-full text-left flex flex-col space-y-4">
        <span tw="block">
          Projeto: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsam voluptatum quasi vitae ad, at id recusandae fugit a voluptate
          necessitatibus, quae aspernatur harum cum non est soluta repellendus
          tempore veniam.
        </span>
        <span tw="block">
          Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Veniam qui expedita exercitationem maiores perspiciatis repellat hic
          aperiam porro. Voluptatibus reprehenderit ut ex alias exercitationem
          temporibus illum nulla corporis commodi sint.
        </span>
        <span tw="block">Em andamento</span>
        <div tw="lg:flex hidden flex-row space-x-2.5 pt-4">
          <BsTrash size={22} />
          <AiOutlineCheckCircle size={22} />
          <VscDebugRestart size={22} />
        </div>
      </div>
      <div tw="lg:w-1/2 w-full text-right  flex flex-col">
        <span tw="block">Criado: 28/11</span>
        <span tw="block">Previsto: 29/11</span>
        <span tw="block">Finalizado: 30/11</span>
        <div tw="lg:hidden flex w-full border-t-2 border-gray-500 mt-6"></div>
        <div tw="flex w-full lg:hidden justify-between pt-6">
          <BsTrash size={22} />
          <AiOutlineCheckCircle size={22} />
          <VscDebugRestart size={22} />
        </div>
      </div>
    </div>
  );
};

export { CardYourTodo };
