import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Formstyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const BtnPhone = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #46adad;
  margin-top: 30px;
  padding: 5px 7px;

  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  display: flex;
  margin: 10px 0 5px 0;
`;

export const FieldInput = styled(Field)`
  border: none;
  padding: 5px;
  border-radius: 8px;
  width: 200px;
`;
export const ErrorText = styled.p`
  color: #af0f0f;
  width: 180px;
  font-size: 12px;
`;
