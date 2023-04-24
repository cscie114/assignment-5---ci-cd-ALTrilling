export const handler = async (event, context) => {
    const park_code = event.queryStringParameters.park_code
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello World", park_code: park_code })
        }
}
