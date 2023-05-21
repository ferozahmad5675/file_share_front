import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";

function App() {
  const fileUpload = useRef();
  const [file, setfile] = useState("");
  const [result, setresult] = useState();
  const upload = () => {
    fileUpload.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      const date = new FormData();
      date.append("name", file.name);
      date.append("file", file);

      let res = await uploadFile(date);
      setresult(res.path);
    };
    getImage();
  }, [file]);

  const logo =
    "https://images.unsplash.com/photo-1545330056-fe3f5af63e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  console.log(file);
  return (
    <div className="container">
      <img src={logo} alt="" />
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload And Download The Sharing Link</p>
        <button onClick={upload}>Upload</button>
        <input
          type="file"
          ref={fileUpload}
          style={{ display: "none" }}
          onChange={(e) => setfile(e.target.files[0])}
        />
        <div className="a">
          <a href={result} target="_blank">
            {result}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
