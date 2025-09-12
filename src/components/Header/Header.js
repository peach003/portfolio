import Link from 'next/link';
import React from 'react';
import { FaRocket } from "react-icons/fa";
import { Container, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () => (
  <Container>
    {/* 左侧 Logo */}
    <Div1>
      <Link href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <FaRocket
            size="3rem"
            color="#63a2e9ff"
            style={{ marginBottom: "-4px" }}
          />
          <span style={{ marginLeft: "8px", fontSize: "2.5rem" }}>Lynn</span>
        </a>
      </Link>
    </Div1>

    {/* 右侧菜单 */}
    <Div2>
      <li>
        <Link href="#Home" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;



