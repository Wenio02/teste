import * as Yup from 'yup';
import Order from "../schemas/Order";

class OrderController {
  async store(request, response) {
    //const schema = Yup.object().shape({
      //name: Yup.string().required(),
      
   // });

    //try {
     // await schema.validate(request.body, { abortEarly: false });
   // } catch (err) {
     // return response.status(400).json({ error: err.errors });
   // }

    if (!request.file) {
      return response.status(400).json({ error: 'File is missing' });
    }

   
    //const { name } = request.body;

  const Order = {
    user: {
        id:request.userId,
        name:request.userName ,
    }
  }

    return response.status(201).json(product);
  }


}

export default new OrderController();
