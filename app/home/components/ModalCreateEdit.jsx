export default function ModalCreateEdit({ children }) {
  return (
    <div className="absolute bg-black w-5/6 h-5/6 rounded flex flex-col">
      {children}
    </div>
  );
}
