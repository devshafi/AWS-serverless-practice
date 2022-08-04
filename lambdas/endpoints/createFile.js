const Responses = require('../common/API_RESPONSES');
const S3 = require('../common/S3');





exports.handler = async event => {

    const bucket = process.env.bucketName;
    console.log('bucket', bucket);

    console.log('event', event);
    if (!event.pathParameters || !event.pathParameters.fileName) {
        // failed without a filename
        return Responses._400({ message: 'missing the fileName from the path' });
    }

    let fileName = event.pathParameters.fileName;
    const data = JSON.parse(event.body);

    const newData = await S3.write(data, fileName, bucket).catch(err => {
        console.log('error in S3 write', err);
        return null;
    })

    if (!newData) {
        return Responses._400({ message: `Failed to write file with the fileName ${fileName}` })
    }
    return Responses._200({ newData });

}