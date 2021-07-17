import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import DialogModal from "../components/DialogModal";
import { useAuthDispatch, useAuthState } from "../context/auth";

export default function SpaceSideBar() {
  const { authenticated, loading } = useAuthState();
  const dispatch = useAuthDispatch();

  const router = useRouter();

  const logout = () => {
    axios
      .get("/auth/logout")
      .then(() => {
        dispatch("LOGOUT");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/" className="nav-link">
              <span className="link-text logo-text">EduVersity</span>
               <svg  aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="solar-system"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-solar-system fa-w-20 fa-5x">
                <path
                  fill="currentColor"
                  className="fa-secondary"
                  d="M52.33 52.35C52.33 52.36 52.34 52.35 52.33 52.35C30.47 74.23 30.46 109.7 52.33 131.6C74.2 153.4 109.7 153.4 131.5 131.6c21.87-21.87 21.87-57.32 0-79.19C109.7 30.49 74.21 30.49 52.33 52.35zM255.1 192C220.7 192 191.1 220.7 192 256C192 291.3 220.7 320 256 319.1S320 291.3 320 256C319.1 220.7 291.3 192 255.1 192zM391.8 188.1c18.74-18.75 18.72-49.12-.0194-67.87c-18.75-18.75-49.12-18.76-67.87-.0168c-18.75 18.75-18.76 49.14-.0121 67.89C342.6 206.9 373 206.9 391.8 188.1C391.8 188.1 391.8 188.1 391.8 188.1zM459.7 380.4c-21.87-21.87-57.33-21.87-79.2-.0039s-21.87 57.33-.0039 79.2s57.33 21.87 79.2 .002c0-.002 0 0 0 0C481.5 437.8 481.5 402.3 459.7 380.4z"
                />
                <path
                  fill="currentColor"
                  className="fa-primary"
                  d="M391.8 188.1c-10.58 10.58-24.82 14.51-38.64 13.14c23.99 42.67 18.37 97.7-17.9 133.1c-43.5 44.32-114.7 44.95-159 1.455S131.2 221.1 174.7 177.7c35.79-36.46 91.67-44.25 136-18.9c-1.357-13.8 2.577-27.97 13.15-38.54c2.102-2.104 4.746-3.095 7.113-4.726c-23.46-12.52-49.05-19.51-74.97-19.51C167.7 96.01 96 167.6 96.01 256c.0059 88.36 71.64 159.1 160 159.1c42.43-.0039 83.11-16.87 113.1-46.87c51.02-51.02 59.67-127.6 27.37-188.1C394.9 183.4 393.9 186 391.8 188.1zM336.9 447.6c-78 32.85-168.1 15.28-228-44.53c-69.58-69.57-79.29-176.5-29.5-256.7C62.7 142.8 48.73 131.5 41.62 116c-64.97 99.28-53.88 233.8 33.34 320.1c76.11 76.31 191.9 96.57 289.4 50.62c-2.191-1.803-4.477-3.326-6.529-5.375C348.3 472.5 341 460.6 336.9 447.6zM437.1 75c-76.11-76.31-191.1-96.57-289.5-50.62c2.188 1.803 4.48 3.327 6.527 5.374c9.602 9.725 16.82 21.59 20.98 34.61c78-32.85 168.1-15.28 228 44.53c69.58 69.57 79.29 176.5 29.5 256.7c16.69 3.578 30.67 14.85 37.77 30.36C535.3 296.7 524.3 162.2 437.1 75z"
                />
              </svg>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
             
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="alien-monster"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M160,320h64V224H160Zm192-96v96h64V224Z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Feed</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Profile</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-station-moon-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Groups</span>
            </a>
          </li>

          <li className="shuttle nav-item">
            <DialogModal />
          </li>

          <li className="nav-item" id="themeButton">
            {!loading &&
              (authenticated ? (
                <button onClick={logout} className="nav-link">
                  <svg // className="theme-icon"
                    id="darkIcon"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    data-icon="arrow-right"
                    transform="rotate(180,0,0)"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="svg-inline--fa fa-arrow-right fa-w-18 fa-7x"
                  >
                    <path
                      fill="currentColor"
                      className="fa-secondary"
                      d="M502.6 278.6l-128 128c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L402.8 288H192C174.3 288 160 273.7 160 256s14.31-32 32-32h210.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25c12.49-12.49 32.74-12.51 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
                    />
                    <path
                      fill="currentColor"
                      className="fa-primary"
                      d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416z"
                    />
                  </svg>
                  <span className="link-text">Logout</span>
                </button>
              ) : (
                <>
                  <a href="/login" className="nav-link">
                    <svg
                      // className="theme-icon"
                      id="lightIcon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="moon-stars"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                    >
                      <path
                        fill="currentColor"
                        d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                        className="fa-secondary"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                        className="fa-primary"
                      ></path>
                    </svg>

                    <span className="link-text">Login</span>
                  </a>
                  <a href="/register" className="nav-link">
                    <svg
                      // className="theme-icon"
                      id="solarIcon"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="sun"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-sun fa-w-16 fa-7x"
                    >
                      <path
                        fill="currentColor"
                        d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                        className="fa-secondary"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                        className="fa-primary"
                      ></path>
                    </svg>
                    <span className="link-text">Register</span>
                  </a>
                </>
              ))}
          </li>
        </ul>
      </nav>
    </>
  );
}
