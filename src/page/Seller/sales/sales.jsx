import NavbarSeller from "../components/navbarSeller";
import Details from "./details";
import Distance from "./distance";
import Orders from "./orders";
import Profit from "./profit";
import Shipment from "./shipment";
import Warehouse from "./warehouse";

const Sales = () => {

  return (
    <div className="bg-gray-100">
      <NavbarSeller />
      <div className="p-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mx-6 mb-6">Sales Logistics</h1>

        {/* Sales Logistics Overview */}
        <div className="flex">
          <div className="bg-white p-4 rounded shadow w-1/3 mr-5">
            <Shipment />
          </div>
          <div className="w-2/3">
            <div className="bg-white border rounded shadow py-4 pl-3 pr-6 mb-5">
              <Details />
            </div>
            <div className="mt-5 flex">
              <div className="bg-white p-4 rounded shadow w-1/2 mr-5">
                <Orders />
              </div>
              <div className="bg-white p-4 rounded shadow w-1/2">
                <Warehouse />
              </div>
            </div>
          </div>
        </div>

        <div className="flex my-5">
          <div className="border bg-white rounded shadow p-5 w-1/2 mr-2.5">
            <Profit />
          </div>
          <div className="border bg-white rounded shadow p-5 w-1/2 ml-2.5">
            <Distance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales