import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  /**
   * O correto eh utilizar servicoes proprios para isso, mas agora iremos utilizar
   * o disco da maquina para salvar as imagens, mais pra frente trocar por um S3 ou
   * algo parecido
   */

  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
