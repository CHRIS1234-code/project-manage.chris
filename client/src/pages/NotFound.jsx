import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle size="5rem" className="text-danger" />
      <h1 className="display-1">404</h1>
      <h1 className="lead">Sorry This page does not exit</h1>
      <Link to="/" className="btn btn-info">
        Go Back
      </Link>
    </div>
  );
}
