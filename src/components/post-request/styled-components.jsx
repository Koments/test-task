import styled from "@emotion/styled";

export const PostRequestStyles = styled.div`
  width: 328px;
  margin: 0 16px;

  @media (min-width: 361px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
  };
`;

export const PostTitle = styled.h2`
  text-align: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 704px;
    text-align: center;
    margin: 0 16px;
  };
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
  };
`;
export const PersonalInfoContailer = styled.div`
  color: #7e7e7e;
`;

export const InputContainer = styled.div`
  margin-top: 50px;
  position: relative;
`;

export const InfoInput = styled.input`
  width: 296px;
  height: 24px;
  padding: 14px 15px;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  background: #f8f8f8;

  @media (min-width: 768px) and (max-width: 2559px) {
    width: 348px;
  };

  @media (min-width: 2560px) {
    width: 350px;
  };
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelPhone = styled.label`
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0 0 20px;
`;
export const PositionContainer = styled.div`
  width: 328px;

  @media (min-width: 768px) {
    width: 380px;
  };
`;

export const PositionTitle = styled.div`
  margin: 25px 0 10px;
`;

export const RadioBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 7px;

  input {
    width: 20px;
    height: 20px;
    accent-color: rgba(0, 160, 211, 1);
    border: 1px solid #00bdd3;
    margin-right: 12px;
  };
`;

export const UploadFilesContainer = styled.div`
  width: 326px;
  height: 52px;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  background-color: #f8f8f8;
  display: flex;
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 2559px) {
    width: 378px;
  };

  @media (min-width: 2560px) {
    width: 380px;
  };
`;

export const UploadBtnContainer = styled.div`
  border: 1px solid #000;
  opacity: 0.87;
  border-radius: 4px 0px 0px 4px;
  width: 91px;
  height: 52px;
  position: relative;
  margin: -1px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 81px;
  };

  @media (min-width: 2560px) {
    width: 80px;
  };
`;

export const UploadLabel = styled.label`
  width: 5px;
  height: 25px;
  padding: 13px 14px;
  position: absolute;
  z-index: 1;
  text-align: center;
`;

export const UploadBtn = styled.input`
  width: 100%;
  height: 54px;
  position: absolute;
  visibility: hidden;
  z-index: 1;
`;

export const UploadFileName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  width: 245px;
  color: #7e7e7e;
  margin: 13px 10px 13px 17px;
`;

export const PostBtn = styled.button`
  color: #fff;
  background-color: #b4b4b4;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  cursor: pointer;
`;

export const PostBtnContainer = styled.div`
  margin: 50px 0 100px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  };

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  };
`;

export const SuccessPost = styled.img`
  display: flex;
  justify-content: center;
  margin: 50px auto;
`;

export const ErrorInfo = styled.div`
  position: absolute;
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0 0 20px;
`;
