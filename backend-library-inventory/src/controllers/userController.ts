import { Request, Response } from 'express';
import UserService from '../services/userService';
import mapStatusHTTP from '../utils/mapStatusHttp';

class UserController {
  private internalErrorMsg = 'Internal server error';

  constructor(private service: UserService) { }

  async createUser(req: Request, res: Response) {
    try {
      const { userName, password } = req.body;
      const { status, data } = await this.service.createUser({ userName, password });
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in createUser', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { userName, password } = req.body;
      const { status, data } = await this.service.login({ userName, password });
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in loginUser', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }
}

export default UserController;