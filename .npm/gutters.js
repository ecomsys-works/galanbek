import { writeFileSync } from "fs";
import path from "path";

// Абсолютный путь относительно корня проекта
const filename = path.join(process.cwd(), "src", "scss", "boot", "boot-gutters.scss");


// Диапазоны для одного breakpoint
const ranges = [
  { start: 0, end: 49, step: 1 },   // Первый сегмент до 50 включительно
  { start: 50, end: 100, step: 5 }  // Второй сегмент от 50 до 100
];

// Брейкпоинты (mobile first)
const breakpoints = [
  { prefix: "", minWidth: 0 },        // base
  { prefix: "sm", minWidth: 576 },    // sm
  { prefix: "md", minWidth: 768 },    // md
  { prefix: "lg", minWidth: 992 },    // lg
  { prefix: "xl", minWidth: 1200 },   // xl
  { prefix: "xxl", minWidth: 1400 }   // xxl
];

// ----------------------------
// Генерация
// ----------------------------
let content = "";

breakpoints.forEach(bp => {
  let bpContent = "";

  ranges.forEach(range => {
    for (let i = range.start; i <= range.end; i += range.step) {
      const classPrefix = bp.prefix ? `g-${bp.prefix}-${i}` : `g-${i}`;
      const classPrefixX = bp.prefix ? `gx-${bp.prefix}-${i}` : `gx-${i}`;
      const classPrefixY = bp.prefix ? `gy-${bp.prefix}-${i}` : `gy-${i}`;

      bpContent += `
/* -- ${classPrefix} -- */
.${classPrefix}, 
.${classPrefixX} {
  --bs-gutter-x: ${i}px;
}

.${classPrefix}, 
.${classPrefixY} {
  --bs-gutter-y: ${i}px;
}
`;
    }
  });

  // Добавляем media query, если не base
  if (bp.minWidth > 0) {
    bpContent = `@media (min-width: ${bp.minWidth}px) {\n${bpContent}\n}\n`;
  }

  content += bpContent;
});

// ----------------------------
// Запись в файл
// ----------------------------
writeFileSync(filename, content, "utf8");
console.log(`Файл ${filename} успешно создан!`);





