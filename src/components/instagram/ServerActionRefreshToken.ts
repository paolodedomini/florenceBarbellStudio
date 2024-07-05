

export default async function tokenUpdate(
    oldToken: string,
    clientId: string,
    clientSecret: string
) {
    'use server';
    if (!oldToken || !clientId || !clientSecret) {
        console.error("Missing required parameters");
    }
    console.log("Access token renewed:");
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&client_secret=${clientSecret}&refresh_token=${oldToken}`


    try {
        const response = await fetch(url);
        console.log(response, "response");
        if (!response.ok) {
            throw new Error(
                `Failed to renew access token: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();

        return data.access_token;
    } catch (error) {
        console.error("Error renewing access token:", error);
        return null;
    }
}



