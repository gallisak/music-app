import iconpark from "../assets/images/icon-park-outline_down.png";
import left from "../assets/images/fe_arrow-left.png";
import right from "../assets/images/fe_arrow-right.png";
import React, { useState } from "react";
import { UpgradeButton } from "./UpgradeButton";
import { useAppSelector } from "../app/hooks";
import { Modal } from "./Modal";
import { useAppDispatch } from "../app/hooks";
import { signIn, logOut } from "../app/features/user/userSlice";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [name, setName] = useState("");
  let [pageChange, setPageChange] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [showCVV, setShowCVV] = useState(false);

  const isPro = useAppSelector((state) => state.user.isPro);
  const isSignIn = useAppSelector((state) => state.user.isSignIn);

  const handleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailRegister(e.target.value);
  };

  const handlePasswordRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRegister(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill in all fields");
      return;
    }

    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      alert("User not found! Register first");
      return;
    }
    const user = JSON.parse(storedData);

    if (email === user.email && password === user.password) {
      alert(`Successful login! Hello, ${user.name}`);
      dispatch(signIn(user));
    } else {
      alert("Invalid email or password!");
    }
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    if (emailRegister === "" || passwordRegister === "" || name === "") {
      alert("Fill in all fields");
    }

    const newUser = {
      email: emailRegister,
      password: passwordRegister,
      name: name,
    };

    localStorage.setItem("userData", JSON.stringify(newUser));

    alert("Registration successful!");
    setEmailRegister("");
    setPasswordRegister("");
    setName("");
    setIsModalOpen(false);
  };

  return (
    <header className="h-20 top-0 w-full fixed z-10 bg-[#18181A] text-white">
      <div className="ml-1 lg:ml-50 mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center flex-1 min-w-0">
          <div className="hidden lg:flex items-center">
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 flex justify-center items-center hover:brightness-70">
              <img src={left} className="w-5 h-5" alt="left button" />
            </div>
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 ml-3 flex justify-center items-center hover:brightness-70">
              <img className="w-5 h-5" src={right} alt="right button" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
          />
        </div>

        <UpgradeButton
          className={`${
            isPro
              ? "cursor-pointer hidden lg:block border-gold-500 text-green-500 mr-5 ml-5"
              : "hidden cursor-pointer lg:flex items-center justify-center rounded-3xl h-12 w-42 bg-[#2A2A2A] border-2 border-green-500 hover:brightness-70 text-white font-bold"
          }`}
        >
          {isPro ? "PRO ACCOUNT" : "UPGRADE"}
        </UpgradeButton>

        <div className="relative ml-3">
          <div
            onClick={handleProfile}
            className="rounded-3xl cursor-pointer h-12 bg-[#2A2A2A] flex items-center justify-center p-1.5 lg:w-56"
          >
            {isSignIn ? (
              <div className="flex items-center">
                <p className="hidden lg:block ml-2 mr-1.5">{user?.name}</p>
                <img
                  className={`w-3 h-3
              transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
                  src={iconpark}
                  alt="menu button"
                />

                <div
                  className={`
            absolute top-full right-0 mt-2
            w-42 bg-[#7d7d7d] rounded-2xl
            overflow-hidden
            shadow-lg z-50
            transition-all duration-300 ease-in-out origin-top
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                  <div className="flex flex-col justify-center text-[18px] py-2">
                    <span className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                      <a href="/">Profile</a>
                    </span>
                    <span className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                      <a href="/">Settings</a>
                    </span>
                    <span
                      onClick={() => dispatch(logOut())}
                      className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer"
                    >
                      <button className="cursor-pointer">Log Out</button>
                    </span>
                    <span className="lg:hidden ">
                      <UpgradeButton className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                        {isPro ? "PRO ACCOUNT" : "UPGRADE"}
                      </UpgradeButton>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <span
                onClick={handleModal}
                className="w-full flex justify-center"
              >
                <p className="hidden lg:block mr-1.5">Sign in</p>

                {isModalOpen && (
                  <Modal onClose={() => setIsModalOpen(false)}>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPageChange(false)}
                        className={
                          pageChange
                            ? "text-gray-300 cursor-pointer"
                            : "text-gray-300 border-b-2 border-b-green-500 cursor-pointer"
                        }
                      >
                        Log in
                      </button>
                      <button
                        onClick={() => setPageChange(true)}
                        className={
                          pageChange
                            ? "text-gray-300 border-b-2 border-b-green-500 cursor-pointer"
                            : "text-gray-300 cursor-pointer"
                        }
                      >
                        Register
                      </button>
                    </div>
                    {pageChange ? (
                      <>
                        <div className="w-full flex justify-center">
                          <h1 className="text-white text-[22px]">Register</h1>
                        </div>
                        <div className="flex mt-5 gap-5">
                          <input
                            value={emailRegister}
                            onChange={handleEmailRegister}
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                          />

                          <div className="relative w-full">
                            <input
                              value={passwordRegister}
                              onChange={handlePasswordRegister}
                              type={showCVV ? "text" : "password"}
                              placeholder="Password"
                              className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 pr-16 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                            />
                            <button
                              type="button"
                              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white text-sm font-semibold transition-colors"
                              onClick={() => setShowCVV(!showCVV)}
                            >
                              {showCVV ? "Hide" : "Show"}
                            </button>
                          </div>

                          <input
                            value={name}
                            onChange={handleName}
                            type="text"
                            placeholder="Username"
                            className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                          />
                        </div>
                        <button
                          onClick={handleRegister}
                          className="cursor-pointer rounded-4xl mt-8 bg-[#2A2A2A] p-3 w-full focus:outline-none border-[#18181A] border-2 hover:border-green-500 text-white font-bold transition-colors"
                        >
                          Register
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-full flex justify-center">
                          <h1 className="text-white text-[22px]">Log in</h1>
                        </div>
                        <div className="flex mt-5 gap-5">
                          <input
                            value={email}
                            onChange={handleEmail}
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                          />
                          <div className="relative w-full">
                            <input
                              value={password}
                              onChange={handlePassword}
                              type={showCVV ? "text" : "password"}
                              placeholder="Password"
                              className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 pr-16 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                            />

                            <button
                              type="button"
                              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white text-sm font-semibold transition-colors"
                              onClick={() => setShowCVV(!showCVV)}
                            >
                              {showCVV ? "Hide" : "Show"}
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={handleLogin}
                          className="cursor-pointer rounded-4xl mt-8 bg-[#2A2A2A] p-3 w-full focus:outline-none border-[#18181A] border-2 hover:border-green-500 text-white font-bold transition-colors"
                        >
                          Log in
                        </button>
                      </>
                    )}
                  </Modal>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
