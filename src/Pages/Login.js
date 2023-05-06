import Base from "../Components/Base";
import { Card, CardBody, CardHeader, Col, Container, Form, Row, FormGroup, Label, Input, Button} from "reactstrap";
import { FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../Services/UserService";
import {doLogin} from "../Auth/index";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    let navigate = useNavigate();

    const [data,setData] = useState({
        username:'',
        password:''
    });

    const handleEvent = (event,field)=>{
        setData({...data,[field]:event.target.value});
    };

    const resetData = ()=>{
        setData({
            username:'',
            password:''
        });
    };

    const login = (event)=>{

        event.preventDefault();
        console.log("try to login");
        console.log(data.username+" "+data.password);

        if(data.username.trim() === ''){
            toast.error("Email is required!",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,    
                });
                return;
        }

        if(data.password.trim() === ''){
            toast.error("password is required!",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,    
                });
                return;
        }

        loginUser(data).then(resp=>{
            console.log("Token: ");
            console.log(resp);

            doLogin(resp,()=>{
                console.log("stored data...");
            });

            toast.success("Login Successfull...",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,    
                });
                navigate('/user/dashboard');
                return;
        }).catch(error=>{
            console.log(error);
            toast.error("Wrong Username or Password !",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,    
                });
                return;
        })
    }

    return(
        <Base>
            <Container className="mt-5">
                <Row >
                   <Col sm={{size:4, offset:4}}>
                        <Card>
                            <CardHeader className="text-center" style={{backgroundColor:"#212529"}}>
                                <h3 style={{color:"white"}}><FaUserCircle size={60} /><br /> Login</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={login}>
                                    
                                    <FormGroup row>
                                        <Label sm={4}>Email</Label>
                                        <Col sm={8}>
                                            <Input value={data.username} onChange={(e)=>handleEvent(e,'username')} type="email" name="email" id="email" placeholder="Enter Your Email..." />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={4}>Password</Label>
                                        <Col sm={8}>
                                            <Input value={data.password} onChange={(e)=>handleEvent(e,'password')} type="password" name="password" id="password" placeholder="Set a Password..." />
                                        </Col>
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="dark" type="submit">Login</Button>
                                        <Button onClick={resetData} outline color="warning" type="reset" className="ms-2">Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                   </Col>
                </Row>
            </Container>
        </Base>
    );
}

export default Login;