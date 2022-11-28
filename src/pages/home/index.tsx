import "twin.macro";
import { CardYourTodo } from "../../components/cardYourTodo";

const Home: React.FC = () => {
  return (
    <div tw="min-h-screen w-full bg-gray-800">
      <div tw="flex flex-col space-y-4 min-h-screen lg:w-[876px] w-[85%] bg-gray-700 mx-auto text-center py-8 px-4 shadow-lg rounded">
        <div tw="mb-8">
          <h1 tw="text-white font-bold text-4xl">Welcome to YourTodo</h1>
          <span tw="text-white text-[small] italic">
            Aqui você faz a gestão de suas atividades !
          </span>
        </div>
        <CardYourTodo />
        <CardYourTodo />
      </div>
    </div>
  );
};

export { Home };
