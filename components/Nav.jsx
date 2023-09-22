"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession();

  // We need providers - this will allow us to sign in through google and next auth
  const [providers, setProviders] = useState(null);

  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image src="/assets/images/ideaForgeLogo.svg" alt="IdeaForge" width={45} height={45} className="object-contain" />

        <p className="logo_text light_purple_gradient">IdeaForge</p>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href='/create-prompt' className="btn_primary">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>

            <Link href='/profile'>
              <Image src={session?.user.image} width={37} height={37} className="rounded-full user_avatar" alt="Profile" />
            </Link>
          </div>
        ): (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="btn_primary">
                    Sign In
                </button>
              ))
            }
          </>
        )}
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image src={session?.user.image} width={37} height={37} className="rounded-full user_avatar" alt="Profile" onClick={() => setToggleDropDown((prev) => !prev)} />

            {toggleDropDown && (
              <div className="dropdown light_purple_gradient_bg">
                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropDown(false)}>My Profile
                </Link>

                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropDown(false)}>Create Prompt
                </Link>

                <button type="button" onClick={() => {
                  setToggleDropDown(false);
                  signOut();
                }} className="mt-5 w-full btn_primary">Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="btn_primary">
                    Sign In
                </button>
              ))
            }
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav