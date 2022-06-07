import { useState, useEffect } from 'react';
import { ActivBtn, Container, Header, HeaderContainer, HeaderIcon, LogoIcon, HeaderBtnContainer, Main, BannerContainer, Banner } from './styled-components';
import { GetRequest } from '../get-request/index';
import { PostRequest } from '../post-request/index';
import { fetchUserJSON } from '../../utils/utils';

export function App() {
    const [result, setResult] = useState({});
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        fetchUserJSON(1).then((result) => {
            setResult(result);
        });
    }, []);

    return (
        <Container>
            <Header>
                <HeaderContainer>
                    <HeaderIcon>
                        <LogoIcon  src='icons/Logo.svg' alt="logo" />
                    </HeaderIcon>
                    <HeaderBtnContainer>
                        <ActivBtn>Users</ActivBtn>
                        <ActivBtn>Sign up</ActivBtn>
                    </HeaderBtnContainer>
                </HeaderContainer>
            </Header>
            <Main>
                <BannerContainer>
                    <Banner>
                        <h1>Test assignment for front-end developer</h1>
                        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                        <ActivBtn>Sign up</ActivBtn>
                    </Banner>
                </BannerContainer>
                <GetRequest result={result} nextPage={async () => {
                    
                    const newPage = page + 1;
                    setPage(newPage);
                    const result = await fetchUserJSON(newPage);
                    setResult(result);
                }} />
                <PostRequest onSuccess={async () => {

                    const result = await fetchUserJSON(1);
                    setResult(result);
                }} />
            </Main>
        </Container>
    )
}