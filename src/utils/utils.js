
async function getTokenJSON() {

    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    );
    const token = await response.json();
    return token;
};

export async function sendUserData(token, formData) {

    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {

        method: 'POST',
        body: formData,
        headers: {
            'Token': token.token
        },
    })

    const result = await response.json();

    return result;
};

export async function postUser(positions, nameUser, emailUser, phonelUser, file) {

    const formData = new FormData();

    formData.append('position_id', Number(positions));
    formData.append('name', nameUser);
    formData.append('email', emailUser);
    formData.append('phone', phonelUser);
    formData.append('photo', file);

    const token = await getTokenJSON();

    const resultPost = await sendUserData(token, formData);

    return resultPost;
};

export async function fetchUserJSON(page) {

    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );

    const result = await response.json();
    
    return result;
};
