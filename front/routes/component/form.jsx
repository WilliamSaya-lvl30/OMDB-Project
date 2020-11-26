import React from 'react'
import {Form,Button,Alert,Spinner} from 'react-bootstrap'


export default ({hanledEmailinput,hanledPasswordinput,hanledSumit,email,password, formTitle, isLoading})=>{

  const emailChange = e => {
    hanledEmailinput(e.target.value);
  };

  const passwordChange = e => {
    hanledPasswordinput(e.target.value);
  };
    return(
        <Form onSubmit={(e)=>hanledSumit(e)}>
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
                We'll never share your email with anyone else... 
                Unless they pay me
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
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="APROBÉ...?" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {isLoading && 
            <Alert variant='success'>
            Cargando... 
            <Spinner animation="border" variant="info" className={'spiner'}/>
            </Alert>}
        </Form>
    )
}