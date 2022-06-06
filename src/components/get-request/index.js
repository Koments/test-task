import { GetRequestStyles, UsersContainer, UserCard, Icon, UserName, TextClipping, PagesBtn, NextPageBtn, DisableBtn  } from './styled-components';

export function GetRequest(props) {

    const { result } = props;

    if (result.page !== undefined) {

        const users = result.users;

        users.sort(function (x, y) {
            return x.registration_timestamp + y.registration_timestamp;
        });

        return (
            <GetRequestStyles>
                <h2>Working with GET request</h2>
                <div>
                    <UsersContainer>
                        {users.map((user, index) => (
                            <UserCard key={index}>
                                <Icon src={user.photo} alt='icon' />
                                <UserName >{user.name}</UserName>
                                <TextClipping >{user.position}</TextClipping>
                                <TextClipping>{user.email}</TextClipping>
                                <TextClipping >{user.phone}</TextClipping>
                            </UserCard>
                        ))}
                    </UsersContainer>
                </div>
                <PagesBtn>
                    {
                        result.page + 1 <= result.total_pages
                            ?
                            <NextPageBtn onClick={() => { props.nextPage() }}>Show more</NextPageBtn >
                            :
                            <DisableBtn >Show more</DisableBtn>
                    }
                </PagesBtn>
            </GetRequestStyles>
        )
    }
}