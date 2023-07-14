import React, { useEffect, useState } from "react";
import {
  DataSnapshot,
  getDatabase,
  onValue,
  ref,
  set,
} from "firebase/database";
import app from '../base'

const db = getDatabase(app);

export default function Left() {
  var user = localStorage.getItem("user");

  var [rec, setrec] = useState(null);

  useEffect(() => {
    if (user != null) {
      onValue(ref(db, "users/" + user + "/text"), (snapshot) => {
        setrec((rec = snapshot.val()));
      });
    }
  }, []);

  function onSave() {
    var text = document.getElementById("text").value;
    if (user != null && text != "") {
      set(ref(db, "users/" + user + "/text"), text);

      alert("Saved");
    }
  }

  function onCopy() {
    navigator.clipboard.writeText(rec);
    alert("Text copied");
  }

  return (
    <div className="bg-amber-100 flex-1 text-black py-8 px-5 m-2 rounded-xl ">
      <div className="flex flex-row-reverse">
        <button
          className="bg-black px-8 py-6 rounded-r-xl text-white"
          onClick={onSave}
        >
          Save
        </button>

        <textarea
          rows="3"
          id="text"
          className="bg-transparent border-solid border-4 border-black rounded-l-xl w-full text-xl px-2 placeholder:font-bold placeholder:text-amber-800"
          placeholder="Type or paste texts here"
        ></textarea>
      </div>
      {rec != null ? <a className="text-red-500 cursor-pointer hover:text-xl" onClick={onCopy}><span className="font-bold text-black">Recently saved: </span>{rec}</a> : ""}
    </div>
  );
}
