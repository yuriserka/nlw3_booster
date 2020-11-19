import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#000000" height={100} width={100} />
    </div>
  );
}