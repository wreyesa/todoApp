import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-4">
      <Link to="" className="text-white font-bold">
        <h1>To-Do App</h1>
      </Link>
    </div>
  );
}

export default Navbar;
