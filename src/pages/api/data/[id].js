import dbConnect from "@/lib/dbConnect";
import event_model from "@/models/data";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const data = await event_model.findOne({ _id: req.query.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
