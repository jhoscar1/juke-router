import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link activeClassName="active" to="/albums">ALBUMS</Link>
        </h4>
        <h4 className="menu-item">
          <Link activeClassName="active" onClick={() => { document.getElementsByClassName("active")[0].parentElement.classList.add("active")}} to="/artists">ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
