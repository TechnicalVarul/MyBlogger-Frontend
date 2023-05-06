import React, { useEffect } from 'react';
import { FaCode, FaInfoCircle, FaPhoneAlt, FaRegGem, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import {NavLink as ReactLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button} from 'reactstrap';
import { doLogout, getCurrentUserDetails, isLoggedIn } from '../Auth';
import {getAllCat} from '../Services/CatService';

  const CustomNavbar = () => {
    
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const [login,setLogin] = useState(false);
    const [user,setUser] = useState(undefined);

    useEffect(()=>{
        setLogin(isLoggedIn());
        setUser(getCurrentUserDetails());
    },[login])

    const logout =() =>
    {
        doLogout(()=>{
            setLogin(false);
            navigate('/login');

        });
    }


    const [cat,setCat] = useState([]);

    useEffect(()=>{
        getAllCat().then((data)=>{
            console.log(data);
            setCat(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])


    return (
        <div >
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                className="px-3"
            >
                <NavbarBrand tag={ReactLink} to="/">
                    <FaRegGem /> MyBlogs
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Categories
                            </DropdownToggle>
                            <DropdownMenu right>
                            
                                {
                                    cat.map((category)=>(
                                        <DropdownItem tag={ReactLink} to="/services">
                                            {category.catTitle}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" >
                                <FaInfoCircle /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/contact" >
                                <FaPhoneAlt /> Contact Us
                            </NavLink>
                        </NavItem>


                    </Nav>


                    <Nav navbar>

                        {
                            login && (
                                <>
                                    <NavLink tag={ReactLink} to="/login" >
                                       <h5 className='py-2'> <FaUserAlt /> {user.email} </h5> 
                                    </NavLink>

                                    <NavLink >
                                    <Button color='info' onClick={logout} outline>Logout</Button>
                                    </NavLink>

                                </>
                                
                            )
                        }

{
                            !login && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/login" >
                                            <Button color='info' outline>Login</Button>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/signup" >
                                        <Button color='warning' outline>Signup</Button>
                                        </NavLink>
                                    </NavItem>
                                </>
                                
                            )
                        }

                        
                        
                    </Nav>





                </Collapse>
            </Navbar>
        </div>

    )
}

export default CustomNavbar;