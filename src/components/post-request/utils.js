
export async function positionJSON() {
    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
    );

    const result = await response.json();

    return result;
};