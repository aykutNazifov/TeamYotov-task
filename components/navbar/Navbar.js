import styles from "./Navbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);

  const path = useRouter().asPath;

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const addStickyClass = () => {
    if (window.scrollY >= 500) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addStickyClass);

    return () => {
      window.removeEventListener("scroll", addStickyClass);
    };
  }, []);

  return (
    <nav
      className={
        stickyNavbar
          ? `${styles.wrapper} ${styles.shadow}`
          : `${styles.wrapper} `
      }
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Mosaic</Link>
        </div>
        <ul
          className={
            mobileMenu
              ? `${styles.menu} ${styles.menuActive}`
              : `${styles.menu}`
          }
        >
          <li
            className={
              path === "/"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              path === "/about"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={
              path === "/project"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/project">Project</Link>
          </li>
          <li
            className={
              path === "/services"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/services">Services</Link>
          </li>
          <li
            className={
              path === "/team"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/team">Team</Link>
          </li>
          <li
            className={
              path === "/blog"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={
              path === "/contact"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.menuIcon} onClick={handleClick}>
          {" "}
          <AiOutlineMenu />
          MENU
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
