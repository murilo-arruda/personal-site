import React from 'react';
import * as S from './styled';
import { Link } from 'gatsby';
import { User, BookOpen, Box } from 'react-feather';

const activeStyles = {
  color: 'grey',
};

const Navabar = () => (
  <S.Navbar>
    <li>
      <Link to="/about" activeStyle={activeStyles}>
        <User color="#ff2079" size={18} /> Sobre
      </Link>
    </li>
    <li>
      <Link to="/blog" activeStyle={activeStyles}>
        {' '}
        <BookOpen color="#ff2079" size={18} /> Blog
      </Link>
    </li>
    <li>
      <Link to="/projects" activeStyle={activeStyles}>
        <Box color="#ff2079" size={18} /> Projects
      </Link>
    </li>
  </S.Navbar>
);

export default Navabar;
