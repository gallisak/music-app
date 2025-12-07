import iconpark from "../assets/images/icon-park-outline_down.png";
import React, { useState } from "react";
import { UpgradeButton } from "./UpgradeButton";
import { useAppSelector } from "../app/hooks";
import { Modal } from "./Modal";
import { useAppDispatch } from "../app/hooks";
import { signIn, logOut } from "../app/features/user/userSlice";
import { loadUserHistory } from "../app/features/player/playerSlice";
import { clearPlayerState } from "../app/features/player/playerSlice";
import { useNavigate } from "react-router-dom";
import { loadUserLikes } from "../app/features/library/likedSongsSlice";

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
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim().length > 0) {
      navigate(`/search/${searchTerm}`);
    }
  };

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

    const usersJSON = localStorage.getItem("users");
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      alert(`Successful login! Hello, ${foundUser.name}`);

      dispatch(signIn(foundUser));

      dispatch(loadUserHistory(foundUser.email));
      dispatch(loadUserLikes(foundUser.email));

      setIsModalOpen(false);
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid email or password! Or register first.");
    }
  };

  const handleRegister = () => {
    if (!emailRegister || !passwordRegister || !name) {
      alert("Fill in all fields");
      return;
    }

    const existingUsersJSON = localStorage.getItem("users");
    const users = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    const userExists = users.some((u: any) => u.email === emailRegister);

    if (userExists) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = {
      email: emailRegister,
      password: passwordRegister,
      name: name,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    dispatch(signIn(newUser));

    dispatch(loadUserLikes(newUser.email));

    setEmailRegister("");
    setPasswordRegister("");
    setName("");
    setIsModalOpen(false);
  };

  return (
    <header className="h-20 top-0 w-full fixed z-10 backdrop-blur-lg backdrop-brightness-80 text-white">
      <div className="ml-1 lg:ml-50 mx-auto h-full flex items-center justify-between px-4 gap-2">
        <div className="flex items-center flex-1 min-w-0">
          <div className="hidden lg:flex items-center"></div>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            type="text"
            placeholder="Search"
            className="rounded-4xl bg-[#2A2A2A] min-w-22 sm:min-w-30 p-3 pl-6 flex-1 mr-3 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
          />
        </div>

        <UpgradeButton
          className={`${
            isPro
              ? "cursor-pointer hidden lg:block border-gold-500 text-green-500 mr-5 ml-5 shrink-0"
              : "hidden cursor-pointer lg:flex items-center justify-center rounded-3xl h-12 w-42 bg-[#2A2A2A] border-2 border-green-500 hover:brightness-70 text-white font-bold shrink-0"
          }`}
        >
          {isPro ? "PRO ACCOUNT" : "UPGRADE"}
        </UpgradeButton>

        <div className="relative shrink-0 ml-3">
          <div
            onClick={handleProfile}
            className="rounded-3xl w-35 lg:w-56 cursor-pointer h-12 bg-[#2A2A2A] flex items-center justify-center p-1.5"
          >
            {isSignIn ? (
              <div className="flex items-center">
                <p className="lg:block ml-2 w-30 lg:w-43 mr-1.5 truncate">
                  {user?.name}
                </p>
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
                      onClick={() => {
                        dispatch(logOut());
                        dispatch(clearPlayerState());
                      }}
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
                <p className=" lg:block p-1 mr-1.5">Sign in</p>

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
