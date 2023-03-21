import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { COLOR } from '../../utils';
import * as cleanUp from "../../utils/authClean";

const AccountCreationForm = React.memo(({ setCreating }) => {
    const { register,handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const  msgRef = useRef(null);
    const onSubmit = (event) => {
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
                <LoginForm onSubmit={(event)=>handleSubmit(onSubmit(event))} method="POST">
                    <Label>
                        Nom: <Input type="text" {...register("name", {
                              required: "le nom est requis",
                              pattern: {
                                value: /^[A-Z0-9._%+-]{2,}$/i,
                                message: "Nom Invalide",
                              },
                            })} value={name} onChange={(event) => setName(event.target.value)} />
                    </Label>
                    {errors.name && <Span>{errors.name.message}</Span>}
                    <Label>
                        Prénom: <Input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
                    </Label>
                    <Label>
                        Email: <Input type="email" {...register("email", {
                              required: "l'email est requis",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Adresse Email invalide",
                              },
                            })} value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Label>
                    {errors.email && <Span>{errors.email.message}</Span>}
                    <Label>
                        Téléphone: <Input type="tel" value={telephone} onChange={(event) => setTelephone(event.target.value)} />
                    </Label>
                    <Label>
                        Mot de passe: <Input type="password" {...register("password", {
                              required: "mot de passe requis",
                              pattern: {
                                value: /^[A-Z0-9._%+-]{8,}$/i,
                                message: "au moins 8 characteres ",
                              },
                            })}value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Label>
                    {errors.password && <Span>{errors.password.message}</Span>}
                    <Error ref={msgRef}>Une erreur s'est produite. Reéssayez !</Error>
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
const Span = styled.span`
    font-weight: 200;
    font-family: Teko;
    font-size: 12px;
    color: orange;
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

const Error = styled.span`
  color: red;
  font-size: 16px;
  display: none;
  transition: 0.2s ease-out;
`;