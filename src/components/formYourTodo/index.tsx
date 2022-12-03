import { Button, TextField } from "@mui/material";
import "twin.macro";
import { muiConfig } from "./MuiConfig";
import { FormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { format } from "date-fns";

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
        defaultValue={format(new Date(), "yyyy-MM-dd")}
        sx={muiConfig}
        {...register("dataPrevisao")}
        inputProps={{ min: format(new Date(), "yyyy-MM-dd") }}
        autoComplete="off"
        onKeyPress={(e) => {
          e.preventDefault();
        }}
      />
      <Button sx={{ py: 1.25 }} variant="contained" type="submit">
        Cadastrar YourTodo
      </Button>
    </FormContainer>
  );
};

export { FormYourTodo };
