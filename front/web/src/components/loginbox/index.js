import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../utils';
import { initaliseList } from '../reader/list';
import AccountCreationForm from './accountCreation';

export const LoginBox = (props) => {
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const msgRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const url = `https://soundgasm.herokuapp.com?controllers=auth&method=GET&email=${email}&password=${password}&log=IN`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if(data.response.logIn){
              const token = data.response.TOKEN;
              props.setAuthToken(token);
              localStorage.setItem("authToken", token);
              localStorage.setItem("userName", email.split('@')[0]);
              initaliseList();
              console.log("UserName: "+email.split('@')[0]);
              console.log("Authtoken: "+token);
            } else throw new Error("Authentification failed");
          })
          .catch(error => {
            console.error(error);
            msgRef.current.style.display = 'block';
            setTimeout(() => {
              msgRef.current.style.display = 'none';
            }, 3000);
          });
          
    };

  return (
    (!isCreating) ? 
    <LoginContainer>
      <Title>Login</Title>
      <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Label>Entrez votre identifiant (email)</Label>
        <Input
          type="text"
          placeholder="User Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Label>Entrez le mot de passe</Label>
        <Input
          // type={showPassword ? "text" : "password"}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Span ref={msgRef}>Email ou mot de passe invalide. Reéssayez !</Span>
        <Button type="submit">Connecter</Button>
        <Link href="#">Mot de passe oublié ?</Link>
        <Link href="#" onClick={()=>setIsCreating(true)}>Aucun compte ? Inscription</Link>
      </LoginForm>
    </LoginWrapper>
    </LoginContainer>
    : <AccountCreationForm setCreating={setIsCreating} />
    
  );

}

const Title = styled.p`
    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginWrapper = styled.div`
  width: 500px;
  height: 350px;
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
  margin-top: 30px;
  background-color: ${COLOR.secondary};
  color: ${COLOR.darkAlt};
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: ${COLOR.primary};
    color: ${COLOR.text};
    transition: 0.2s ease-out;
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
    transition: 0.2s ease-out;
  }
`;

const Span = styled.span`
  color: red;
  font-size: 16px;
  display: none;
  transition: 0.2s ease-out;
`;

