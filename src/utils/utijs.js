async function getTokenJSON() {
    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    );
    const token = await response.json();
    return token;
}

async function sendUserData(token, formData) {
    // Send data to the backend via POST
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {

        method: 'POST',
        body: formData,
        headers: {
            'Token': token.token
        }
    })
}

export async function postUser(positions, nameUser, emailUser, phonelUser, file) {

    var formData = new FormData();

    formData.append('position_id', Number(positions));
    formData.append('name', nameUser);
    formData.append('email', emailUser);
    formData.append('phone', phonelUser);
    formData.append('photo', file);

    const token = await getTokenJSON();

    await sendUserData(token, formData);
}