import connectionString from '../database/connection';
import contacUsSchema from '../database/model/contactUs';

const contactUs = async (req, res) => {
    if (req.method === 'GET') {
        try {
            connectionString()
            let result = await contacUsSchema.find({});
            res.send(result);
        } catch (error) {
            res.send({ 'message': 'Internal Server Error' })
        }
    } else {
        try {
            let saveInfo = await contacUsSchema.create(req.body);
            res.send(saveInfo);
        } catch (error) {
            console.log('--saveContactInfo--', error);
            return res.send({ 'message': 'Internal Server Error' });
        }
    }

};

export default contactUs;