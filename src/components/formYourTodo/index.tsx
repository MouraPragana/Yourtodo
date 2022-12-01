import { Button, TextField } from "@mui/material";
import "twin.macro";
import { muiConfig } from "./MuiConfig";
import { FormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

const FormYourTodo: React.FC = () => {
  const { register } = useFormContext();
  return (
    <FormContainer tw="flex flex-col space-y-3.5">
      <TextField
        id="projeto"
        label="Projeto"
        variant="filled"
        sx={muiConfig}
        {...register("projeto")}
        autoComplete="off"
      />
      <TextField
        id="descricao"
        label="Descrição"
        variant="filled"
        sx={muiConfig}
        {...register("descricaoProjeto")}
        autoComplete="off"
      />
      <TextField
        id="dataPrevisao"
        label="Data previsão"
        variant="filled"
        type="date"
        defaultValue={"2022-11-29"}
        sx={muiConfig}
        {...register("dataPrevisao")}
        autoComplete="off"
      />
      <Button sx={{ py: 1.25 }} variant="contained" type="submit">
        Cadastrar Projeto
      </Button>
    </FormContainer>
  );
};

export { FormYourTodo };
