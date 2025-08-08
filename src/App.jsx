import React from "react";
import ToDoList from "./ToDoList";
import TampilSiswa from "./tes1";
function App() {
  return (
    <>
      <div className="bg-slate-500">
        <TampilSiswa />
        <ToDoList />
      </div>
    </>
  );
}

export default App;

// jadi key itu dipakai kalau kamu ingin membuat element di jxs di react seperti div,ul,li dll.
