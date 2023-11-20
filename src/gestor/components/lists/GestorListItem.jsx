import { useContext, useMemo } from "react";
import { GestorContext } from "../../context/GestorContext";

export const GestorListItem = ({ data }) => {
  const { title, amount } = data;
  const newTitle = useMemo(() => {
    return title.length > 10 ? title.substring(0, 10) + "..." : title;
  }, [title]);

  const { openModal } = useContext(GestorContext);
  return (
    <>
      <li className="flex justify-between gap-3 bg-slate-500 px-4 py-2 rounded-lg bg-opacity-75 cursor-pointer active:bg-slate-700" onClick={() => openModal(data)}>
        <span className="font-semibold">{newTitle}</span>
        <div className="flex gap-3 ">
          <span>${amount}</span>
          <button>•••</button>
        </div>
      </li>
    </>
  );
};
