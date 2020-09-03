import styled from 'styled-components';

export const Container = styled.form`
  background: #fff;
  margin: 0 0 30px;
  padding: 20px 35px;
  filter: drop-shadow(0 0px 10px rgba(0,0,0,0.15));
  border-radius: 10px;

  label {
    font-size: 19px;
    display: flex;
    align-items: center;
    margin: 0 0 10px;  
    line-height: 1;
    padding: 6px 15px;
    letter-spacing: 0.2px;

    background: #fff;
    padding: 6px 15px;
    margin: -40px 0 15px;
    width: max-content;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media screen and (max-width: 767px) {
      font-size: 15px;
    }

    strong {
      font-weight: bold;
      margin: 0 3px;
    }

    &:after, &:before {
      content: '';
      flex: 1;
      background: #fefefe;
      height: 1px;
    }
    &:after {
      margin-left: 10px;
    }
    &:before {
      margin-right: 10px;
    }
  }

  input {
    border: 1px solid #a9aab3;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    display: block;
    transition: .25s ease;

    &:focus {
      border-color: #6c7ae0;
    }

    color: #808080;
    padding: 0 15px;
    font-size: 14px;
    letter-spacing: 0.2px;
    &::placeholder {
      color: #808080;
      opacity: 1;
      font-style: italic;
    }
  }
`;
