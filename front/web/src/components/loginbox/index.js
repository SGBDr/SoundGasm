import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';

export const LoginBox = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
    };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Label>Entrez votre identifiant</Label>
        <Input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Label>Entrez le mot de passe</Label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Submit</Button>
        <Link href="#">Forgotten Password</Link>
      </LoginForm>
    </LoginWrapper>
  );

}

const LoginWrapper = styled.div`
  width: 500px;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${COLOR.darkAlt};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80%;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const Label = styled.p`
  color: ${COLOR.text};
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${COLOR.secondary};
  color: ${COLOR.darkAlt};
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: ${COLOR.primary};
    color: ${COLOR.text};
  }
`;

const Link = styled.a`
  margin-top: 10px;
  color: ${COLOR.playButtonCard};
  text-decoration: none;
  font-size: 16px;
  &:hover{
    text-decoration: underline;
    color: ${COLOR.text};
  }
`;
