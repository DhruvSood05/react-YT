import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className=" h-screen lg:flex bg-black text-white ">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex gap-4 lg:w-1/2 p-10 items-start flex-col"
      >
        <h1 className=" text-3xl font-bold">Add Notes</h1>

        {/* Input title */}
        <input
          className="px-5 py-2 border-2 rounded font-medium outline-none w-full"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Details */}
        <textarea
          className=" px-5 w-full font-medium h-32 items-start flex-row outline-none py-2 border-2 rounded"
          name=""
          id=""
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-white w-full outline-none text-black px-5 py-2">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10 ">
        <h1 className=" text-3xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap mt-5 gap-5 h-[90%]  overflow-auto justify-start items-start  ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="px-8 relative flex flex-col justify-between text-center py-15 min-h-[280px] w-60 rounded-2xl  bg-[url('https://images.vexels.com/media/users/3/146633/isolated/preview/236b135edbfb0ac9504b6a3090866459-blue-sticky-note-with-paperclip.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
              >
                <div>
                  <h3 className=" leading-tight text-xl text-black font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-500 wrap-break-word">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className=" bg-red-700 text-white font-bold w-full rounded-lg p-1 cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
