import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  LoginText,
  Text,
  Wrapper,
  ErrorMessage,
} from "./styles";

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      await api.post("/users", formData);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (e) {
      console.error("Erro ao cadastrar usuário:", e);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora Gratis</TitleCadastro>
            <SubtitleCadastro>
              Crie sua Conta e make the change._
            </SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                {errors.nome && (
                  <ErrorMessage>{errors.nome.message}</ErrorMessage>
                )}
                <Input
                  placeholder="Nome Completo"
                  leftIcon={<MdPerson />}
                  name="nome"
                  control={control}
                />
              </div>
              <div>
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
                <Input
                  placeholder="E-mail"
                  leftIcon={<MdEmail />}
                  name="email"
                  control={control}
                />
              </div>
              <div>
                {errors.senha && (
                  <ErrorMessage>{errors.senha.message}</ErrorMessage>
                )}
                <Input
                  type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock />}
                  name="senha"
                  control={control}
                />
              </div>
              <Button
                title="Criar minha Conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Column>
              <Text>
                Já tenho Conta <LoginText>Fazer login</LoginText>
              </Text>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
