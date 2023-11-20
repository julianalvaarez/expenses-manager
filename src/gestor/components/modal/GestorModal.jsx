import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GestorContext } from "../../context/GestorContext";

export const GestorModal = () => {
  const { modalInfo, setIsModalOpen } = useContext(GestorContext);
  const { title, amount, category, date } = modalInfo;
  return (
    <>
      <div className="modal">
        <div className="bg-slate-900 border text-white rounded-lg p-4">
            <IoMdClose onClick={() => setIsModalOpen(false)} className="text-3xl cursor-pointer"/>
            <div className="px-7 py-4">
                <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl">{title}</h3>
                <hr className="my-3" />
                <div className="text-start grid grid-cols-2 gap-2 md:text-xl xl:text-2xl">
                    <p>Amount:</p>
                    <span className="font-semibold">${amount}</span>
                    <p>Category:</p>
                    <span className="font-semibold">{category}</span>
                    <p>Date:</p>
                    <span className="font-semibold">{date}</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
