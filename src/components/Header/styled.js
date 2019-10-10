import styled from 'styled-components';
import media from 'styled-media-query';
import * as V from 'styles/variables';

export const Container = styled.header.attrs({ role: 'header' })`
  width: 350px;
  padding: 5px;
  background-color: ${V.Color.darkBlue};
  border-right: 5px solid ${V.Color.pinkRedNeon};
  color: #f0f0f0;

  ${media.between('small', 'large')`
    width: 100%;
    border-right: 0;
    border-bottom: 5px solid ${V.Color.pinkRedNeon};
    margin: 10px;
  `}
  ${media.lessThan('small')`
    background-color: black;
    border-right: 0;
    border-bottom: 3px solid $pink-red-neon;
    display: block;
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100%;
    z-index: 5;

    div {
      display: flex;
      flex-direction: row;
    }
  `}
`;

/* 


@media (max-width: 460px) {
  .container {
    background-color: black;
    border-right: 0;
    border-bottom: 3px solid $pink-red-neon;
    display: block;
    left: 0px;
    position: fixed;
    right: 0px;

    top: 0px;
    width: 100%;
    z-index: 5;

    div {
      display: flex;
      flex-direction: row;
    }
    .profile-card {
      display: flex;
      justify-content: center;
      align-items: center;
      .profile-pic {
        width: 2.5rem;
        height: 2.5rem;
      }
      h1 {
        margin-left: 10px;
        font-size: 1em;
        margin-bottom: 0.3em;
        font-weight: 500;
      }
      h3 {
        visibility: hidden;
        display: none;
      }
      .description {
        visibility: hidden;
        display: none;
      }
    }
  }
  .nav {
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    li {
      margin-right: 10px;
      margin-bottom: 0;
      font-weight: 500;
      text-align: center;
      svg {
        visibility: hidden;
        display: none;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .social-list {
    visibility: hidden;
    display: none;
    width: 0;
  }
}


*/
