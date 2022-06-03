import { ActivBtn, Container, Header, HeaderContainer, HeaderIcon, HeaderBtnContainer, Main, BannerContainer, Banner } from './styled-components'
import { GetRequest } from '../get-request/index'
import { PostRequest } from '../post-request/index'

export function App() {

    return (
        <Container>
            <Header>
                <HeaderContainer>
                    <HeaderIcon><img src='icons/Logo.svg' alt="logo" /></HeaderIcon>
                    <HeaderBtnContainer>
                        <ActivBtn>Users</ActivBtn>
                        <ActivBtn>Sing up</ActivBtn>
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
                <GetRequest />
                <PostRequest />
            </Main>
        </Container>
    )
}