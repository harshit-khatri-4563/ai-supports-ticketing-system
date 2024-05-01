import { connectToDatabase } from '../../lib/mongodb';
import Ticket from '../../models/Ticket';

const handler = async (req, res) => {
  // Connect to MongoDB
  await connectToDatabase();

  if (req.method === 'POST') {
    const newTicket = new Ticket(req.body);
    try {
      await newTicket.save();
      res.status(201).json({ message: 'Ticket created successfully!' });
    } catch (err) {
      res.status(500).json({ message: 'Error creating ticket!' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;