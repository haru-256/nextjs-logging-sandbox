import pino from "pino";

// NOTE: pino-pretty を使うと、ログが見やすくなるため以下の方法で実行時に指定する
// https://github.com/vercel/next.js/discussions/11174#discussioncomment-1635
export const logger = pino({
  level: "info",
  timestamp: pino.stdTimeFunctions.isoTime,
  // browser: {
  //   asObject: true, // ブラウザで使用できるような設定
  // },
  // ブラウザのコンソールにログを出力しないようにする
  browser: {
    write(msg) {},
  },
  formatters: {
    level(label, number) {
      return { level: label.toUpperCase() };
    },
  },
});
