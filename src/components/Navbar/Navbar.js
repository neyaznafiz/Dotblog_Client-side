import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import '../../style/style.css'

const Navbar = ({ children }) => {

    const [show, setShow] = useState("hidden");
    const [dark, setDark] = useState(true)
    const [user] = useAuthState(auth)
    console.log(user);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <div className="drawer drawer-end" data-theme={dark ? "wireframe" : "black"}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-100  md:px-20 fixed-top grid justify-center ">

                    <div className='flex justify-center lg:h-16'>
                        <Link to='/' className='flex items-center'>
                            <div>
                                <img src="https://i.ibb.co/ZB7bvJ9/nav-logo.png" alt="" className='w-[40px] -mt-2' />
                            </div>
                            <div className="flex-1 px-2 mx-2 pt-1 text-4xl tracking-widest font-semibold great-vibes">Dotblog</div>
                        </Link>
                    </div>

                    {/* <div className='border-b w-screen mt-4 lg:mt-0'></div> */}



                    <div className="flex-none lg:hidden">
                        <div className='flex justify-between items-center w-screen h-10'>
                            <label className="swap swap-rotate px-4">

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" /*data-toggle-theme="wireframe,black"*/ onClick={() => setDark(!dark)} />

                                {/* <!-- sun icon --> */}
                                <svg className="swap-on fill-current w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg className="swap-off fill-current w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>

                            <div className='flex items-center mr-2'>

                                <div className='lg:hidden'>
                                    {user &&
                                        <>
                                            <div className="dropdown dropdown-end">
                                                <div
                                                    tabIndex="0"
                                                    className=" m-1"
                                                    onClick={() => {
                                                        show === "hidden" ? setShow("block") : setShow("hidden");
                                                    }}
                                                >
                                                    {user?.photoURL && (
                                                        <img
                                                            src={user?.photoURL}
                                                            className="w-10 h-10 rounded-full"
                                                            alt=""
                                                        />
                                                    )}

                                                    {user?.photoURL === null && (
                                                        <span className="">
                                                            <AiOutlineUser className="border-2 border-black text-black bg-white bg-opacity-50 text-3xl rounded-full -mb-2" />
                                                        </span>
                                                    )}
                                                </div>

                                                <ul tabIndex="0" className={`dropdown-content menu p-2 shadow w-72 bg-white rounded-sm ${show} text-black text-center mt-4`} >
                                                    <div className="grid gap-y-3 pt-7 pb-3">
                                                        <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                                                            <div className="flex justify-center -mt-10">
                                                                {user?.photoURL && (
                                                                    <img
                                                                        src={user?.photoURL}
                                                                        className="w-10 h-10 rounded-full"
                                                                        alt=""
                                                                    />
                                                                )}

                                                                {user?.photoURL === null && (
                                                                    <span className="">
                                                                        <AiOutlineUser className={`text-black border-2 border-base-100 bg-white text-5xl rounded-full`} />
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <p className="pt-3 ">{user?.email}</p>
                                                            </div>
                                                        </div>

                                                        <div className='flex justify-center'>
                                                            <button
                                                                onClick={handleSignOut}
                                                                className="uppercase btn-selection type-4">
                                                                Sign out
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </> 
                                    }
                                </div>

                                <label htmlFor="my-drawer-3" className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 mt-1 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="flex-none hidden lg:block mt-2">
                        <ul className="menu menu-horizontal gap-6 montserrat-alternates font-semibold tracking-wide justify-center flex h-10 ">

                            {/* <!-- Navbar menu content here --> */}
                            <label className="swap swap-rotate">

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" /*data-toggle-theme="wireframe,black"*/ onClick={() => setDark(!dark)} />

                                {/* <!-- sun icon --> */}
                                <svg className="swap-on fill-current w-[34px] h-[34px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg className="swap-off fill-current w-[34px] h-[34px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>

                            <Link to='/' className='type-1 menu-selection'>Home</Link>
                            <Link to='/allblog' className='type-1 menu-selection'>All Blogs</Link>
                            <Link to='/addblog' className='type-1 menu-selection'>Create Blog</Link>
                            {/* <Link to='/about'>About</Link> */}

                            <div>
                                {user ? (
                                    <>
                                        <div className="dropdown dropdown-end">
                                            <div
                                                tabIndex="0"
                                                className=" m-1"
                                                onClick={() => {
                                                    show === "hidden" ? setShow("block") : setShow("hidden");
                                                }}
                                            >
                                                {user?.photoURL && (
                                                    <img
                                                        src={user?.photoURL}
                                                        className="w-10 h-10 rounded-full"
                                                        alt=""
                                                    />
                                                )}

                                                {user?.photoURL === null && (
                                                    <span className="">
                                                        <AiOutlineUser className={`border-2 ${dark? "border-black" : "border-white" } ${dark? "text-black" : "text-white" } text-4xl rounded-full`} />
                                                    </span>
                                                )}
                                            </div>

                                            <ul tabIndex="0" className={`dropdown-content menu p-2 shadow w-72 bg-white rounded-sm ${show} text-black text-center mt-4`} >
                                                <div className="grid gap-y-3 pt-7 pb-3">
                                                    <div className="bg-gray-200 grid justify-center p-4 rounded-sm">
                                                        <div className="flex justify-center -mt-10">
                                                            {user?.photoURL && (
                                                                <img
                                                                    src={user?.photoURL}
                                                                    className="w-10 h-10 rounded-full"
                                                                    alt=""
                                                                />
                                                            )}

                                                            {user?.photoURL === null && (
                                                                <span className="">
                                                                    <AiOutlineUser className={`text-black border-2 border-base-100 bg-white text-5xl rounded-full`} />
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="pt-3 ">{user?.email}</p>
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-center'>
                                                        <button
                                                            onClick={handleSignOut}
                                                            className="uppercase btn-selection type-4">
                                                            Sign out
                                                        </button>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link to='/signin' className='type-1 menu-selection'>Sign In</Link>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>

                {/* <!-- Page content here --> */}
                <div className='mt-[64px] lg:mt-[80px] md:mt-[80px]'>
                    {children}
                </div>


            </div >

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>


                <ul className="menu p-4 mt-14 overflow-y-auto w-60 bg-black bg-opacity-90 text-white montserrat-alternates font-semibold tracking-wide">

                    {/* <!-- Sidebar content here --> */}
                    <Link to='/' className='type-2 mobile-nav-menu-selection flex justify-center'>Home</Link>

                    <Link to='/allblog' className='type-2 mobile-nav-menu-selection flex justify-center'>All Blogs</Link>

                    <Link to='/addblog' className='type-2 mobile-nav-menu-selection flex justify-center'>Create Blog</Link>

                    {/* <Link to='/about'>About</Link> */}
                    {!user &&
                        <Link to='/signin' className='type-2 mobile-nav-menu-selection flex justify-center'>Sign In</Link>
                    }

                </ul>


            </div>
        </div >
    );
};

export default Navbar;