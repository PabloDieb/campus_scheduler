import { Container, Button, Form } from 'react-bootstrap';
import { auth, signInWithEmailAndPassword } from "../../Services/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/salas");
  }, [user, loading]);

  const tryLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    if(user === null){
      setErrorLogin(true);
    }
  
  }

  return(
    <Container style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "80%"}}>
      <h2>Cadastrar-se</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={() => tryLogIn()}>
          Submit
        </Button>
      {/* {errorLogin ? <p>Tentativa de Login inválida.</p> : null} */}
      </Form>
      <Form.Label style={{marginTop: "15px"}}>Já possui uma conta? <a href="/login">Entrar</a> </Form.Label>
    </Container>
  )
}