"use client";
import css from "./page.module.css";

import { useEffect, useState } from "react";
type TelegramUser = {
  telegram_id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  is_premium?: boolean;
};
export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const initData = window.Telegram?.WebApp?.initData;
    console.log("initdata :", initData);
    if (!initData) {
      setError("Не удалось получить initData от Telegram");
      return;
    }

    fetch("https://taurus.pp.ua/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ initData }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка авторизации");
        return res.json();
      })
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.error("Auth error:", err);
        setError("Ошибка авторизации");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Загрузка...</div>;

  return (
    <div className={css.container}>
      <h1>Home</h1>
      {user && <p>Ваш Telegram ID: {user.telegram_id}</p>}
      {user && <p>Ваш Username: {user.username}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex
        sapiente perferendis illum, velit culpa saepe architecto suscipit eius
        blanditiis expedita atque ipsum hic laborum doloribus aperiam maxime nam
        facilis! Modi laborum eius expedita unde reiciendis porro accusamus
        perferendis non, repellendus eos aut nostrum autem iusto architecto
        itaque laudantium odio nesciunt eaque doloremque. Reprehenderit eos
        dolores quod voluptas assumenda veritatis?
      </p>
    </div>
  );
}
