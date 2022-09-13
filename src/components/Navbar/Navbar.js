import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";

import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <div>
          <BookmarkIcon />
        </div>
        <div>
          <h2>Trello Clone App</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
