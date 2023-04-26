import { useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function useUploadImage() {
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);

  const uploadImage = (file) => {
    const storageRef = ref(storage, `/web-images/profile-avatar/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(storageRef).then((url) => {
          setImageURL({ photo: url });
        });
      }
    );
  };
  return { progress, imageURL, uploadImage };
}
