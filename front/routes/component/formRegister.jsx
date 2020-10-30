import React from 'react'
import {Form,Button,Alert} from 'react-bootstrap'


export default ({hanledEmailinput,hanledPasswordinput,hanledSumit,email,password, formTitle,hanledImginput,hanledNickinput,nick,imgProfile,message})=>{

  const emailChange = e => {
    hanledEmailinput(e.target.value);
  };

  const passwordChange = e => {
    hanledPasswordinput(e.target.value);
  };

  const imgChange = e => {
    hanledImginput(e.target.value);
  };

  const nickChange = e => {
    hanledNickinput(e.target.value);
  };



  
    return(
        <Form 
        onSubmit={(e)=>{hanledSumit(e)}}>
            <h2>{formTitle}</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e)=>emailChange(e)}
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e)=>passwordChange(e)} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Nick</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nick" 
                    value={nick}
                    onChange={(e)=>nickChange(e)} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Img Profile</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Img Profile" 
                    value={imgProfile}
                    onChange={(e)=>imgChange(e)} 
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Acepto los terminos y condicione y bla bla bla" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
                {message && <Alert  variant="success">
                    User created successfully, now you can enjoy this amazing page even more...
                </Alert>}
            
        </Form>
    )
}