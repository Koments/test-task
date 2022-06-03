import styled from "@emotion/styled";

export const PostRequestStyles = styled.div`
  width: 328px;
  margin: 0 16px;

  .upload-btn {
    width: 83px;
    height: 54px;
    position: absolute;
    visibility: hidden;
    z-index: 1;
  };

  @media (min-width: 361px) {
    width: 100%;
  };
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PersonalInfoContailer = styled.div`
  color: #7e7e7e;
`;

export const InputContainer = styled.div`
  margin: 50px 0;

  input {
    width: 288px;
    padding: 14px 20px;
    border: 1px solid #d0cfcf;
    border-radius: 4px;
    background: #f8f8f8;
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

export const PositionTitle = styled.div`
  margin: 25px 0 11px;
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
  width: 328px;
  height: 54px;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  background-color: #f8f8f8;
  display: flex;
  margin-top: 50px;
`;

export const UploadBtn = styled.div`
  border: 1px solid #000;
  opacity: 0.87;
  border-radius: 4px 0px 0px 4px;
  width: 97px;
  height: 54px;
  position: relative;
  margin: -1px;
`;

export const UploadLabel = styled.label`
  width: 53px;
  height: 25px;
  padding: 14px 15px;
  position: absolute;
  z-index: 1;
  text-align: center;
`;

export const UploadFileName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  width: 245px;
  color: #7e7e7e;
  padding: 16px 14px;
`;

export const PostBtn = styled.button`
  color: #fff;
  background-color: #b4b4b4;
  margin: 50px 0 100px;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  border: none;
  cursor: pointer;
`;

export const PostBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
