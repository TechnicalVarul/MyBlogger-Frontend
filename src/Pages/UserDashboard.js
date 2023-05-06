import Base from "../Components/Base";
import { Card, CardBody, CardHeader, Col, Container, Form, Row, FormGroup, Label, Input, Button,option} from "reactstrap";
import { useEffect, useRef, useState } from "react";
import {getAllCat} from '../Services/CatService';
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";


const UserDashboard = ()=>{

    const[cat,setCat] = useState([]);
    const [content,setContent] = useState('');
    const editor = useRef(null);
    const [post,setPost] = useState({
        title:'',
        categoryId:'',
        content:''
    });

    useEffect(()=>{
        getAllCat().then((data)=>{
            console.log(data);
            setCat(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const contentChanged = (data)=>{
        setPost({...post,'content':data});
    }

    const fieldChange = (event) =>{
        setPost({...post,[event.target.name]:event.target.value});
    }

    const addPost = (event)=>{
        event.preventDefault();
        // validation
        if(post.title.trim() === ''){
            toast.error("Title is Required!")
        }

        else if(post.categoryId === ''){
            toast.error("Please select Category!")
        }

        else if(post.content.trim() === ''){
            toast.error("Enter Somthing in Content!")
        }
        // submit to backend API
        
    }

    return(
        <Base>
        
            <Container className="mt-4">
                <Row >
                   <Col sm={{size:8, offset:2}}>
                        <Card>
                            <CardHeader className="text-center" style={{backgroundColor:"#212529"}}>
                                <h3 style={{color:"white"}}> What's in your mind ?</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={addPost}>
                                    <FormGroup row>
                                        <Label>Name</Label>
                                        <Col >
                                            <Input  onChange={fieldChange} type="text" name="title" id="title" value={post.title} placeholder="Enter title" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label>Category</Label>
                                        <Col>
                                            <Input onChange={fieldChange} defaultValue={0} type="select" name="categoryId" id="cat" >

                                                <option disabled value={0}>--SELECT CATEGORY</option>

                                                {
                                                    cat.map((category)=>(
                                                        <option value={category.catId}>{category.catTitle}</option>
                                                    ))
                                                }
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label >Content</Label>
                                        <Col >
                                            <JoditEditor 
                                            ref={editor}
                                            value={post.content}
                                            onChange={(newContent)=>contentChanged(newContent)}
                                             />
                                        </Col>
                                    </FormGroup>

                                    <Container className="text-center">
                                        <Button  outline color="dark" type="submit">Submit</Button>
                                        <Button  outline color="warning" type="reset" className="ms-2">Reset</Button>
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

export default UserDashboard;