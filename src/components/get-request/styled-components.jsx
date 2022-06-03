import styled from "@emotion/styled";

export const GetRequestStyles = styled.div`
  margin: 140px 16px;

  h2 {
    margin-bottom: 50px;
  }

  @media (min-width: 361px) and (max-width: 768px) {
    margin: 140px 32px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 140px 32px;
  }

  @media (min-width: 1025px) {
    margin: 140px 0px;
  } ;
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const UsersContainer = styled.div`
  row-gap: 16px;
  column-gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 29px;
    column-gap: 29px;
  }

  @media (min-width: 1024px) {
    row-gap: 29px;
    column-gap: 29px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } ;
`;

export const UserCard = styled.div`
  width: 288px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 10px;
  white-space: pre;

  @media (min-width: 768px) and (max-width: 2559px) {
    width: 90%;
  }

  @media (min-width: 2560px) {
    margin: inherit;
    width: 330px;
  } ;
`;

export const UserName = styled.div`
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const TextClipping = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const PagesBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
