const api_url = "https://developer.nps.gov/api/v1/places"

const params = new URLSearchParams({
    limit: 10,
    api_key: process.env.NPS_API_KEY
})

// video 12, 1:24:09

exports.handler = async (event, context) => {
    const park_code = event.queryStringParameters.park_code
    // http://localhost:8888/.netlify/functions/hello?park_code=[park_code]

    try {
        const response = await fetch(`${api_url}?${params}`, {
            headers: {
                Accept: "application/json"
            },
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: response.statusText
            }
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ err: err.message })
        };
    }




}
