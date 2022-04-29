/**
 * フォントサイズを計算する
 * @param px 表示したいpx数
 */
export function fontSize(px: number): `${number}rem` {
  return `${px / 16}rem`;
}
