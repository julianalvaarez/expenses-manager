import { useContext } from "react";
import { GestorContext } from "../../context";
import { GestorListItem } from "./";

export const EarningsList = () => {
  const { earnings, totalEarnings } = useContext(GestorContext);

  if (totalEarnings !== 0) return (
      <div className="lg:flex-1 ">
        <div className="text-white mx-auto px-5 py-5 border rounded-md my-6 lg:w-7/12 ">
          <h4 className="font-bold text-2xl">MOVEMENTS</h4>
            <ul className="flex flex-col gap-3 mt-4">
              { earnings.map( earning => <GestorListItem key={Math.random()} data={earning} /> ) }
              <li className="text-white font-semibold ">Total Earnings: ${totalEarnings}</li>
            </ul>
        </div>
      </div>
    );
};
