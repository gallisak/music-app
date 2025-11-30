import { useState } from "react";
import { Modal } from "./Modal";
import { upgradeToPro, downgradeToFree } from "../app/features/user/userSlice"; // Додай downgradeToFree!
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface UpgradeButtonProps {
  className: string;
  children: string;
}

export function UpgradeButton({ className, children }: UpgradeButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const dispatch = useAppDispatch();
  const isPro = useAppSelector((state) => state.user.isPro);

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

  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (raw.length > 3) return;
    setCvv(raw);
  };

  const handleUpgrade = () => {
    if (cardNumber === "" || date === "" || cvv === "") {
      alert("Fill in the bank card details");
    } else if (cardNumber.length < 19) {
      alert("Enter your full credit card number");
    } else if (date.length < 5) {
      alert("Enter the full date of the bank card");
    } else if (cvv.length < 3) {
      alert("Enter the full CVV");
    } else {
      alert("Payment was successful");
      setIsModalOpen(false);
      setCardNumber("");
      setDate("");
      setCvv("");
      dispatch(upgradeToPro());
    }
  };

  const handleDowngrade = () => {
    const confirmation = confirm(
      "Are you sure you want to cancel your subscription?"
    );

    if (confirmation) {
      alert("You have downgraded to the free plan");
      dispatch(downgradeToFree());
      setIsModalOpen(false);
    } else {
      return;
    }
  };

  const isSignIn = useAppSelector((state) => state.user.isSignIn);

  return (
    <div className="flex items-center">
      <div onClick={() => setIsModalOpen(true)} className={className}>
        {children}
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {isSignIn ? (
            <>
              {isPro ? (
                <>
                  <div className="flex justify-between items-center mb-5">
                    <h1 className="text-white lg:text-[25px]">
                      Downgrade To Free
                    </h1>
                    <h1 className="text-gray-500 text-[25px]">Current Plan</h1>
                  </div>

                  <p className="text-gray-400 mb-5">
                    Are you sure you want to cancel your Pro subscription?
                  </p>

                  <button
                    onClick={handleDowngrade}
                    className="cursor-pointer rounded-4xl mt-4 bg-red-600 p-3 w-full focus:outline-none hover:bg-red-700 text-white font-bold transition-colors"
                  >
                    Cancel Subscription
                  </button>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-5">
                    <h1 className="text-white lg:text-[25px]">
                      Upgrade to pro
                    </h1>
                    <div className="flex gap-4 items-center">
                      <h1 className="text-white lg:text-[25px]">10$</h1>
                      <h1 className="text-gray-500 text-[25px]">Demo</h1>
                    </div>
                  </div>

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
                        value={cvv}
                        onChange={handleCvv}
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

                  <button
                    onClick={handleUpgrade}
                    className="cursor-pointer rounded-4xl mt-8 bg-[#2A2A2A] p-3 w-full focus:outline-none border-[#18181A] border-2 hover:border-green-500 text-white font-bold transition-colors"
                  >
                    Pay
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <p className="text-white text-[20px]">
                To purchase a subscription, you must log in to your account
              </p>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}
