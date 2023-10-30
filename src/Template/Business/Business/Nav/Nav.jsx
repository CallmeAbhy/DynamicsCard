import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div class="bg-white ">
        <Link to="/birthday">
          <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2" />

              <circle cx="9" cy="10" r="1" fill="currentColor" />

              <circle cx="15" cy="10" r="1" fill="currentColor" />

              <path
                d="M10 14s1.5 2 2 2 2-2 2-2"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Birthday
          </button>
        </Link>
        <Link to="/wedding">
          <button
            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            style={{ marginLeft: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />

              <circle
                cx="12"
                cy="12"
                r="6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            Marraige
          </button>
        </Link>

        <Link to="/">
          <button
            class="inline-flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md"
            style={{ marginLeft: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
