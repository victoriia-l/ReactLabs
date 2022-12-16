import { Button } from '@mui/material';
import { Outlet, Link } from "react-router-dom"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export default function Header() {
    const Navbar = styled('div')({
        backgroundColor: "#333",
        overflow: "hidden",
    });

    return (
        <Container>
            <Navbar>
                <Link to={`/`}><Button sx={{ color: "#f2f2f2", padding: "14px 16px", fontSize: "17px" }}>Home</Button></Link>
                <Link to={`/categories`}><Button sx={{ color: "#f2f2f2", padding: "14px 16px", fontSize: "17px" }}>Categories</Button></Link>
            </Navbar>
            <div id="detail">
                <Outlet />
            </div>
        </Container>
    )
}