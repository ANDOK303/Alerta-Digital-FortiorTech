import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/uploads'));
    },
    filename: (req, file, cb) => {
        const idUsuario = req.params.id;
        const extension = path.extname(file.originalname);
        cb(null, `usuario-${idUsuario}${extension}`);
    }
});

export const uploadFoto = multer({ storage });