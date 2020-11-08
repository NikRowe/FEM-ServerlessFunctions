const movies = require('../data/movies.json')

// gets the movies data from the JSON file and exports endpiont //
exports.handler = async () => {
    return{
        statusCode: 200,
        body: JSON.stringify(movies), // Takes JSON Obj{} and converts to Str for parsing. // 
    }
}