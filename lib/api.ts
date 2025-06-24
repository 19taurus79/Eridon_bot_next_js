import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// const initData = window.Telegram?.WebApp?.initData;
const initData =
  "user=%7B%22id%22%3A548019148%2C%22first_name%22%3A%22%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%22%2C%22last_name%22%3A%22%D0%9E%D0%BD%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE%22%2C%22username%22%3A%22OnyshchenkoSergey%22%2C%22language_code%22%3A%22uk%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2Fqf0qiya3lYZumE5ExiC55ONcmy-5vzP6pZzzBMV92vw.svg%22%7D&chat_instance=-7747710036030047373&chat_type=private&auth_date=1750587751&signature=gaxR2VmSlnC96_woQzcjSppz8fYSnmB7JjQ5FfRBWcIQHANRkYGM2UiYoGMjqREAjJiSYoO-_8CXEg7HZPlfDQ&hash=d25fcb0f2d77b719d228c245b0977542c559b40f758d99cba0f0a3992f533282";
export const getRemains = async () => {
  const { data } = await axios.get("/data/remains", {
    headers: {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": initData,
    },
  });
  return data;
};
export const getOrders = async () => {
  const { data } = await axios.get("/data/orders", {
    headers: {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": initData,
    },
  });
  return data;
};

export const getProductOnWarehouse = async (
  category?: string,
  part_name?: string
) => {
  const { data } = await axios.get("/data/product_on_warehouse", {
    headers: {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": initData,
    },
    params: {
      category,
      part_name,
    },
  });
  return data;
};

export const getClients = async () => {
  const { data } = await axios.get("/data/clients", {
    headers: {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": initData,
    },
  });
  return data;
};
