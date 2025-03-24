import { useState } from "react";

interface Props {
  onUpdate: (imgUrl: string) => void;
}

const DropArea = ({ onUpdate }: Props) => {
  const [drag, setDrag] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  let colors = ["border-gray-400", "border-blue-400 bg-blue-100"];

  async function uploadFile(file: File) {
    setHide(false);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(window.location.origin + "/upload/", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    const imageUrl = URL.createObjectURL(blob);

    setHide(true);
    onUpdate(imageUrl);
  }

  return (
    <div className="w-full h-auto flex justify-center item-center p-10">
      <div
        className={`eil absolute ${
          hide ? "hidden" : "block"
        } top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center`}
      >
        <div className="loader  border-4 absolute z-20 border-transparent border-b-white w-14 h-14 rounded-full animate-spin"></div>
      </div>
      <div
        className={`w-[65%] min-w-96 h-96 border-4 ${
          drag ? colors[1] : colors[0]
        } border-dashed flex flex-col justify-center items-center text-blue-700`}
        onDrop={async (e) => {
          e.preventDefault();
          const items = e.dataTransfer.items;
          if (items.length) {
            for (let i = 0; i < items.length; i++) {
              if (items[i].kind === "file") {
                await uploadFile(e.dataTransfer.files[0]);
                break;
              }
            }
          }
        }}
        onDragOver={(e) => {
          setDrag(true);
          e.preventDefault();
        }}
        onDragLeave={() => {
          setDrag(false);
        }}
      >
        <label
          htmlFor="file"
          className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-xl my-2"
        >
          Upload File
        </label>
        <input
          className="hidden"
          type="file"
          id="file"
          accept="image/*"
          multiple={false}
          onChange={async (e) => {
            const files = e.target.files;

            if (files?.length) {
              await uploadFile(files[0]);
            }
          }}
        />
        Drop or Select you image to process
      </div>
    </div>
  );
};

export default DropArea;
