import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [{
  title: "Users",
  href: "/",
  icon: "bi bi-speedometer2",
},
{
  title: "Dashboard",
  href: "/",
  icon: "bi bi-speedometer2",
},
{
  title: "Alert",
  href: "/ui/alerts",
  icon: "bi bi-bell",
},
{
  title: "Badges",
  href: "/ui/badges",
  icon: "bi bi-patch-check",
},
{
  title: "Buttons",
  href: "/ui/buttons",
  icon: "bi bi-hdd-stack",
},
{
  title: "Cards",
  href: "/ui/cards",
  icon: "bi bi-card-text",
},
{
  title: "Grid",
  href: "/ui/grid",
  icon: "bi bi-columns",
},
{
  title: "Table",
  href: "/ui/tables",
  icon: "bi bi-layout-split",
},
{
  title: "Forms",
  href: "/ui/forms",
  icon: "bi bi-textarea-resize",
},
{
  title: "Breadcrumbs",
  href: "/ui/breadcrumbs",
  icon: "bi bi-link",
},
{
  title: "About",
  href: "/about",
  icon: "bi bi-people",
},
];

const navigasi = [
  {
    menu: 'Admin',
    submenu: [{
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }, {
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }]
  },
  {
    menu: 'Admin',
    submenu: [{
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }, {
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }]
  }, {
    menu: 'Admin',
    submenu: [{
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }, {
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }]
  }, {
    menu: 'Admin',
    submenu: [{
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }, {
      title: 'Users',
      href: '/auth/users',
      icon: 'bi bi-people'
    }]
  }
]

const Sidebar = ({ showMobilemenu }: { showMobilemenu: any }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        {/* <Nav vertical className='sidebarNav'>
          {
            navigasi.map(navi => {
              return (
                // navi.menu
                <div>
                  <hr />
                  <span className="ms-3 d-inline-block">{navi.menu}</span>
                  <hr />
                  <>
                    {navi.submenu.map((submenu, index) => {
                      return (
                        <>
                          <NavItem key={index} className="sidenav-bg">
                            <Link href={submenu.href}>
                              <a
                                className={
                                  location === submenu.href
                                    ? "text-primary nav-link py-3"
                                    : "nav-link text-secondary py-3"
                                }
                              >
                                <i className={submenu.icon}></i>
                                <span className="ms-3 d-inline-block">{submenu.title}</span>
                              </a>
                            </Link>
                          </NavItem>
                        </>
                      )
                    })}
                  </>
                </div>

              )

            })
          }
        </Nav> */}

        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://wrappixel.com/templates/monster-react-admin/?ref=33"
          >
            Upgrade To Pro
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
