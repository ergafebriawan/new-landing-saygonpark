import Image from "next/image";
export default function itemPortal(props) {
  return (
    <>
      <div className="m-5 flex-col hover:scale-125 ease-in-out duration-300">
        <Image
          src={props.image}
          alt={props.title}
          width={288}
          height={288}
          className="h-72 w-72 rounded-full border-4 border-sky-600 shadow-lg mx-auto"
        />
        <div className="flex justify-center my-4 ${props.color} p-4 rounded-lg shadow-lg mx-10">
          <label className="font-semibold text-xl ${props.color}">
            {props.title}
          </label>
        </div>
      </div>
    </>
  );
}
