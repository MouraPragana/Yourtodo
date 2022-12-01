import "twin.macro";

const NoYourTodo: React.FC = () => {
  return (
    <div tw="w-full">
      <h1 tw="text-gray-200 font-bold lg:text-3xl text-lg lg:m-0 lg:p-0 p-2 h-full">
        404 - Nenhum YourTodo Cadastrado
      </h1>

      <span tw="text-gray-200 italic lg:m-0 lg:p-0 lg:text-base text-[smaller]">
        Cadastre logo a sua primeira YourTodo no formulário acima.
      </span>
    </div>
  );
};

export { NoYourTodo };
