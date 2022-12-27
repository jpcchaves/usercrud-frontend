import * as Yup from 'yup';

export const UserValidation = Yup.object().shape({
  name: Yup.string().max(12, "O nome pode ter no máximo 12 caracteres.").matches(/^[A-Z]+(.)*/, "A primeira letra do nome precisa ser maiúscula").required("O nome é obrigatório!"),
  username: Yup.string().matches(/^[A-Z]+(.)*/, "A primeira letra do nome precisa ser maiúscula").max(12, "O nome de usuário pode ter no máximo 12 caracteres.").required("O nome de usuário é obrigatório!"),
  email: Yup.string().email("Insira um email válido!").required("O email é obrigatório!"),
})
