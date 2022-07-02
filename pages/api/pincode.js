import Pincodes from '../../pincode.json'
export default function handler(req, res) {
    res.status(200).json(Pincodes)
  }
  