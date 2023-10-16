import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//congif firebase
const firebaseConfig = {
    apiKey: "AIzaSyA62r-aBARCLpCKtpqou99gnKTr3-SMKpw",
    authDomain: "test2709-f8508.firebaseapp.com",
    projectId: "test2709-f8508",
    storageBucket: "test2709-f8508.appspot.com",
    messagingSenderId: "801883269360",
    appId: "1:801883269360:web:410c7177096652b0b6ba35",
    measurementId: "G-M56ME9KLZR"
  };
  

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadFileToStorage(file, folderName, bufferData = undefined) {
    console.log("file",file)
    // nếu file là null thì không làm gì hết
    if (!file) {
        return false
    }

    let fileRef;
    let metadata;
    if (!bufferData) {
        // tên file trên file base
        fileRef = ref(storage, `${folderName}/` + Math.random() * Date.now() + "."  + file.type.split('/')[1]);
    } else {
        // tên file trên file base
        fileRef = ref(storage, `${folderName}/` + `${Date.now() * Math.ceil(Math.random())}` + file.originalname);
        metadata = {
            contentType: file.mimetype,
        };
    }
    let url;
    if (bufferData) {
        // upload file lên fire storage
        url = await uploadBytes(fileRef, bufferData, metadata).then(async res => {
            // khi up thành công thì tìm URL
            return await getDownloadURL(res.ref)
                .then(url => url)
                .catch(er => false)
        })
    } else {
        // upload file lên fire storage
        url = await uploadBytes(fileRef, file).then(async res => {
            // khi up thành công thì tìm URL
            return await getDownloadURL(res.ref)
                .then(url => url)
                .catch(er => false)
        })
    }


    return url
}