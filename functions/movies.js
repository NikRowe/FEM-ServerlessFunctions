const movies = require('../data/movies.json')

exports.handler = async () => {
    return{
        statusCode: 200,
        body: JSON.stringify(movies), // Takes JSON Obj{} and converts to Str for parsing. // 
    }
}