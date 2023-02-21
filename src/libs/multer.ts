import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

// class StorageUpload{
// public storageSave(){ 
//     multer.diskStorage( {
//     destination:'images',
//     filename: (req, file, cb) => {
//         cb(null,uuidv4()+path.extname(file.originalname))
//     } 
// })
// }
// }

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null,uuidv4()+path.extname(file.originalname))
    }
})
export default multer({storage});