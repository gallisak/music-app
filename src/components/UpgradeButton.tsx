import { useState } from "react";
import { Modal } from "./Modal";

interface upgradeButton {
  className: string;
}

export function UpgradeButton({ className }: upgradeButton) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length > 16) return;

    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    setCardNumber(formattedValue);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");

    if (rawValue.length > 4) return;

    const formattedValue = rawValue.replace(/(\d{2})(?=\d)/g, "$1/");

    setDate(formattedValue);
  };

  return (
    <div className="flex items-center ">
      <div onClick={() => setIsModalOpen(true)} className={className}>
        UPGRADE
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <span className="flex justify-between items-center mb-5">
            <h1 className="text-white lg:text-[25px] ">Upgrade to pro</h1>
            <h1 className="text-white lg:text-[25px]">10$</h1>
            <span className="flex gap-4">
              <h1 className="text-gray-500 text-[25px]">Demo</h1>
            </span>
          </span>

          <div className="mb-5">
            <input
              value={cardNumber}
              onChange={handleCardNumberChange}
              type="text"
              placeholder="Card number"
              className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
            />
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-1/2">
              <input
                value={date}
                onChange={handleDateChange}
                type="text"
                placeholder="Date (MM/YY)"
                className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
              />
            </div>

            <div className="w-1/2 relative">
              <input
                type={showCVV ? "text" : "password"}
                placeholder="CVV"
                maxLength={3}
                className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 pr-16 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
              />

              <button
                type="button"
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm font-semibold"
                onClick={() => setShowCVV(!showCVV)}
              >
                {showCVV ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="cursor-pointer rounded-4xl mt-8 bg-[#2A2A2A] p-3 w-full focus:outline-none border-[#18181A] border-2 hover:border-green-500 text-white font-bold transition-colors">
            Pay
          </button>
        </Modal>
      )}
    </div>
  );
}
