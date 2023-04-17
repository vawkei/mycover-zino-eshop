import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      {/* <main style={{ margin: "6rem auto", width: "90%", maxWidth: "45rem" }}> */}
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
