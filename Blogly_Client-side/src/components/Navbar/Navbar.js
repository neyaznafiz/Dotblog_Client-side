import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css'

const Navbar = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-transparent md:px-20 ">
                    <div>
                        <img src="https://i.ibb.co/RNGY4SB/logo-nav.png" alt="" className='w-[37px]' />
                    </div>
                    <div className="flex-1 px-2 mx-2 text-2xl tracking-widest font-semibold montserrat-alternates">blogly</div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-6 montserrat-alternates font-semibold tracking-wide">

                            {/* <!-- Navbar menu content here --> */}
                            <li>
                                <button data-toggle-theme="wireframe,black" data-act-class="ACTIVECLASS">Theam</button>
                            </li>

                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                            <li>
                                <Link to='/allblog'>All Blogs</Link>
                            </li>

                            <li>
                                <Link to='/addblog'>Add Blogs</Link>
                            </li>

                            <li>
                                {/* <Link to='/about'>About</Link> */}
                            </li>

                            <li>
                                <Link to='/signin'>Sign In</Link>
                            </li>

                            <li>
                                <Link to='/signout'>Sign Out</Link>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 montserrat-alternates font-semibold tracking-wide">

                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theam</button>
                    </li>

                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/allblog'>All Blogs</Link>
                    </li>

                    <li>
                        <Link to='/addblog'>Add Blogs</Link>
                    </li>

                    <li>
                        {/* <Link to='/about'>About</Link> */}
                    </li>

                    <li>
                        <Link to='/signin'>Sign In</Link>
                    </li>

                    <li>
                        <Link to='/signout'>Sign Out</Link>
                    </li>


                </ul>

            </div>
        </div>
    );
};

export default Navbar;