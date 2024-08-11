import "./App.css";
import PdfViewer from "./Components/PdfViewer";
import fileUrl from "./fastapi.pdf";

function App() {
  return (
    <>
      <h2>React PDF Viewer</h2>
      <PdfViewer fileUrl={fileUrl} />
    </>
  );
}

export default App;
