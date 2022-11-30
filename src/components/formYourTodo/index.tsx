import { Button, TextField } from "@mui/material";
import "twin.macro";
import { muiConfig } from "./MuiConfig";
import { FormContainer } from "./styles";

const FormYourTodo: React.FC = () => {
  return (
    <FormContainer tw="flex flex-col space-y-3.5">
      <TextField id="projeto" label="Projeto" variant="filled" sx={muiConfig} />
      <TextField
        id="descricao"
        label="Descrição"
        variant="filled"
        sx={muiConfig}
      />
      <TextField
        id="dataPrevisao"
        label="Data previsão"
        variant="filled"
        type="date"
        defaultValue={"2022-11-29"}
        sx={muiConfig}
      />
      <Button sx={{ py: 1.25 }} variant="contained">
        Cadastrar Projeto
      </Button>
    </FormContainer>
  );
};

export { FormYourTodo };
