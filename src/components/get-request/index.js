import { useEffect, useState } from 'react';

import { ActivBtn, DisableBtn } from '../app/styled-components';
import { GetRequestStyles, UsersContainer, UserCard, Icon, UserName, TextClipping, PagesBtn } from './styled-components';

export function GetRequest() {

    const [result, setResult] = useState([]);
    const [page, SetPage] = useState(1);

    async function fetchUserJSON() {
        const response = await fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
        );
        const result = await response.json();
        return result;
    }

    useEffect(() => {
        fetchUserJSON().then((result) => {
            setResult(result)
        });
    }, [page]);


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
                <PagesBtn>{page + 1 <= result.total_pages ? <ActivBtn onClick={() => SetPage(page + 1)}>Show more</ActivBtn> : <DisableBtn >Show more</DisableBtn>}</PagesBtn>
            </GetRequestStyles>
        )
    }
}