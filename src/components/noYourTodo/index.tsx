import "twin.macro";

const NoYourTodo: React.FC = () => {
  return (
    <div>
      <h1 tw="text-gray-200 font-bold text-3xl m-0 p-0 h-full">
        404 - Nenhum YourTodo Cadastrado
      </h1>

      <span tw="text-gray-200 italic m-0 p-0">
        Cadastre logo a sua primeira YourTodo no formulário acima.
      </span>
    </div>
  );
};

export { NoYourTodo };
