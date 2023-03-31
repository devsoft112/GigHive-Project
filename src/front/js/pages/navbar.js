import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const NavBar = () => {
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">
        Active
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        Link
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        Link
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
        Disabled
      </a>
    </li>
  </ul>;
};
