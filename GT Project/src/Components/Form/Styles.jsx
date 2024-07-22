import styled from "styled-components";
import { Link } from "react-router-dom";

export const SForm = styled.form`
  width: 100%;
  background-color: none;
  padding: 24 px;
`;

export const SFormTitle = styled.span`
  color: #c141f8;
  font-size: 48px;
  font-weight: 700;
`;

export const SFormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0px;
`;

export const SLable = styled.label`
  color: #666666;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const SInput = styled.input`
  outline: none;
  height: 40px;
  padding: 0px 20px;
  align-items: center;
  border-radius: 8px;
  background: #4a3b5f;
  color: #fff;
`;

export const SButton = styled.button`
  border-radius: 8px;
  background: #c141f8;
  height: 40px;
  padding: 0px 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 100%;

  &:hover {
    background: #8c07c5;
  }
`;

export const SRedirect = styled.div`
  font-size: 14px;
  width: 100%;
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 12px;
`;

export const SRedirectLabel = styled.span`
  color: #aaa;
`;

export const SRedirectLink = styled(Link)`
  color: #c141f8;
  font-weight: 600;
`;

export const STextArea = styled.textarea`
  outline: none;
  /* height: 40px; */
  padding: 0px 20px;
  align-items: center;
  border-radius: 8px;
  background: #4a3b5f;
  color: #fff;
  width: 100%;
  height: 100px;
`;
