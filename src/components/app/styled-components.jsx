import styled from "@emotion/styled";

export const Container = styled.div`
  width: 360px;
  
  p {
    margin: 21px 0 32px;
  };

  @media (min-width: 361px) {
    width: 100%;
  };
`;
export const Header = styled.div`
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (min-width: 361px) and (max-width: 768px) {
    padding: 0 32px;
  };

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 60px;
  };

  @media (min-width: 1170px) {
    padding: 0;
    width: 1170px;
    margin: 0 auto;
  };
`;

export const HeaderIcon = styled.div`
  width: 104px;
  height: 26px;
`;

export const LogoIcon = styled.img``;
  

export const HeaderBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
`;

export const BannerContainer = styled.div`
  height: 500px;
  width: 100%;
  margin: 0 auto;
  background-image: url("icons/banner.jpg");
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  background-position: 50% 73.3%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 650px;
  } ;
`;

export const Banner = styled.div`
  z-index: 1;
  padding: 40px 16px 71px;

  @media (min-width: 768px) {
    width: 380px;
    padding: 72px 16px 71px;
  };
`;

export const Main = styled.main`
  font-size: 16px;
  line-height: 26px;

  background-color: #f8f8f8;
  @media (min-width: 1170px) {
    width: 1170px;
    margin: 0 auto;
  };
`;

export const ActivBtn = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffe302;
  };
`;
