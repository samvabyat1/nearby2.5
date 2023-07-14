import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDatabase, onValue, ref as ref2, set } from "firebase/database";

import app from '../base'

const storage = getStorage(app);
const db = getDatabase(app);

export default function Right() {
  var user = localStorage.getItem("user");
  var [rec, setrec] = useState(null);
  var [file, setfile] = useState(null);

  useEffect(() => {
    if (user != null) {
      onValue(ref2(db, "users/" + user + "/file"), (snapshot) => {
        setrec((rec = snapshot.val()));
      });
    }
  }, []);

  function onUploadinit() {
    document.getElementById("uploadbutton").disabled = true;
    onUpload();
  }

  function onUpload() {
    if (file != null && user != null) {
      const storageRef = ref(storage, "users/" + user);

      uploadBytes(storageRef, file).then((snapshot) => {
        set(ref2(db, "users/" + user + "/file"), file.name);
        alert("File uploaded");
        document.getElementById("uploadbutton").disabled = false;
      });
    } else {
      document.getElementById("uploadbutton").disabled = false;
    }
  }

  function onDownload() {
    if (user != null && rec != null) {
      const storageRef = ref(storage, "users/" + user);
      getDownloadURL(ref(storage, storageRef))
        .then((url) => {
          console.log(url);

          var link = document.createElement("a");
          link.download = rec;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          // Handle any errors
        });
    }
  }

  return (
    <div className="bg-white flex-1 text-black py-8 px-5 m-2 rounded-xl">
      <div className="flex">
        <button
          className="bg-black px-8 py-6 rounded-xl text-yellow-500 mr-5 disabled:bg-gray-600"
          onClick={onUploadinit}
          id="uploadbutton"
        >
          Upload
        </button>
        <div className="py-1.5">
          <p className="text-3xl font-bold mb-2">
            Share <span className="text-yellow-500">files</span>
          </p>
          <input type="file" 
          onChange={(event) => {
            setfile(event.target.files[0]);
          }}/>
        </div>
      </div>
      
      {
        rec!=null?
          <p onClick={onDownload} className="cursor-pointer text-right hover:text-red-700"><span className="font-bold">Recently uploaded: </span>{rec}</p>
      :""
      }
    </div>
  );
}
