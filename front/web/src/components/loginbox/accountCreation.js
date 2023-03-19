import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { COLOR } from '../../utils';
import * as cleanUp from "../../utils/authClean";

const AccountCreationForm = React.memo(({ setCreating }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const  msgRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(
          "https://soundgasm.herokuapp.com/?controllers=auth&method=POST&action=inscription&email="+email+"&password="+password+"&name="+name+"&birthday=12/02/2022",
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if(!data.response.Inscription) {
              msgRef.current.style.display = 'block';
              setTimeout(() => {
                msgRef.current.style.display = 'none';
              }, 3000);
            } else setTimeout(()=>setCreating(false), 1000);
            console.log(data)
        })
        .catch((err) => console.log(err));
        
        
        // Handle account creation logic
    };

    return (
        <LoginContainer>
            <Title>Créeé votre compte</Title>
            <LoginWrapper>
                <LoginForm onSubmit={handleSubmit} method="POST">
                    <Label>
                        Nom: <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </Label>
                    <Label>
                        Prénom: <Input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
                    </Label>
                    <Label>
                        Email: <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Label>
                    <Label>
                        Téléphone: <Input type="tel" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
                    </Label>
                    <Label>
                        Mot de passe: <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Label>
                    <Span ref={msgRef}>Une erreur s'est produite. Reéssayez !</Span>
                    <Button type="submit">Creer compte</Button>
                </LoginForm>
            </LoginWrapper>
        </LoginContainer>
    );
})

export default AccountCreationForm;

const Title = styled.p`
    font-weight: 900;
    font-family: Teko;
    font-size: 28px;
    color: white;
`;

const LoginContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 100px;
  bottom: 100px;
  top: 100px;
  right: 100px;
`;

const LoginWrapper = styled.div`
  min-width: 500px;
  min-height: 500px;
  width: 80%;
  height: 70%;
  padding: 0 20px 0 0;
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

const Label = styled.label`
  color: ${COLOR.text};
  font-size: 18px;
  width: 100%;
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

const Span = styled.span`
  color: red;
  font-size: 16px;
  display: none;
  transition: 0.2s ease-out;
`;