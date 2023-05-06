import { useState } from "react";
import { signup } from "../Services/UserService";
import { Card, CardBody, CardHeader, Col, Container, Form, Row, FormGroup, Label, Input, Button} from "reactstrap";
import Base from "../Components/Base";
import { toast } from "react-toastify";
import './style.css';
import { FaUserCircle } from 'react-icons/fa';

const Signup = () =>{

   const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        about:''
    });

    const [error,setError] = useState({
        errors:{},
        isError:false
    });

    const handleEvent = (event,field)=>{
        setData({...data,[field]:event.target.value});
    } 

    const resetData = ()=>{
        setData({
            name:'',
            email:'',
            password:'',
            about:''
        });
    };


    const submitForm = (event)=>{
        event.preventDefault();
        console.log("try to submit");

        // client side validation
        if(!(data.name.length>=3 && data.name.length<=100) || data.name.trim === '')
        {
            toast.error("Name must be minimum of 3 character and maximum of 100 characters!",{
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
        if(!(data.password.length>=5 && data.password.length<=100))
        {
            toast.error("Password must be minimum of 5 character and maximum of 100 characters!",{
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
        if(!(data.about.length>=20 && data.about.length<=100))
        {
            toast.error("About must be minimun of 20 characters and maximum of 100 characters !!",{
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
        
        // calling backend api
        signup(data).then((resp)=>{
            console.log(resp);
            console.log("success");
            toast.success("User added success",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }).catch((error)=>{
            console.log(error);
            console.log("Error");
            toast.error("Something went wrong !",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    };

    return(
        <Base>
            <Container className="mt-4">
                <Row >
                   <Col sm={{size:6, offset:3}}>
                        <Card>
                            <CardHeader className="text-center" style={{backgroundColor:"#212529"}}>
                                <h3 style={{color:"white"}}><FaUserCircle size={60} /><br /> Register</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitForm}>
                                    <FormGroup row>
                                        <Label sm={3}>Name</Label>
                                        <Col sm={9}>
                                            <Input value={data.name} onChange={(e)=>handleEvent(e,'name')} type="text" name="name" id="name" placeholder="Enter Your Name..." />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={3}>Email</Label>
                                        <Col sm={9}>
                                            <Input value={data.email} onChange={(e)=>handleEvent(e,'email')} type="email" name="email" id="email" placeholder="Enter Your Email..." />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={3}>Password</Label>
                                        <Col sm={9}>
                                            <Input value={data.password} onChange={(e)=>handleEvent(e,'password')} type="password" name="password" id="password" placeholder="Set a Password..." />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={3}>About</Label>
                                        <Col sm={9}>
                                            <Input value={data.about} onChange={(e)=>handleEvent(e,'about')} type="textarea" name="about" id="about" placeholder="Enter Something about yourself..." style={{height:"150px"}}/>
                                        </Col>
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button outline color="dark" type="submit">Submit</Button>
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

export default Signup;