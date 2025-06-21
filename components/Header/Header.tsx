"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchValue);
  };

  const handleClear = () => setSearchValue("");

  const navLinks = (
    <ul className={styles.navigation}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/orders">Заявки</Link>
      </li>
      <li>
        <Link href="/remains">Залишки</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
    </ul>
  );

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <h2 className={styles.logo}>EridonKharkiv</h2>

        {!isMobile && navLinks}

        <div className={styles.actions}>
          {isMobile && (
            <button
              className={styles.iconButton}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Пошук"
            >
              🔍
            </button>
          )}

          {isMobile && (
            <button
              className={styles.iconButton}
              onClick={() => setMenuOpen(true)}
              aria-label="Меню"
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {(searchOpen || !isMobile) && (
        <form
          className={`${styles.searchForm} ${
            !isMobile ? styles.searchDesktop : searchOpen ? styles.show : ""
          }`}
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Пошук…"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
          />
          {searchValue && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Очистити"
            >
              ❌
            </button>
          )}
        </form>
      )}

      {/* Мобильное меню */}
      {isMobile && (
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={() => setMenuOpen(false)}
            aria-label="Закрити меню"
          >
            ✖
          </button>
          {navLinks}
        </nav>
      )}
    </header>
  );
}
