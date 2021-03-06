import React from "react";
import { Container } from "reactstrap";
import Header from "./header/Header";
import Sidebar from "./sidebars/vertical/Sidebar";

const FullLayout = ({ children }: { children: any }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-white ${!open ? "" : "showSidebar"
            }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header showMobmenu={() => showMobilemenu()} />

          {/********Middle Content**********/}
          <Container className="p-2 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
