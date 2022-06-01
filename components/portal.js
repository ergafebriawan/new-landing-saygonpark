import ItemPortal from "./itemPortal";

export default function portal(){
    return(
        <>
        <div className="flex justify-center">
          <h3 className="bg-slate-700 bg-opacity-80 rounded-lg shadow-xl text-2xl font-semibold text-gray-50 mt-24 p-3">
            PORTAL SAYGON PARK
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 mx-20">
            <ItemPortal image="portal/swp.jpg" title="Saygon Waterpark" color="text-gray-50" background="border-sky-600"/>
        </div>
        </>
    );
}