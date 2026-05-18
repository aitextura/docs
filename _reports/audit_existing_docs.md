# Audit of Existing AI TEXTURA Documentation
_Date: 2026-05-07_
_Auditor: Task 1 agent (read-only audit)_

---

## 1. Top-level Structure

```
/Users/dmitrij/Downloads/docs-main 3/
├── docs.json                 ← active Mintlify nav config
├── doc.mdx                   ← STALE / OBSOLETE old config (raw JSON inside .mdx, references "AI TEXTURA"
│                                with bad casing "aiTEXTURA", talks about "ru/guides/quick-start", "settings",
│                                "faq_mode", "mcp" — none of which exist in current ru/guides)
├── index.mdx                 ← landing page → links to /en/terms-and-policies & /ru/terms-and-policies
├── quickstart.mdx            ← MISSING at root (only en/quickstart.mdx & ru/quickstart.mdx exist)
├── development.mdx           ← MISSING at root (only en/ & ru/ versions exist)
├── README.md                 ← Mintlify starter-kit boilerplate (not customized for AI TEXTURA)
├── lang-keep-path.js         ← language keep-path helper
├── style.css                 ← empty/minimal
├── temaplte_Docs.json        ← typo-named template
├── favicon.svg
├── MISSION.md / QUESTIONS.md ← mission control files (not part of published docs)
│
├── en/                       ← English docs
│   ├── api-reference/        (introduction.mdx + endpoint/{create,get,delete,webhook}.mdx)
│   ├── changelog/index.mdx
│   ├── channels/             (index, telegram, messengers, amocrm, bittrix24)
│   ├── essentials/           (settings, markdown, code, navigation, images, reusable-snippets) ← MINTLIFY STARTER LEFTOVERS
│   ├── faq/                  (index + 13 topic pages)
│   ├── guides/               (19 pages)
│   ├── terms-and-policies/   (index, offer, terms-of-use, privacy, privacy-consent, promo-consent)
│   ├── development.mdx       ← STARTER LEFTOVER
│   └── quickstart.mdx        ← STARTER LEFTOVER (talks about Mintlify CLI, not AI TEXTURA onboarding)
│
├── ru/                       ← Russian docs (mirror of en/)
│   └── ... (same structure)
│
├── terms-and-policies/index.mdx  ← language-router (en/ru cards)
│
├── ai-tools/                 ← claude-code.mdx, cursor.mdx, windsurf.mdx — STARTER LEFTOVERS, not in docs.json nav
│
├── assets/
│   ├── logo/                 (light.svg, dark.svg)
│   ├── og/                   (docs-cover-1200x630.png)
│   ├── snippets/             (snippet-intro.mdx — Mintlify starter leftover)
│   └── images/
│       ├── *.png             ← legacy hero/topic images (hero.png, hero-light.png, hero-dark.png,
│       │                       glavnaya.png, ii_sotrudniki.png, persona.png, baza_znaniy.png, talanty.png,
│       │                       faq.png, profili.png, rabochee_vremya.png, kanal.png, autodojim_tab.png,
│       │                       bystrye_otvety.png, uvedomleniya.png, checks-passed.png) — UNREFERENCED
│       │                       in any .mdx (only ru/en/screenshots/* are actually referenced)
│       ├── 01_glavnaya.png … 05_talanty.png — UNREFERENCED legacy
│       ├── ru/screenshots/   ← 36 PNGs referenced from ru docs
│       └── en/screenshots/   ← 61 PNGs referenced from en docs
│
├── images/                   ← top-level legacy logos & favicons (favicon.svg, logo_dark.svg,
│                                logo_light.svg, logo_min_dark.svg, logo_min_light.svg).
│                                Not referenced from docs.json (it points to /assets/logo and /favicon.svg)
│
├── public/
│   └── screenshots/          ← EMPTY (target dir for new screenshots in Task 2)
│
├── .claude-flow/, .hive-mind/, .mcp.json, .queen-prompt.txt — orchestration runtime
└── .DS_Store                 ← noise
```

### docs.json declares vs disk

Every page declared in `docs.json` exists on disk. There are NO declared-but-missing files.

Files present on disk but NOT in `docs.json` navigation (effectively unpublished or only reachable by direct link):
- `index.mdx` (root)
- `terms-and-policies/index.mdx` (root)
- `doc.mdx` (root) — obsolete config sketch
- `ru/quickstart.mdx`, `en/quickstart.mdx` — Mintlify starter content
- `ru/development.mdx`, `en/development.mdx` — Mintlify starter content
- `ru/essentials/*.mdx`, `en/essentials/*.mdx` — Mintlify starter content (12 files)
- `ru/api-reference/endpoint/{create,get,delete,webhook}.mdx`, `en/api-reference/endpoint/*.mdx` — sample OpenAPI stubs (8 files)
- `ai-tools/{cursor,claude-code,windsurf}.mdx` — Mintlify writing-helper starter
- `assets/snippets/snippet-intro.mdx`

These are dead weight; they slow Mintlify builds and clutter the repo but do not appear in the rendered nav.

---

## 2. Navigation (docs.json)

`docs.json` (active config — `theme: "maple"`, primary color `#5a4aaa`).

Languages = `en` and `ru`. Each language has 5 tabs with identical structures, mirrored.

### EN tabs / groups / pages

**Tab: "Documentation"** (`book-open`)
- Group **Overview**: `en/guides/dashboard`
- Group **AI Employees** (`robot`): `ai-employees`, `persona`, `knowledge`, `talents`, `faq`, `quick-answers`, `profiles`, `auto-followup`, `working-hours`, `notifications`, `versions`, `additional-settings`
- Group **Connect Channels** (`plug`): `channels/index`, `telegram`, `messengers`, `amocrm`, `bittrix24`
- Group **Communication** (`message-lines`): `chats`, `rules-hub`
- Group **Account** (`gear`): `account-settings`, `finance`, `referral`, `support`

**Tab: "FAQ"** (`circle-question`)
- Group **Frequently Asked Questions**: `index`, `getting-started`, `persona-and-knowledge`, `channels`, `crm-integrations`, `pms-integrations`, `booking`, `ai-behavior`, `dialog-management`, `voice-and-media`, `analytics-and-profiles`, `security-and-access`, `billing`, `troubleshooting`

**Tab: "API Reference"** (`code`) — only `en/api-reference/introduction` (placeholder "Coming soon")

**Tab: "Terms and policies"** (`scale-balanced`)
- Group **Terms and policies**: `index`
- Group **Legal agreements**: `offer`, `terms-of-use`, `privacy`
- Group **Consents**: `privacy-consent`, `promo-consent`

**Tab: "Changelog"** (`list-check`) — only `en/changelog/index`

### RU tabs / groups / pages

Identical mirror, translated tab/group names: "Документация", "ИИ-сотрудники", "Подключение каналов", "Коммуникация", "Аккаунт", "FAQ", "API Справочник", "Условия и политики", "История изменений".

Page slugs in EN and RU are identical (e.g. `ru/guides/auto-followup`, `en/guides/auto-followup`).

### Top-level navigation
`navigation.pages` declares one root page: `terms-and-policies` → `/terms-and-policies` (the language-router landing).

### Navbar / SEO
- Navbar primary button: "Dashboard" → `https://app.aitextura.com`
- OG cover: `/assets/og/docs-cover-1200x630.png`
- Canonical: `https://docs.aitextura.com`

---

## 3. Page Inventory — RU

(Format: path | title | sectionH2 count and topics | components | length)

### Top-level / orphan
| Path | Title | Notes |
|---|---|---|
| `index.mdx` | "Welcome" | 13 lines, language-router with 2 `<Card>` in `<Columns>` |
| `terms-and-policies/index.mdx` | "Terms and policies" | 12 lines, language-router with `<Columns>` & `<Card>` |
| `doc.mdx` | (none) | 248 lines, OBSOLETE old `docs.json` content embedded as MDX — should be deleted |
| `ru/quickstart.mdx` | "Quickstart" | 80 lines, **Mintlify starter** (talks about "Clone your docs", `mint dev` etc.) — NOT real product quickstart |
| `ru/development.mdx` | "Development" | 107 lines, **Mintlify starter** |
| `ru/essentials/*.mdx` | various | 6 files, all **Mintlify starter docs about MDX/Markdown** — not product content |

### ru/guides/ (19 pages, all in nav)

| Path | Title | Sections (H2) | Components | Lines |
|---|---|---|---|---|
| `dashboard.mdx` | "Главная (Рабочий стол)" | Переключатель периода; Карточки метрик; Линейный график; Баланс и слова; Как пользоваться рабочим столом; Частые вопросы | Frame+img, CardGroup/Card×4, Tip, Warning, Steps, AccordionGroup/Accordion | 115 |
| `ai-employees.mdx` | "ИИ сотрудники" | Таблица сотрудников; Создание; Вкладки настройки; Включение/выключение; Меню действий; Частые вопросы; Лучшая практика | Frame+img, CardGroup×4, Steps, Tip, Accordion, Warning, Note | 147 |
| `persona.mdx` | "Персона — инструкция для ИИ-сотрудника" | Как устроен редактор; Три типа блоков; Вложенность; Перемещение; Импорт; Специальные блоки; XML-редактор; Обращение к Профилям; Тестирование; Версии; Частые ошибки | Frame+img, CardGroup×4, Steps (Role/Tone/Instructions), Warning, Info, AccordionGroup, Tip, Note | 234 |
| `knowledge.mdx` | "Знания и База знаний" | Два места работы; «Знания» хранилище (+интерфейс/папки/создание/фильтрация); «База знаний» вкладка; 4 способа добавить; Обновление; Сводная таблица; Примеры; Рекомендации; Частые вопросы | Frame+img, CardGroup×4, Warning, Info, Steps, Tip, Accordion×7 | 356 |
| `talents.mdx` | "Таланты" | Каталог; Две секции; Топ-таланты; Подключение; Параметры; Несколько экземпляров; Создание собственного; Связь с Персоной; Примеры; На что обратить внимание; Частые вопросы | Frame+img, CardGroup×4, AccordionGroup, Steps, Tip, Warning | 269 |
| `faq.mdx` | "FAQ / Самообучение" | Как работает; Статусы; Включение; Обработка; Строгий режим; FAQ vs Быстрые ответы; Примеры; Частые вопросы | Frame+img, CardGroup×4, Steps×3, Tip, Warning, Note, Accordion×5 | 169 |
| `quick-answers.mdx` | "Быстрые ответы" | Когда использовать; Отличие от FAQ; 5 типов действий; Главный вопрос; Кнопка «Упростить»; Доп параметры; Пошаговые инструкции; Приоритет; Рекомендации; Связь; Частые вопросы | Frame+img, CardGroup×4, Warning, Tip, Note, Steps×4, AccordionGroup×7 | 289 |
| `profiles.mdx` | "Профили" | Настройка полей (режим, типы, параметры, добавление, примеры); Аналитика; Использование в Персоне; Частые вопросы | Frame+img, CardGroup×4, Note, Tip, Warning, Steps, Accordion×5 | 201 |
| `auto-followup.mdx` | "Автодожим — автоматические follow-up напоминания" | Панель мониторинга; Настройка (включение, цепочка, параметры, как работает, пошаговая, пример); Рекомендации; Частые вопросы | **NO Frame at top — opens with Warning instead**; CardGroup×4, Frame+img mid-page, Tip, Note, Steps×2, Accordion×9 | 209 |
| `working-hours.mdx` | "Рабочее время" | Структура; Рабочая неделя (часовой пояс, расписание, пресеты); Особые дни; Поведение вне рабочего времени; Пошаговые; Все параметры; Связь; Частые вопросы | Frame+img, CardGroup×4, Note, Warning, Tip, Steps×4, Accordion×8 | 260 |
| `notifications.mdx` | "Уведомления" | Структура; Каналы доставки (Telegram, вебхук); Триггеры (шаблоны, создание, параметры, условие, доп. данные, действие); Стартовые триггеры; Примеры; Связь; Сводная таблица; Частые вопросы | Frame+img, CardGroup×4, Warning, Steps×3, Tip×4, Note, AccordionGroup (4+3+8 accordions) | 292 |
| `versions.mdx` | "Версии" | Принцип; Интерфейс; Просмотр истории; Восстановление; Что сохраняется; Примеры; Частые вопросы; Лучшая практика | Frame+img (inline), CardGroup×4, Tip, Steps×2, Warning, Note×3, Accordion×6 | 175 |
| `additional-settings.mdx` | "Дополнительные настройки" | Язык ответа; Лимит слов; Распознавание изображений; Голосовые настройки; Команды сотрудника; Поведение при вмешательстве; Сводная таблица; Частые вопросы | Frame+img, CardGroup×4, Note, Warning, Steps×6, Tip×6, Accordion×6 | 265 |
| `chats.mdx` | "Чаты — центр управления диалогами" | Зачем; Обзор интерфейса; Поиск/фильтры; Вмешательство менеджера; Команды управления; Эскалация; Детали диалога; Связь; Практические советы; Частые вопросы | Frame+img, Note, CardGroup×4, AccordionGroup, Tip, Steps×3, Warning | 246 |
| `rules-hub.mdx` | "Хаб правил" | Структура; Заготовки; Мои правила; Команда «/»; Точки входа; Действия с блоками; Частые вопросы | Frame+img, CardGroup×4, Steps×4, Tip, Note, Warning, Accordion×6 | 207 |
| `account-settings.mdx` | "Настройки аккаунта" | Как попасть; 1.Общие; 2.Настройки аккаунта; 3.Безопасность; 4.Интеграции; 5.Экспериментальные; Частые вопросы | Frame+img, CardGroup×4, Steps×4, Tip×7, Warning×3, AccordionGroup×8 | 245 |
| `finance.mdx` | "История списаний" | Обзор; Баланс; Режим бонусов; Сводные; Фильтры; Аналитика×4; Таблица; Ценообразование; Советы; Пошаговые; Частые вопросы | Frame+img, CardGroup×4, Warning, Tip×3, Steps×4, AccordionGroup×8 | 286 |
| `referral.mdx` | "Партнёрская программа" | Реферальный код; Как работает; Счётчик; Два способа; Где делиться; Важные детали; Частые вопросы | Frame+img, CardGroup×4, Tip×2, Steps, Note, Warning, AccordionGroup×5 | 131 |
| `support.mdx` | "Поддержка" | Как создать тикет; Переписка; Статусы; Поиск; Время ответа; Советы; Частые вопросы | Frame+img, CardGroup×4, Steps, Tip×2, Note, Warning, Info, AccordionGroup×6 | 157 |

### ru/channels/ (5 pages)

| Path | Title | Sections | Components | Lines |
|---|---|---|---|---|
| `channels/index.mdx` | "Каналы" | Что такое канал; Поддерживаемые; Типы подключений; Интерфейс; Настройки (буфер); Подключение к сотруднику; Перенос; Важные правила; Частые вопросы | CardGroup×4, Frame+img, Warning×2, Tip×3, Steps×2, Accordion×6 | 190 |
| `channels/telegram.mdx` | "Telegram" | Telegram-бот (Шаг 1-3); Личный аккаунт; Бот vs Личный; Голосовые сообщения | Steps×3, Warning×2, Tip | 117 |
| `channels/messengers.mdx` | "WhatsApp, VK, Instagram, Avito и другие мессенджеры" | Поддерживаемые; Обзор платформ (Umnico/Wazzup/Kommo/Salebot/SendAPI); Как подключить (Шаг 1-2); Какой выбрать; Частые вопросы | Accordion×5, Steps×2, Warning, Tip×2, Note | 137 |
| `channels/amocrm.mdx` | "amoCRM" | Что даёт; Подключение; Где взять токен; Kommo | Steps×3, Tip×2 | 80 |
| `channels/bittrix24.mdx` | "Bitrix24" | Что даёт; Шаг 1 вебхук; Шаг 2 подключение; Настройка внутри Bitrix24 | Steps×2, Tip | 68 |

### ru/faq/ (14 pages, all FAQ-style with `<AccordionGroup>` + uppercased `## ХЕДЕР`)

| Path | Title | Section count | Notes |
|---|---|---|---|
| `index.mdx` | "FAQ — Частые вопросы" | (router) | Info + 13× Card grid | 52 |
| `getting-started.mdx` | "Начало работы: регистрация и настройка" | 2 sections, ~14 accordions | 111 |
| `persona-and-knowledge.mdx` | "Персона, база знаний и обучение" | 4 sections (Persona / БЗ / Самообучение / Быстрые ответы), ~30 accordions | 264 |
| `channels.mdx` | "Подключение каналов связи" | 7 sections (Telegram, WhatsApp, Instagram, ВКонтакте, виджет, почта, MAX), contains 2 raw youtube URLs | 223 |
| `crm-integrations.mdx` | "Интеграция с CRM и агрегаторами" | 3 sections (amoCRM, Bitrix24, Umnico) | 123 |
| `pms-integrations.mdx` | "Интеграция с PMS и другие таланты" | 4 sections (Travelline, Bnovo, MEWS, прочее) | 149 |
| `booking.mdx` | "Бронирование через ИИ" | 1 section, 10 accordions | 55 |
| `ai-behavior.mdx` | "Поведение ИИ: ответы и язык общения" | 2 sections (нестандартные, язык) | 93 |
| `dialog-management.mdx` | "Управление диалогами и уведомления" | 4 sections (история, пауза, уведомления, буфер) | 142 |
| `voice-and-media.mdx` | "Голос, звонки, фото и файлы" | 2 sections | 79 |
| `analytics-and-profiles.mdx` | "Аналитика, профили и автодожим" | 3 sections (профили, автодожим, рабочее время) | 96 |
| `security-and-access.mdx` | "Безопасность и несколько ИИ-сотрудников" | 2 sections | 76 |
| `billing.mdx` | "Оплата, документы и партнёрская программа" | 3 sections | 98 |
| `troubleshooting.mdx` | "Диагностика, версии и нестандартные вопросы" | 3 sections (incl. "Есть ли обучающие видео?" with raw YouTube URL) | 176 |

### ru/terms-and-policies/ (6 pages — long legal text, mode:wide)
| File | Title | Lines |
|---|---|---|
| `index.mdx` | "Условия и политики" | 60 (Card hub) |
| `offer.mdx` | "Публичная оферта" | 317 |
| `terms-of-use.mdx` | "Пользовательское Соглашение" | 76 |
| `privacy.mdx` | "Политика конфиденциальности" | 230 |
| `privacy-consent.mdx` | "Согласие на обработку ПДн" | 78 |
| `promo-consent.mdx` | "Согласие на получение рекламной рассылки" | 35 (no description) |

### ru/changelog/index.mdx
- "История обновлений" — single `<Update label="24 Октября 2025" tags={[...]}>` block. 71 lines. Self-Learning, Partnership, QuickStart V2, Auto-cleanup, Schedule, Tool selection. Only ONE entry — no history of prior releases.

### ru/api-reference/
- `introduction.mdx` — 6 lines, body = `<Note>Скоро</Note>` (placeholder)
- `endpoint/{create,get,delete,webhook}.mdx` — Mintlify "plants" demo OpenAPI stubs, 4 lines each. NOT in nav.

---

## 4. Page Inventory — EN

EN is a structural mirror of RU. Pairings are 1:1 with matching sections/headings. Spot-checked differences:

| Path | Title | Lines (EN) | Lines (RU) |
|---|---|---:|---:|
| `en/guides/dashboard.mdx` | "Dashboard (Home)" | 113 | 115 |
| `en/guides/ai-employees.mdx` | "AI Employees" | 145 | 147 |
| `en/guides/persona.mdx` | "Persona — Core Instructions for Your AI Employee" | 232 | 234 |
| `en/guides/knowledge.mdx` | "Knowledge and Knowledge Base" | 354 | 356 |
| `en/guides/talents.mdx` | "Talents" | 269 | 269 |
| `en/guides/faq.mdx` | "FAQ / Self-Learning" | 167 | 169 |
| `en/guides/quick-answers.mdx` | "Quick Answers" | 287 | 289 |
| `en/guides/profiles.mdx` | "Profiles" | 199 | 201 |
| `en/guides/auto-followup.mdx` | "Auto Follow-up — Automatic Reminder Messages" | 207 | 209 |
| `en/guides/working-hours.mdx` | "Working Hours" | 258 | 260 |
| `en/guides/notifications.mdx` | "Notifications" | 290 | 292 |
| `en/guides/versions.mdx` | "Versions" | 176 | 175 |
| `en/guides/additional-settings.mdx` | "Additional Settings" | 266 | 265 |
| `en/guides/chats.mdx` | "Chats -- Dialog Management Center" | 246 | 246 |
| `en/guides/rules-hub.mdx` | "Rules Hub" | 208 | 207 |
| `en/guides/account-settings.mdx` | "Account Settings" | 246 | 245 |
| `en/guides/finance.mdx` | "Billing History" | 287 | 286 |
| `en/guides/referral.mdx` | "Referral Program" | 132 | 131 |
| `en/guides/support.mdx` | "Support" | 158 | 157 |
| `en/channels/index.mdx` | "Channels" | 190 | 190 |
| `en/channels/telegram.mdx` | "Telegram" | 117 | 117 |
| `en/channels/messengers.mdx` | "WhatsApp, VK, Instagram, Avito & Other Messengers" | 137 | 137 |
| `en/channels/amocrm.mdx` | "amoCRM" | 80 | 80 |
| `en/channels/bittrix24.mdx` | "Bitrix24" | 68 | 68 |
| `en/faq/*.mdx` | English FAQ | 52 / 111 / 264 / 223 / 123 / 149 / 55 / 93 / 142 / 79 / 96 / 76 / 98 / 176 | matched |
| `en/changelog/index.mdx` | "Product updates" | 79 | 71 |
| `en/api-reference/introduction.mdx` | "Introduction" | 6 (`<Note>Coming soon</Note>`) | 6 |
| `en/terms-and-policies/offer.mdx` | "Offer" (description: "Description of your new file." ← placeholder) | 300 | 317 |
| `en/terms-and-policies/terms-of-use.mdx` | "Terms of use" | 70 | 76 |
| `en/terms-and-policies/privacy.mdx` | "Privacy Policy" | 243 | 230 |
| `en/terms-and-policies/privacy-consent.mdx` | "Consent to Personal Data" | 72 | 78 |
| `en/terms-and-policies/promo-consent.mdx` | "Consent to Receive Promotional Mailings" | 32 | 35 |

EN sections match RU sections 1:1 in heading order; all the same `Frame`, `CardGroup`, `Steps`, `Accordion` etc. components are present in the same positions. EN screenshots reference `/assets/images/en/screenshots/<name>_1.png` (some pages reference `_2`, `_3` variants — see Section 7).

---

## 5. RU↔EN Parity

### Pages that exist in both languages — 100% of nav-listed pages
All 49 pages in the EN nav have a matching RU counterpart and vice versa. No nav-level orphan exists.

### Structural parity inside pages
- Section heading order is identical EN/RU.
- Component usage (Frame, Steps, Accordion etc.) is mirrored.
- Internal cross-link `href` paths are language-prefixed correctly (RU pages link to `/ru/...`, EN to `/en/...`).

### Divergences / minor asymmetries

| Aspect | RU | EN |
|---|---|---|
| `terms-and-policies/offer.mdx` description | "Договор публичной оферты AI TEXTURA" | "Description of your new file." (PLACEHOLDER, never replaced) |
| `terms-and-policies/promo-consent.mdx` | has no `description` field; icon `file-lines` | has `description`; icon NOT specified in frontmatter snippet |
| Changelog | 71 lines, 1 entry (24 Окт 2025) | 79 lines, 1 entry (Oct 24, 2025) — slight wording differences |
| `troubleshooting.mdx` accordion "Are there tutorial videos?" | `{Подключение Telegram: https://www.youtube.com/watch?v=GXSxWdkHkVg}` raw URL | same raw URL in EN |
| `faq/channels.mdx` Telegram-personal-account | RU has `Видео-инструкция: https://www.youtube.com/watch?v=GXSxWdkHkVg` | EN has `Video guide: https://www.youtube.com/watch?v=GXSxWdkHkVg` |
| `auto-followup.mdx` opens differently from siblings | RU: opens with `<Warning>` THEN CardGroup, no top Frame | EN: same pattern |

### Pages NOT in either RU or EN nav (assets but no published surface)
- All `essentials/*` (12 files)
- All `api-reference/endpoint/*` (8 files)
- `quickstart.mdx`, `development.mdx` (4 files)

These are starter-kit ballast — see Section 8.

---

## 6. Style Conventions

### Frontmatter shape

Most product pages use:
```yaml
---
title: "Page Title"
description: "1-2 sentence summary used as page subtitle and OG description."
---
```

Legal pages add:
```yaml
icon: "file-lines"   # or "scale-balanced", "file-certificate"
iconType: "duotone"
mode: "wide"
```

`sidebarTitle` is used **only on `channels/amocrm.mdx`** (RU & EN) — explicit `sidebarTitle: "amoCRM"`. Everywhere else `title` doubles as sidebar label.

`rss: true` only on `changelog/index.mdx` (both languages).

API reference endpoint stubs use:
```yaml
title: 'Create Plant'
openapi: 'POST /plants'
```

### MDX components in active use (across product pages)

| Component | Frequency | Typical use |
|---|---|---|
| `<Frame>` + `<img>` | every guide opens with one | hero screenshot at top, also mid-page screenshots (auto-followup, knowledge) |
| `<CardGroup cols={2}>` + `<Card title="..." icon="..." href="...">` | every guide has one near the top | "see also" cluster of 4 related sections |
| `<Steps>` + `<Step title="...">` | almost every guide | numbered procedures |
| `<Accordion title="...">` and `<AccordionGroup>` | every guide and every FAQ | FAQ-style Q&A, "show me more" disclosures |
| `<Tabs>` + `<Tab>` | not used in any product page (only in essentials starter content) | — |
| `<Tip>`, `<Warning>`, `<Note>`, `<Info>`, `<Check>` | very heavy use | inline callouts |
| `<Update label="..." tags={[...]} description="...">` | only in changelog | release note block |
| `<Columns cols={2}>` | only in `index.mdx` & `terms-and-policies/index.mdx` (root routers) | language picker |
| `<iframe>` (YouTube embed) | NOT used in any product page; only documented in `essentials/images.mdx` boilerplate | — |
| `<video>` HTML element | NOT used anywhere | — |

### Image conventions

- Pattern: `<Frame><img src="/assets/images/{lang}/screenshots/{slug}_{N}.png" /></Frame>`
- Filenames are snake_case English (e.g. `auto_followup_1.png`, `working_hours_2.png`) — same names in RU and EN screenshot folders.
- Image is always the first content block under the `CardGroup` (or before it in some files).
- No `alt` text on any `<img>` — accessibility gap.
- `<Frame>` is sometimes inline (`<Frame><img .../></Frame>`) and sometimes multi-line (`<Frame>\n  <img .../>\n</Frame>`) — inconsistent but both render.

### Video / iframe pattern (current state)

There is NO product video embedded anywhere. The only YouTube URLs in actual content are:
- `ru/faq/troubleshooting.mdx` line 124 + `en/faq/troubleshooting.mdx` line 124 — raw text URL `youtube.com/watch?v=GXSxWdkHkVg`
- `ru/faq/channels.mdx` line 25 + `en/faq/channels.mdx` line 25 — raw text URL same.

Both are bare links inside accordion bodies, not embedded players. The Mintlify-recommended embed pattern in `essentials/images.mdx` is:
```html
<iframe
  className="w-full aspect-video rounded-xl"
  src="https://www.youtube.com/embed/<id>"
  title="YouTube video player"
  ...
></iframe>
```
That iframe pattern is a sensible convention to adopt for the 11 new videos.

### Callouts

- `<Tip>` — quick best-practice nudge.
- `<Warning>` — risk / data loss / expensive operation.
- `<Note>` — neutral aside.
- `<Info>` — same as Note, less common.
- All callouts contain plain text + occasional `**bold**`, `[links](...)`, and inline `code`.

### Code blocks

- Triple-backtick fenced with language tag (`bash`, `json`, `xml`, `yaml`).
- Used very sparingly in product pages (mostly XML-editor section in `persona.mdx` and snippet examples).

### Tables

- Markdown pipe-tables, used in `additional-settings.mdx`, `working-hours.mdx`, `finance.mdx`, `notifications.mdx`, `terms-and-policies/privacy.mdx`. Plain `| col | col |` — no Mintlify-specific extensions.

### Tone

- RU: friendly-professional, "Вы" formal, second person, lots of imperative ("Откройте", "Нажмите", "Сохраните"), short sentences, peppered with `<Tip>` and rhetorical "Что произойдёт, если…" accordions.
- EN: same register, polite imperative, "you", parallel structure to RU.
- Both languages use em-dash `—` heavily, double-quotes for UI labels („...» in RU, "..." in EN).

### Internal cross-links

- Always absolute paths starting with `/ru/...` or `/en/...`.
- No relative `../` paths.
- Hub-and-spoke: each guide opens with 4 related-page Cards.

---

## 7. Assets Inventory

### `/assets/`
| Subfolder | Count / contents |
|---|---|
| `logo/` | 2 SVGs: `light.svg`, `dark.svg` (referenced from `docs.json`) |
| `og/` | 1 PNG: `docs-cover-1200x630.png` (referenced from `docs.json` SEO config) |
| `snippets/` | 1 leftover MDX `snippet-intro.mdx` (Mintlify boilerplate) |
| `images/*.png` (root of `assets/images`) | 22 PNGs, all UNREFERENCED in the rendered docs (legacy hero/topic art) — see list below |
| `images/ru/screenshots/` | 36 PNGs referenced by RU guides |
| `images/en/screenshots/` | 61 PNGs referenced by EN guides |

### Screenshot file inventory (per language)

**EN screenshots (61 files):** account_settings_{1..3}, additional_{1..3}, ai_employees_{1..3}, auto_followup_{1..3}, channel_{1..3}, chats_{1..3}, dashboard_{1..3}, faq_{1..3}, finance_{1..3}, followup_1, knowledge_{1..3}, knowledge_standalone_{1..3}, notifications_{1..3}, persona_{1..3}, profiles_{1..3}, profiles_agent_{1..3}, quick_answers_{1..3}, referral_1, rules_hub_{1..2}, support_1, talents_{1..3}, versions_{1..2}, working_hours_{1..3}.

**RU screenshots (36 files):** account_settings_{1..3}, additional_1, ai_employees_{1..3}, auto_followup_1, channel_1, chats_{1..3}, dashboard_1, faq_1, finance_{1..3}, followup_1, knowledge_{1..2}, knowledge_standalone_{1..3}, notifications_1, persona_{1..3}, profiles_{1..3}, profiles_agent_1, quick_answers_1, referral_1, rules_hub_{1..2}, support_1.

**Asymmetry:** RU has only 36 screenshots; EN has 61. RU is missing `additional_2`, `additional_3`, `auto_followup_2`, `auto_followup_3`, `channel_2`, `channel_3`, `dashboard_2`, `dashboard_3`, `faq_2`, `faq_3`, `knowledge_3`, `notifications_2`, `notifications_3`, `profiles_agent_2`, `profiles_agent_3`, `quick_answers_2`, `quick_answers_3`, `talents_1`, `talents_2`, `talents_3`, `versions_1`, `versions_2`, `working_hours_1`, `working_hours_2`, `working_hours_3`. **However**, RU `.mdx` files reference `talents_1`, `versions_1`, `working_hours_1`, `auto_followup_1`, `notifications_1`, `quick_answers_1`, `dashboard_1`, `additional_1`, `channel_1`, `faq_1`, `profiles_agent_1` — i.e. the `_1` of each. Several of these `_1` files are **missing** from `assets/images/ru/screenshots/`:
  - `talents_1.png` — referenced by `ru/guides/talents.mdx` line 10 ✗ MISSING
  - `versions_1.png` — referenced by `ru/guides/versions.mdx` line 8 ✗ MISSING
  - `working_hours_1.png` — referenced by `ru/guides/working-hours.mdx` line 9 ✗ MISSING

Quick double-check of the RU folder listing earlier confirms `talents_*`, `versions_*`, `working_hours_*` are absent from `assets/images/ru/screenshots/`. **These produce broken images on the RU pages right now.** (See Section 8.)

### Other unreferenced legacy art in `assets/images/`
`01_glavnaya.png`, `02_ii_sotrudniki.png`, `03_persona.png`, `04_baza_znaniy.png`, `05_talanty.png`, `autodojim_tab.png`, `baza_znaniy.png`, `bystrye_otvety.png`, `checks-passed.png`, `faq.png`, `glavnaya.png`, `hero.png`, `hero-dark.png`, `hero-light.png`, `ii_sotrudniki.png`, `kanal.png`, `persona.png`, `profili.png`, `rabochee_vremya.png`, `talanty.png`, `uvedomleniya.png`. None referenced from any `.mdx`.

### `/images/` (root)
5 SVG files (favicon, logo_dark, logo_light, logo_min_dark, logo_min_light). Not referenced from `docs.json` (which uses `/assets/logo/` and `/favicon.svg` at root). Effectively unused.

### `/public/screenshots/`
Empty directory. Per `QUESTIONS.md` this is the agreed target location for new screenshots in Task 2.

---

## 8. Already-Visible Gaps

### Critical (renders broken)
1. **Broken RU hero images** — `ru/guides/talents.mdx`, `ru/guides/versions.mdx`, `ru/guides/working-hours.mdx` reference screenshot files that do not exist in `assets/images/ru/screenshots/`. Replacement images are needed for Task 2.
2. **`en/terms-and-policies/offer.mdx`** has placeholder description `"Description of your new file."` — visible in OG/SEO meta and possibly in nav previews.

### Stub / placeholder pages
3. **API Reference (both languages)** — only an `introduction.mdx` saying "Coming soon" / "Скоро". Mission requires no API content per audit, but it sits in nav as an empty tab.
4. **Changelog (both languages)** — only ONE entry from 24 Oct 2025. No prior history. Mission may want backfill or restructure.

### Repository hygiene (does not break renders, but is dead weight)
5. **`doc.mdx` at root** — obsolete docs.json sketch, references nonexistent pages (`ru/guides/quick-start`, `ru/guides/settings`, `ru/guides/faq_mode`, `ru/guides/mcp`). Should be deleted.
6. **`ru/quickstart.mdx`, `en/quickstart.mdx`, `ru/development.mdx`, `en/development.mdx`** — Mintlify starter content unrelated to AI TEXTURA. Not in nav, but discoverable via direct URL.
7. **`ru/essentials/*`, `en/essentials/*`** — 12 Mintlify "how to write docs" starter files. Not in nav.
8. **`ai-tools/{cursor,claude-code,windsurf}.mdx`** — 3 Mintlify writing-helper files. Not in nav.
9. **`ru/api-reference/endpoint/*`, `en/api-reference/endpoint/*`** — 8 sample "plants" OpenAPI stubs. Not in nav.
10. **`temaplte_Docs.json`** — typo-named template at root.
11. **`assets/snippets/snippet-intro.mdx`** — Mintlify starter.
12. **`/images/` (root)** — 5 unused logo/favicon SVGs.
13. **`assets/images/*.png` (root, 22 files)** — legacy hero art unreferenced.
14. **`README.md`** — generic Mintlify starter readme, not updated for AI TEXTURA.

### Content gaps relative to mission
15. **No videos embedded.** All 11 mission videos need placement. There are 2 raw YouTube URLs already in FAQ (`troubleshooting.mdx`, `channels.mdx`) — these should be either upgraded to proper `<iframe>` embeds or replaced with the canonical mission videos.
16. **No `alt` attributes** on any `<img>` — accessibility gap.
17. **No mention** of the following platform features that mission video list implies exist:
    - "Палец вниз" feedback in chats (video: I6ovIko1GNQ) — `chats.mdx` does not document this.
    - "Уведомления в Bitrix24" specifically (video: 9IsmdbQ7Dfc) — neither `notifications.mdx` nor `channels/bittrix24.mdx` covers Bitrix24-specific notification routing.
    - "ИИ для сети отелей / переключение между ИИ" (video: qNRnekKcBFU) — exists partially as `faq/security-and-access.mdx` accordion "Как реализовать переключение между ИИ-сотрудниками в одном диалоге?" and `quick-answers.mdx` action "Перевести на другой ИИ" / "Получить ответ от другого ИИ", but no dedicated guide page or hotel-network case study.
    - "Создать ИИ-сотрудника и подключить к CRM за 30 мин" (video: jsGSyJj9qN8) — there is no top-level "30-min onboarding" / "Quick start" page for AI TEXTURA in nav. The starter `quickstart.mdx` is generic Mintlify content and is not in the nav.
18. **No "Quickstart" / "Getting Started" landing** in the actual product nav. `Overview` group only contains `dashboard`. New users land on Dashboard rather than a guided start.
19. **No "Bitrix24 — назначение ответственных" content** (video: d8ZT_BM2K0A). `channels/bittrix24.mdx` documents only webhook setup; nothing about responsibility assignment in Bitrix24.
20. **PMS-specific guide page is missing.** PMS coverage exists only in `faq/pms-integrations.mdx`. There is no `channels/pms.mdx` or `guides/pms.mdx`. Video RmsnbSfPguQ has nowhere obvious to live.
21. **No "Что делать если ИИ дал неверный ответ"** dedicated guide (video: EOwEEmcnepI). Material is scattered across `faq/ai-behavior.mdx` (10 accordions on incorrect responses) and `guides/faq.mdx` (self-learning) — but no single "if AI answered wrong" walkthrough.

### Smaller anomalies
22. `auto-followup.mdx` (both languages) is the only guide page that does not open with a hero `<Frame>`; it opens with a `<Warning>` callout. Inconsistent with the rest of the corpus.
23. `ru/terms-and-policies/promo-consent.mdx` lacks `description` frontmatter (EN version has it).
24. `channels/amocrm.mdx` is the only page using `sidebarTitle`. Why? Likely a stylistic accident from earlier edits. Either standardize or remove.
25. `<Frame>` tag style varies: inline single-line vs multi-line. Cosmetic, not breaking.
26. `essentials/images.mdx` documents the `<iframe>` pattern but no product page uses it — adopting that pattern for the 11 mission videos will be consistent with platform docs.
27. Both `ru/guides/chats.mdx` (line 140) and EN equivalent contain `Эскалация -- когда сотрудник передает диалог менеджеру` with double-hyphens (`--`) used as em-dashes. Mintlify renders these fine but inconsistent with `—` used elsewhere.

---

## 9. Notes for Update Phase (Task 3 / 4)

### Video → page mapping (recommended placement)

For each video, the **primary RU placement** is given first; the EN equivalent should mirror exactly the same anchor in the same heading section. Use `<iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/<ID>" title="..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` per the convention documented in `essentials/images.mdx`.

| # | Video (RU title) | YouTube ID | Recommended RU page (and EN twin) | Anchor / position | Notes |
|---|---|---|---|---|---|
| 1 | Режим самообучения FAQ | `V1CJmtRQ2gI` | `ru/guides/faq.mdx` (`en/guides/faq.mdx`) | New `## Видео-инструкция` block right after the opening Frame, BEFORE `## Как это работает` | This is the canonical self-learning guide page; the FAQ tab `ru/faq/persona-and-knowledge.mdx` "САМООБУЧЕНИЕ" section can also link to the same embed via Mintlify reusable snippet. |
| 2 | Аналитика и профили | `KOc5gB76GxA` | `ru/guides/profiles.mdx` (`en/guides/profiles.mdx`) | New `## Видео` block under `## Аналитика профилей` | Optionally also embed in `ru/guides/dashboard.mdx` (Overview) as it covers the dashboard piece. |
| 3 | Как назначить ответственных в Bitrix24 | `d8ZT_BM2K0A` | `ru/channels/bittrix24.mdx` (`en/channels/bittrix24.mdx`) | New `## Назначение ответственных в Bitrix24` section appended after `## Настройка внутри Bitrix24` | The current page does not cover this — new section needed. |
| 4 | Как добавить базу знаний | `gagkwzwHFXo` | `ru/guides/knowledge.mdx` (`en/guides/knowledge.mdx`) | New `## Видео-инструкция` block right after the opening Frame, before `## Два места работы с знаниями` | Consider also short link from `ru/faq/persona-and-knowledge.mdx` "БАЗА ЗНАНИЙ" section. |
| 5 | Уведомления | `JNFaKV8LzCQ` | `ru/guides/notifications.mdx` (`en/guides/notifications.mdx`) | New `## Видео` block right after the opening Frame, before `## Структура раздела` | Generic notifications overview. |
| 6 | Как подключить PMS-систему | `RmsnbSfPguQ` | **NEW PAGE** `ru/channels/pms.mdx` (and `en/channels/pms.mdx`) | New page; add to `docs.json` "Подключение каналов" / "Connect Channels" group right after `bittrix24` | No existing PMS page in nav. Alternative: section inside `ru/faq/pms-integrations.mdx`, but it currently lives in FAQ tab not Channels tab. Recommended: create the dedicated guide; PMS deserves it given the hotel focus. |
| 7 | ИИ для сети отелей / переключение между ИИ | `qNRnekKcBFU` | `ru/guides/quick-answers.mdx` section "### 3. Перевести на другой ИИ" + `ru/faq/security-and-access.mdx` accordion "Как реализовать переключение..." | Embed once in the canonical place (`quick-answers.mdx`), link from FAQ accordion | If the orchestration is broader than quick-answers, consider a new `## Сеть отелей: переключение между сотрудниками` block in `ai-employees.mdx`. |
| 8 | Как написать в поддержку (палец вниз) | `I6ovIko1GNQ` | `ru/guides/support.mdx` and `ru/guides/chats.mdx` | In `support.mdx` add `## Как пожаловаться на ответ ИИ (палец вниз)` between `## Как создать новый тикет` and `## Переписка внутри тикета`; in `chats.mdx` add note in `## Эскалация` and link to support | "Палец вниз" feedback flow needs a new explicit subsection — currently undocumented. |
| 9 | Уведомления в Bitrix24 | `9IsmdbQ7Dfc` | `ru/channels/bittrix24.mdx` and/or `ru/guides/notifications.mdx` | Add a new `## Маршрутизация уведомлений в Bitrix24` section in `notifications.mdx` (after `### Telegram` and `### Вебхук (HTTP POST)`); cross-link from `bittrix24.mdx` | |
| 10 | Что делать если ИИ дал неверный ответ | `EOwEEmcnepI` | `ru/faq/ai-behavior.mdx` AND new `## Что делать если ИИ дал неверный ответ` summary section in `ru/guides/faq.mdx` (Self-Learning) | Embed once at the top of `faq/ai-behavior.mdx` (just before "## ПОВЕДЕНИЕ ИИ: НЕСТАНДАРТНЫЕ ОТВЕТЫ И ИХ КОРРЕКТИРОВКА"); cross-link from `guides/faq.mdx` | This is THE remediation video — heavy traffic destination. |
| 11 | Создать ИИ-сотрудника и подключить к CRM за 30 мин | `jsGSyJj9qN8` | **NEW PAGE** `ru/guides/quickstart.mdx` (and `en/guides/quickstart.mdx`) | New page; add as the first item in the "Overview" / "Обзор" group in `docs.json`, BEFORE `dashboard` | Mission-critical onboarding video. The existing `quickstart.mdx` files are Mintlify boilerplate at the wrong path. Either delete those and put a new page at `ru/guides/quickstart.mdx`, or repurpose `ru/quickstart.mdx` and add it to nav. **Recommendation:** new file at `ru/guides/quickstart.mdx`, since the docs convention is to keep product pages under `guides/`. |

### Screenshots needed for Task 2

Already-broken RU references (must be re-captured):
- `ru/guides/talents.mdx` → `talents_1.png`
- `ru/guides/versions.mdx` → `versions_1.png`
- `ru/guides/working-hours.mdx` → `working_hours_1.png`

If we adopt the new pages above, also need:
- `ru/channels/pms.mdx` → `pms_1.png` + supporting screenshots
- `ru/guides/quickstart.mdx` → at minimum a hero screenshot of the QuickStart V2 wizard

If we add new sections (Bitrix24 responsibilities, Bitrix24 notifications, Support thumbs-down), each needs at least one screenshot. RU side will also need top-ups for `additional_2/3`, `auto_followup_2/3`, `channel_2/3`, `dashboard_2/3`, `faq_2/3`, `notifications_2/3` to reach EN parity if we want symmetric "interface walkthroughs". RU is currently visibly thinner.

### Repository cleanup recommended for Task 5
- Delete `doc.mdx` (obsolete config sketch).
- Delete `temaplte_Docs.json`.
- Delete or hide (`.mintlifyignore` if available) the Mintlify starter pages: `ru/quickstart.mdx`, `en/quickstart.mdx`, `ru/development.mdx`, `en/development.mdx`, `ru/essentials/*`, `en/essentials/*`, `ai-tools/*`, `assets/snippets/snippet-intro.mdx`. Re-purpose `quickstart.mdx` only if Task 11 adds a real product quickstart.
- Delete or archive unreferenced `assets/images/*.png` legacy art and `/images/*.svg` legacy logos.
- Delete API endpoint stub files until a real API ships, or keep the placeholder `introduction.mdx` only.
- Update `en/terms-and-policies/offer.mdx` description from "Description of your new file." to a real one (mirror RU).
- Add `description` to `ru/terms-and-policies/promo-consent.mdx`.
- Add `alt` attributes to all `<img>` tags during the rewrite pass.
- Standardize `<Frame>` to single line `<Frame><img src="..." alt="..." /></Frame>` everywhere.
- Either remove the `sidebarTitle` from `channels/amocrm.mdx` or apply the same convention globally.
- Replace bare YouTube URLs in `faq/troubleshooting.mdx` and `faq/channels.mdx` with proper iframe embeds.
- Decide whether to expand the API Reference (and remove the "Coming soon" placeholder) or hide the tab from `docs.json` until ready.

### Style guidelines for Task 3/4 writers

- Open every guide with `<Frame><img src="/assets/images/{lang}/screenshots/{slug}_1.png" alt="{descriptive alt}" /></Frame>` and a `<CardGroup cols={2}>` of 4 related-page Cards.
- After the Frame and CardGroup, add the new `## Видео-инструкция` (RU) / `## Video walkthrough` (EN) section containing the embedded `<iframe>`.
- Section headings: `## H2` for top-level chapters, `### H3` for sub-steps; FAQ tab keeps its UPPERCASE `## ХЕДЕР` convention.
- Every page MUST end with `## Частые вопросы` / `## FAQ` containing an `<AccordionGroup>`.
- Every guide page should cross-link to at least 2 other guide pages within its body, plus the `<CardGroup>` at the top.
- Use `<Tip>` for best-practice nudges, `<Warning>` for irreversible/expensive actions, `<Note>`/`<Info>` for neutral asides.
- Tables: plain pipe markdown, header in bold via `**...**` if emphasis needed.
- Internal links: always `/{lang}/{section}/{slug}`, never relative.
- Maintain RU↔EN structural 1:1 — sections and screenshots in the same order in both languages.

### Final orientation for Task 3/4 agents
- The RU corpus is the **source of truth** for tone and depth (`primary`, per project convention).
- 49 nav-listed pages × 2 languages = 98 pages of in-scope content.
- Total nav-included `.mdx` line count is ~6,400 lines per language.
- Aim to keep new sections under ~300 lines per page; split into a new file if longer.
- Image asset destination for new captures: `/public/screenshots/` per `QUESTIONS.md`. If those land in `/public/screenshots/`, the existing convention `<img src="/assets/images/{lang}/screenshots/...">` will need an addendum to support the new path — confirm with Task 2 / Task 5 agents before mass-rewriting `src` attributes.
