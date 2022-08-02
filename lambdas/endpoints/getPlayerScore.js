const Responses = require('../common/API_RESPONSES');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;


exports.handler = async event => {

    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;

    const user = await Dynamo.get(ID, tableName).catch(e => {
        console.log('error in Dynamo get', e);
        return null;
    });

    if (!user) {
        return Responses._400({ message: `No user found with the ID ${ID}` })
    }
    return Responses._200({ user })

}