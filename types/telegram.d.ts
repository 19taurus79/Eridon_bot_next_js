export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        is_premium?: boolean;
      };
    };
    expand(): void;
    close(): void;
    sendData(data: string): void;
    isExpanded: boolean;
    themeParams: {
      bg_color?: string;
      button_color?: string;
    };
    version: string;
  }
}
