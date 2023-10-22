import { useLocation } from "react-router-dom";

const Page404 = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Cannot find the page</h1>
    </div>
  );
};
export default Page404;
