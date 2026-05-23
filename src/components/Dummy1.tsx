import { NavLink, Link, Outlet } from "react-router";

const Dummy1 = () => {
  return (<>
    <div>Dummy1</div>
    <nav style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <Link to = '/waySecond'>На первую страницу</Link>
        <NavLink to = '/activated'>На вторую страницу</NavLink>
    </nav>
    <Outlet/>
  </>
  );
}
export default Dummy1;