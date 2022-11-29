import { TextField } from "@mui/material";
import "twin.macro";

const FormYourTodo: React.FC = () => {
  return (
    <>
      <TextField
        id="projeto"
        label="Projeto"
        variant="filled"
        sx={{
          "& .MuiFormLabel-root": {
            color: "white !important",
          },
          "& .MuiFormLabel-root:focus": {
            color: "white !important",
          },
          "& .MuiInputBase-input": {
            borderBottom: "1px solid white !important",
            color: "white !important",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "white !important",
          },
          "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before":
            {
              borderBottom: "1px solid white !important",
            },
        }}
      />
      <TextField
        id="descricao"
        label="Descrição"
        variant="filled"
        sx={{
          "& .MuiFormLabel-root": {
            color: "white !important",
          },
          "& .MuiFormLabel-root:focus": {
            color: "white !important",
          },
          "& .MuiInputBase-input": {
            borderBottom: "1px solid white !important",
            color: "white !important",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "white !important",
          },
          "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before":
            {
              borderBottom: "1px solid white !important",
            },
        }}
      />
      <TextField
        id="dataPrevisao"
        label="Data previsão"
        variant="filled"
        sx={{
          "& .MuiFormLabel-root": {
            color: "white !important",
          },
          "& .MuiFormLabel-root:focus": {
            color: "white !important",
          },
          "& .MuiInputBase-input": {
            borderBottom: "1px solid white !important",
            color: "white !important",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "white !important",
          },
          "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before":
            {
              borderBottom: "1px solid white !important",
            },
        }}
      />
    </>
  );
};

export { FormYourTodo };
