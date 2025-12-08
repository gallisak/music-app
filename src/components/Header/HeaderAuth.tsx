import iconpark from "../../assets/images/icon-park-outline_down.png";
import { Modal } from "../Modal";
import { clearPlayerState } from "../../app/features/player/playerSlice";
import { logOut } from "../../app/features/user/userSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadUserLikes } from "../../app/features/library/likedSongsSlice";
import { signIn } from "../../app/features/user/userSlice";
import { UpgradeButton } from "../UpgradeButton";
import { loadUserHistory } from "../../app/features/player/playerSlice";

export function HeaderAuth() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const isSignIn = useAppSelector((state) => state.user.isSignIn);
  const isPro = useAppSelector((state) => state.user.isPro);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pageChange, setPageChange] = useState(false);
  const [showCVV, setShowCVV] = useState(false);

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearPlayerState());
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => (isSignIn ? setIsOpen(!isOpen) : setIsModalOpen(true))}
        className="rounded-3xl w-35 lg:w-56 cursor-pointer h-12 bg-[#2A2A2A] flex items-center justify-center p-1.5"
      >
        {isSignIn ? (
          <div className="flex items-center relative">
            <p className="lg:block ml-2 w-30 lg:w-43 mr-1.5 truncate">
              {user?.name}
            </p>
            <img
              className={`w-3 h-3 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              src={iconpark}
              alt="menu button"
            />

            <div
              className={`absolute top-full right-0 mt-2 w-42 bg-[#7d7d7d] rounded-2xl overflow-hidden shadow-lg z-50 transition-all duration-300 ease-in-out origin-top ${
                isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col justify-center text-[18px] py-2">
                <span className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                  <a href="/">Profile</a>
                </span>
                <span className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                  <a href="/">Settings</a>
                </span>
                <span
                  onClick={handleLogout}
                  className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer"
                >
                  <button className="cursor-pointer text-red-300">
                    Log Out
                  </button>
                </span>
                <span className="lg:hidden">
                  <UpgradeButton className="w-full py-2 flex justify-center items-center hover:bg-[#363636] cursor-pointer">
                    {isPro ? "PRO ACCOUNT" : "UPGRADE"}
                  </UpgradeButton>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <span className="w-full flex justify-center">
            <p className="lg:block p-1 mr-1.5">Sign in</p>
          </span>
        )}
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="flex gap-3 justify-center mb-4">
            <button
              onClick={() => setPageChange(false)}
              className={
                !pageChange
                  ? "text-white border-b-2 border-green-500 pb-1"
                  : "text-gray-400 pb-1"
              }
            >
              Log in
            </button>
            <button
              onClick={() => setPageChange(true)}
              className={
                pageChange
                  ? "text-white border-b-2 border-green-500 pb-1"
                  : "text-gray-400 pb-1"
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
              <div className="flex flex-col gap-4 mt-5">
                <input
                  value={emailRegister}
                  onChange={(e) => setEmailRegister(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                />
                <div className="relative w-full">
                  <input
                    value={passwordRegister}
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    type={showCVV ? "text" : "password"}
                    placeholder="Password"
                    className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 pr-16 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold"
                    onClick={() => setShowCVV(!showCVV)}
                  >
                    {showCVV ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
              <div className="flex flex-col gap-4 mt-5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                />
                <div className="relative w-full">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showCVV ? "text" : "password"}
                    placeholder="Password"
                    className="w-full rounded-4xl bg-[#2A2A2A] p-3 pl-6 pr-16 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold"
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
    </>
  );
}
