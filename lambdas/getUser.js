const Responses = require('./API_RESPONSES');


exports.handler = async event => {
    
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.ID){
       return Responses._400({message:'missing the ID from the path'});
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        return Responses._200(data[ID]);
    }

    return Responses._400({message:'No ID in data'});

}

const data = {
    1234: { name: 'Fozle Rabbi Shafi', age: 26, job: 'Fullstack Developer' },
    7893: { name: 'Emon Reza', age: 28, job: 'DevOps Engineer' },
    5513: { name: 'Lahin Hossain', age: 28, job: 'Frontend Developer' }
}