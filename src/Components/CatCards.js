import React, { useEffect, useState } from 'react'
import { getAllCat } from '../Services/CatService';
import { CardLink,CardBody,ListGroupItem,ListGroup,CardText,CardTitle,Card,Button,CardSubtitle,CardImg, Container, Row, Col } from 'reactstrap';

const CatCards=()=> {

    const [cat,setCat] = useState([]);

    useEffect(()=>{
        getAllCat().then(data=>{
            setCat(data);
        }).catch(error=>{
            console.log(error);
        })
    })

  return (
    <Container className='mt-5'>
        <Row>
            {
                cat.map(category=>(
                    <Col xs='4'>
                        <Card className='mt-2'>
                            <CardImg
                            alt="Card image cap"
                            src=""
                            top
                            width="100%"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                {category.catTitle}
                            </CardTitle>
                            
                            <CardText>
                                {category.catDiscription}
                            </CardText>
                            <Button>
                                Button
                            </Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default CatCards;