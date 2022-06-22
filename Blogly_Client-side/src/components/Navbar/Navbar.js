import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({children}) => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-transparent px-20">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2 text-2xl font-mono tracking-widest font-semibold">Blogly</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-6 ">

                            {/* <!-- Navbar menu content here --> */}
                            <Link to='/'>Home</Link>
                            <Link to='/allblog'>All Blogs</Link>
                            <Link to='/addblog'>Add Blogs</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/signin'>Sign In</Link>
                            <Link to='/signout'>Sign Out</Link>

                        </ul>
                    </div>
                </div>

                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    {/* <!-- Sidebar content here --> */}
                    <Link to='/'>Home</Link>
                    <Link to='/allblog'>All Blogs</Link>
                    <Link to='/addblog'>Add Blogs</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/signout'>Sign Out</Link>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;