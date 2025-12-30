# Needle Engine Test Project

این پروژه یک نمونه از موتور Needle Engine است که با استفاده از Vite ساخته شده. این پروژه شامل کامپوننت‌های سفارشی برای چرخش و رنگ‌آمیزی اشیاء سه‌بعدی است.

## ویژگی‌ها

- **مکعب چرخان**: یک مکعب خاکستری که به طور مداوم حول محور Y می‌چرخد (با استفاده از کامپوننت `Rotate`).
- **سایه‌های تماس**: سایه‌های خودکار برای بهبود جلوه‌های بصری.
- **SceneSwitcher**: امکان بارگذاری و تعویض صحنه‌های مختلف از URLهای ابری.
- **جلوه‌های پس‌پردازش**: شامل Sharpening، Tone Mapping (AgX)، Antialiasing و Bloom.
- **کامپوننت‌های سفارشی**:
  - `Rotate`: چرخش شیء با سرعت قابل تنظیم.
  - `Colorize`: تغییر رنگ شیء به سبز.

## شروع کار

### پیش‌نیازها
- Node.js (نسخه 16 یا بالاتر)
- npm یا yarn

### نصب و اجرا
1. وابستگی‌ها را نصب کنید:
   ```bash
   npm install
   ```

2. پروژه را اجرا کنید:
   ```bash
   npm start
   ```
   این دستور سرور توسعه Vite را راه‌اندازی می‌کند و پروژه را در مرورگر باز می‌کند.

### ساخت برای تولید
```bash
npm run build:production
```

## ساختار پروژه

- `src/main.ts`: فایل اصلی تنظیم صحنه و کامپوننت‌ها.
- `src/scripts/Rotate.ts`: کامپوننت چرخش.
- `src/scripts/Colorize.ts`: کامپوننت رنگ‌آمیزی.
- `assets/`: فایل‌های دارایی‌ها.
- `include/`: فایل‌های اضافی Needle Engine.

## نمونه‌ها و مستندات
- [نمونه‌های Needle Engine](https://engine.needle.tools/samples)
- [مستندات Needle Engine](https://docs.needle.tools)
- [مجموعه Stackblitz Needle Engine](https://stackblitz.com/@marwie/collections/needle-engine)

اگر سؤالی دارید، در [فروم ما](https://forum.needle.tools) مطرح کنید.

## مشارکت
برای مشارکت، لطفاً یک Pull Request ارسال کنید یا در فروم بحث کنید.

## تماس
[Needle Tools](https://needle.tools) • [@NeedleTools](https://twitter.com/NeedleTools) • [فروم](https://forum.needle.tools) • [یوتیوب](https://www.youtube.com/@needle-tools)