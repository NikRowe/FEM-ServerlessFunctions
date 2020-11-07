/* async used so we don't have to use a CallBack we can just return something --- the serverless f() needs to know how to handle incoming requests which it does that by calling a f() called handler, so we are customizing the handler */
exports.handler = async () => {
    return {
        statusCode: 200,
        body: 'Boop!',
    }
}