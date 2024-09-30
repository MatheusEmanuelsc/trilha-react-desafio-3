import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`;

export const TitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleCadastro = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const LoginText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #23dd7a;
`;

export const Text = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  margin-top: 20px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;
