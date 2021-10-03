import Loader from "react-loader-spinner";

export default function ReactLoader() {
  return (
    <Loader
      type="TailSpin"
      color="#00000059"
      height={80}
      width={80}
      className="flex justify-center mt-12"
    />
  );
}
