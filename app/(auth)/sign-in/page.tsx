import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={32}
            height={32}
          />

          <h1>ScreenCastly</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  width={20}
                  height={20}
                  key={idx}
                />
              ))}
            </figure>

            <p>
              "I never thought recording my screen would be so easy!
              ScreenCastly has really helped me create great tutorials for my
              students."
            </p>

            <article>
              <Image
                src={"/assets/images/jason.png"}
                alt="user"
                width={64}
                height={64}
                className="rounded-full aspect-square"
              />

              <div>Jason Rivera</div>

              <p>Product Designer at Google</p>
            </article>
          </section>
        </div>

        <p>
          &copy; ScreenCastly {new Date().getFullYear()}. All rights reserved
        </p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href={"/"}>
            <Image
              src={"/assets/icons/logo.svg"}
              alt="logo"
              width={40}
              height={40}
            />
            <h1>ScreenCastly</h1>
          </Link>

          <p>
            Create and share your very first <span>ScreenCastly Video</span> in
            no time!
          </p>

          <button>
            <Image
              src={"/assets/icons/google.svg"}
              alt="google"
              width={24}
              height={24}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>

      <div className="overlay" />
    </main>
  );
};

export default Page;
