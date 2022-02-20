import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { Device, DeviceInfo } from '../../models/models';
import { ApiError } from '../../error/ApiError';
// interface MulterRequest extends Request {
//   files: any;
// }

class DeviceController {
  async create(req: any, res: Response, next: NextFunction) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuidv4() + '.jpg';
      img.mv(path.resolve(__dirname, '../..', 'static', fileName));
      const device = await Device.create({ name, price, brandId, typeId, img: fileName });
      if (info) {
        info = JSON.parse(info);
        info.forEach((element: any) => {
          DeviceInfo.create({
            tittle: element.title,
            description: element.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e: any) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req: any, res: Response): Promise<Response> {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    }

    // const devices = Device.findAll();
    return res.json(devices);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: {
        id,
      },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    return res.json(device);
  }
}

export default new DeviceController();
