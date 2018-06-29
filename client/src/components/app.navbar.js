import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
   state = {
       isOpen: false
    }
    
    toggle =()=>{
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    render(){
        return( 
        <div>
            <Navbar color="dark" dark expand="sm" className ="mb-5" >
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/Martin-Stankard" target="_blank">
                                    Github
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/martin-p-stankard/" target="_blank">
                                    LinkedIn
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>);
    }
}



export default AppNavbar;