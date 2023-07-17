import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../../context/UserContext";
import TaxesTable from "../../components/TaxesTable";

export default function Home() {
  const { token } = useContext(Context);

  return (
    <>
      {!token && <Navigate to="/login" />}
      <TaxesTable />
    </>
  );
}
