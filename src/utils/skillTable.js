import React from 'react';
import ReactIcon from 'assets/ReactIcon.svg';
import JavascriptIcon from 'assets/JavascriptIcon.svg';
import NodeIcon from 'assets/NodeIcon.svg';
import ExpressIcon from 'assets/ExpressIcon.svg';
import ReduxIcon from 'assets/ReduxIcon.svg';
import VueIcon from 'assets/VueIcon.svg';
import GatsbyIcon from 'assets/GatsbyIcon.svg';
import Aws from 'assets/Aws.svg';
import Git from 'assets/Git.svg';
import Netlify from 'assets/Netlify.svg';
import Adobexd from 'assets/Adobexd.svg';
import Photoshop from 'assets/Photoshop.svg';
import Digitalocean from 'assets/Digitalocean.svg';
import Ilustrator from 'assets/Ilustrator.svg';
import Sass from 'assets/Sass.svg';
import Docker from 'assets/Docker.svg';
import Csharp from 'assets/Csharp.svg';
import Python from 'assets/Python.svg';

const webServicesSpecial = ['AWS', 'NETLIFY', 'DIGITALOCEAN'];
const webDevSpecial = [
  ...webServicesSpecial,
  'REACT',
  'JAVASCRIPT',
  'NODE',
  'EXPRESS',
  'REDUX',
  'VUE',
  'GATSBY',
  'SASS',
  'GIT',
  'PHOTOSHOP',
  'ILUSTRATOR',
  'ADOBEXD',
];
const fullStackSpecial = [...webDevSpecial, 'PYTHON', 'DOCKER', 'TDD', 'C#'];

const skillTable = {
  FULLSTACK: { isActive: false, special: [...fullStackSpecial] },
  TI: { isActive: false, special: [...fullStackSpecial, 'DATA SCIENCE'] },
  REACT: { isActive: false, icon: <ReactIcon />, special: null },
  JAVASCRIPT: { isActive: false, icon: <JavascriptIcon />, special: null },
  NODE: { isActive: false, icon: <NodeIcon />, special: null },
  EXPRESS: { isActive: false, icon: <ExpressIcon />, special: null },
  REDUX: { isActive: false, icon: <ReduxIcon />, special: null },
  VUE: { isActive: false, icon: <VueIcon />, special: null },
  GATSBY: { isActive: false, icon: <GatsbyIcon />, special: null },
  SASS: { isActive: false, icon: <Sass />, special: null },
  AWS: { isActive: false, icon: <Aws />, special: null },
  NETLIFY: { isActive: false, icon: <Netlify />, special: null },
  GIT: { isActive: false, icon: <Git />, special: null },
  DIGITALOCEAN: { isActive: false, icon: <Digitalocean />, special: null },
  PHOTOSHOP: { isActive: false, icon: <Photoshop />, special: null },
  ILUSTRATOR: { isActive: false, icon: <Ilustrator />, special: null },
  ADOBEXD: { isActive: false, icon: <Adobexd />, special: null },
  WEBDEV: { isActive: false, icon: '', special: [...webDevSpecial] },
  PYTHON: { isActive: false, icon: <Python />, special: null },
  'C#': { isActive: false, icon: <Csharp />, special: null },
  DOCKER: { isActive: false, icon: <Docker />, special: null },
  WEBSERVICES: {
    isActive: false,
    icon: '',
    special: [...webServicesSpecial],
  },
  TDD: { isActive: false, icon: '', special: null },
  'DATA SCIENCE': { isActive: false, icon: '', special: null },
};
export default skillTable;
