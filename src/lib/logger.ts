import pino from "pino";

// NOTE: pino-pretty を使うと、ログが見やすくなるため以下の方法で実行時に指定する
// https://github.com/vercel/next.js/discussions/11174#discussioncomment-1635
export const logger = pino({
  level: "info",
  timestamp: pino.stdTimeFunctions.isoTime,
  browser: {
    // ブラウザのコンソールにログを出力しないようにする
    write(msg) {},
    // ブラウザやミドルウェアのログをサーバーに送信するための設定
    // https://qiita.com/P-man_Brown/items/0f0e0613fd9bb3e8c99c
    transmit: {
      send: (level, logEvent) => {
        const messages = logEvent.messages;
        const body = JSON.stringify({ level, messages });
        const type = "application/json";
        if (typeof window !== "undefined") {
          const blob = new Blob([body], { type });
          // NOTE: frontはoriginを設定しなくてよい
          navigator.sendBeacon("/api/logging", blob);
          // navigator.sendBeacon("http://localhost:3000/api/logging", blob);
        } else {
          // NOTE: middlewareはserver側で実行されるため(ただし、edge runtime)、localhostでroute handlerを叩く
          void fetch(`http://localhost:3000/api/logging`, {
            method: "POST",
            headers: {
              "Content-Type": type,
            },
            body,
          });
        }
      },
    },
  },
  formatters: {
    level(label, number) {
      return { level: label.toUpperCase() };
    },
  },
});
