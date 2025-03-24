interface Props {
  imgUrl: string;
  show: boolean;
  onClose: () => void;
}

const PopUp = ({ imgUrl, show, onClose }: Props) => {
  return (
    <div
      className={`w-screen h-screen ${
        show ? "block" : "hidden"
      } absolute z-[5] top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center`}
    >
      <div className="w-[80%] h-[80%] relative min-w-96 min-h-96 bg-white rounded-xl shadow-lg">
        <span
          className="absolute top-5 right-5 w-12 h-12 font-bold p-3 cursor-pointer"
          onClick={() => onClose()}
        >
          &times;
        </span>
        <img
          src={imgUrl}
          alt="cars"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default PopUp;
