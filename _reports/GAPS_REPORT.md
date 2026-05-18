# GAPS_REPORT.md — стратегический анализ документации AI TEXTURA

_Дата: 2026-05-07_
_Автор: Task 5 (стратегический аналитик), после завершения Task 3 (RU update)_

---

## 0. Контекст

Этот отчёт — итоговый «свежий взгляд» после прохода Task 1 (`audit_existing_docs.md`), Task 2 (`platform_audit.md`) и Task 3 (полное обновление RU). Английская часть (Task 4) была отменена пользователем — это **первая в списке зон, требующая внимания** в следующей сессии.

Текущее состояние RU после Task 3:
- 4 новые страницы (`ru/guides/quickstart`, `ru/guides/broadcast`, `ru/guides/organization`, `ru/channels/pms`).
- Расширены: `chats`, `support`, `talents`, `notifications`, `additional-settings`, `ai-employees`, `dashboard`, `profiles`, `knowledge`, `faq`, `finance`, `account-settings`, `rules-hub`, `bittrix24`, `amocrm`, `channels/index`, `messengers`, `telegram`, `auto-followup`, `versions`, `working-hours`, `persona`, `quick-answers`, `referral` + `faq/ai-behavior`.
- 11 видео встроены через `<iframe>` по mintlify-конвенции.
- 3 ранее сломанных скриншот-ссылки (talents_1, versions_1, working_hours_1) восстановлены через `/public/screenshots/`.
- `docs.json` обновлён: новые страницы добавлены в RU-навигацию.
- EN-навигация и EN-страницы **НЕ ТРОГАЛИСЬ**.

---

## 1. ❗ Главный gap: EN-версия рассинхронизирована с RU

**Приоритет: критический.**

Все улучшения Task 3 выполнены **только в RU**. EN-документация отстаёт минимум на 24 страницы (полное содержание + 11 видео + 4 новые страницы + новые тарифы + палец-вниз flow + Bitrix24 dual-paths и т.д.).

### Что должно быть синхронизировано в следующей сессии (Task 4 deferred)

| Область | RU-страница (источник) | EN-страница (цель) | Действие |
|---|---|---|---|
| Quickstart за 30 мин (новая) | `ru/guides/quickstart.mdx` | `en/guides/quickstart.mdx` | Создать + добавить в `docs.json` (en/Overview) |
| Рассылки (новая) | `ru/guides/broadcast.mdx` | `en/guides/broadcast.mdx` | Создать + добавить в `docs.json` (en/Communication) |
| Организации (новая) | `ru/guides/organization.mdx` | `en/guides/organization.mdx` | Создать + добавить в `docs.json` (en/Account) |
| PMS-каналы (новая) | `ru/channels/pms.mdx` | `en/channels/pms.mdx` | Создать + добавить в `docs.json` (en/Connect Channels) |
| Bitrix24 dual-paths | `ru/channels/bittrix24.mdx` | `en/channels/bittrix24.mdx` | Полная переработка под канал-vs-talent + видео `d8ZT_BM2K0A`, `9IsmdbQ7Dfc` |
| amoCRM dual-paths | `ru/channels/amocrm.mdx` | `en/channels/amocrm.mdx` | Канал vs talent OAuth |
| Чаты (большие изменения) | `ru/guides/chats.mdx` | `en/guides/chats.mdx` | Меню действий, кнопки сообщений, Live чат, индикаторы статуса |
| Поддержка + палец-вниз | `ru/guides/support.mdx` | `en/guides/support.mdx` | Тоггл доступа + 4-step flow + видео `I6ovIko1GNQ` |
| Таланты | `ru/guides/talents.mdx` | `en/guides/talents.mdx` | Полный каталог по категориям + custom MCP |
| Дополнительно (агент) | `ru/guides/additional-settings.mdx` | `en/guides/additional-settings.mdx` | PRO голоса ElevenLabs, команды агента, поведение |
| Уведомления | `ru/guides/notifications.mdx` | `en/guides/notifications.mdx` | Bitrix24 channel, шаблоны, режимы, принудительная пауза + видео `JNFaKV8LzCQ`, `9IsmdbQ7Dfc` |
| Финансы / Биллинг | `ru/guides/finance.mdx` | `en/guides/finance.mdx` | Новые тарифы Starter $100 / Pro $500 / Business $1000 + крипто-метод + 4 графика |
| Хаб правил | `ru/guides/rules-hub.mdx` | `en/guides/rules-hub.mdx` | Полный список заготовок (Role/Tone/Instruction) |
| ИИ сотрудники | `ru/guides/ai-employees.mdx` | `en/guides/ai-employees.mdx` | 3 пути создания + библиотека шаблонов + видео `jsGSyJj9qN8` |
| Дашборд | `ru/guides/dashboard.mdx` | `en/guides/dashboard.mdx` | Виджет «Время ответа» (v2.5.0), контекст-свитчер |
| Профили | `ru/guides/profiles.mdx` | `en/guides/profiles.mdx` | KPI-плашки, сохранённые представления, drag-drop колонок + видео `KOc5gB76GxA` |
| База знаний | `ru/guides/knowledge.mdx` | `en/guides/knowledge.mdx` | Расширенный режим, папки агентов + видео `gagkwzwHFXo` |
| FAQ / Самообучение | `ru/guides/faq.mdx` | `en/guides/faq.mdx` | + видео `V1CJmtRQ2gI` |
| Настройки аккаунта | `ru/guides/account-settings.mdx` | `en/guides/account-settings.mdx` | 7 вкладок, ElevenLabs API, команды агента |
| ai-behavior FAQ | `ru/faq/ai-behavior.mdx` | `en/faq/ai-behavior.mdx` | + видео `EOwEEmcnepI` |
| Сломанные изображения | RU восстановлены | `en/guides/{talents,versions,working-hours}.mdx` | EN-стороне нужно тоже подтянуть `/public/screenshots/...` |

**Рекомендация для Task 4:** запустить рой из ~5 параллельных переводчиков, точно зеркалирующих структуру RU. Поскольку RU теперь — единый source of truth, EN-агенты могут автоматически переводить с RU без необходимости заново аудировать платформу.

---

## 2. Что не раскрыто (по приоритету)

### 2.1 Высокий приоритет

1. **Самообучение — глубокий разбор UI**. На странице `ru/guides/faq.mdx` упоминается «бейдж N записей ждут подтверждения», но **сам интерфейс подтверждения** (как агент показывает FAQ-кандидатов и как менеджер их одобряет/отклоняет) не описан подробно — нужен детальный walkthrough «3 шага от вопроса клиента до записи в FAQ».
2. **Команды агента — в чате как они отправляются**. В `additional-settings.mdx` описано, какие команды есть, и что они настраиваются в `/settings`. Но **как именно их использовать в чате** (например, отправить «/start ИИ» в свой Telegram) — нужен мини-кейс.
3. **Custom MCP — пример реального сервера**. В `talents.mdx` теперь описано, что можно создать кастомный MCP-сервер (SSE/HTTP, Bearer/API/Basic). Но **отсутствует пример** — реальный URL, набор tools, ответы. Нужен минимальный референсный пример: «Custom MCP за 5 минут на FastMCP».
4. **Рассылки `/broadcast` — глубокое описание**. Текущий `broadcast.mdx` — заглушка-плейсхолдер. Нужен полный аудит UI рассылок: поля создания (Имя, Сегмент, Шаблон сообщения, Расписание, Канал), статусы, ограничения, отчётность.
5. **Профили — связка с агентом**. Поле «отрасль бизнеса» / «цель приобретения сервиса» из `50-profiles.png` — кастомные. Как агент **читает** эти поля в Persona (через `{{profile.field}}` или плейсхолдер)? Сейчас в доке намёк есть, но без полного синтаксиса.
6. **Webhook payload (уведомления)**. В `notifications.mdx` описано, что Webhook — один из каналов доставки. Но **формат POST-данных** (JSON-схема) не зафиксирован. Нужно: пример payload, заголовки, retry-политика.
7. **Bitrix24 OpenLines vs Чат-боты**. В `bittrix24.mdx` мы перечислили все 6 прав webhook (CRM/Users/Tasks/Im/Imbot/Openlines). Но **различие** между «Open Lines» (входящие сообщения от клиентов) и «imbot» (бот пишет в групповом чате компании) — не объяснено. Это типичная путаница пользователей Bitrix24.
8. **API Reference**. На обеих языках до сих пор `<Note>Скоро</Note>`. Если API готов — нужно наполнить (Create chat / Get chat / Webhook outbound и т.д.). Если не готов — скрыть таб из `docs.json` до релиза.

### 2.2 Средний приоритет

9. **Чат в Live режиме (`/live/:id`)** — описано базово в `chats.mdx`. Не покрыто: время жизни ссылки, можно ли отозвать, видны ли сообщения после закрытия, авторизация для просмотра.
10. **Аналитика расходов (`/billing/words/history`)** — описаны 4 графика и таблица. Не описано: как фильтровать по агенту/каналу, как экспортировать данные.
11. **Stripe / Klaviyo / прочие e-commerce таланты** — упомянуты в `talents.mdx` как часть каталога, но **отдельных how-to нет**. Возможно, не приоритет, но для отельной/туристической ниши Stripe и SendGrid могут быть запросом.
12. **Push-уведомления (онбординг-модал)** — `02-notification-dialog.png`. Не задокументировано. Минорный gap, но влияет на «первое впечатление» новичка.
13. **Меню профиля → Установить приложение (PWA)** — не описано. Минор.
14. **Сбросить онбординг** в меню профиля — что именно сбрасывается? Не описано.

### 2.3 Низкий приоритет

15. **Панель поддержки `/support-dashboard`** — внутренний инструмент админов. Можно вообще не документировать или дать 1 абзац в админ-секции.
16. **Зен-режим (`Zen Mode`)** — упомянут в `dashboard.mdx`, но отдельной микро-страницы нет. На самом деле достаточно `<Note>` где-нибудь в `account-settings.mdx`, что есть переключатель Pro/Zen.
17. **Changelog в доке** — в платформе `/changelog` показывает v2.5.0 и v2.1.0. В `ru/changelog/index.mdx` — единственная запись от 24 окт 2025. Нужен бэкфилл всей истории релизов с продакт-сайта.
18. **API ElevenLabs — где взять ключ**. В `account-settings.mdx` упомянуто поле «ElevenLabs API key». Минимальный how-to «как получить ключ на elevenlabs.io» был бы полезен.

---

## 3. Где нужны новые видео

Все 11 видео из MISSION.md встроены. Дополнительно рекомендуется снять:

| # | Тема | Где встроить | Длина (рек.) | Приоритет |
|---|---|---|---|---|
| V1 | **Создание организации и приглашение участников** | `ru/guides/organization.mdx` | 3-5 мин | Высокий — сейчас только текст |
| V2 | **Custom MCP за 5 минут** | `ru/guides/talents.mdx` (новая секция) | 5-7 мин | Высокий — мощная фича без видео |
| V3 | **Рассылки `/broadcast` end-to-end** | `ru/guides/broadcast.mdx` | 3-5 мин | Высокий — текущая страница неполная |
| V4 | **Палец вниз — анатомия 4 шагов в реальном кейсе** | `ru/guides/support.mdx` | 4-6 мин | Средний — есть `I6ovIko1GNQ`, но он короткий обзор |
| V5 | **Как агент использует Профили в Persona** | `ru/guides/profiles.mdx` | 3-4 мин | Средний — синтаксис плейсхолдеров |
| V6 | **Webhook-уведомления — пример обработки** | `ru/guides/notifications.mdx` | 3-5 мин | Средний — для разработчиков |
| V7 | **Команды агента в чате (start/stop/reset)** | `ru/guides/additional-settings.mdx` | 2-3 мин | Низкий — короткий кейс |
| V8 | **PRO голоса ElevenLabs — сравнение** | `ru/guides/additional-settings.mdx` | 2-3 мин | Низкий — нишевая |
| V9 | **Расширенный режим базы знаний** | `ru/guides/knowledge.mdx` | 3-4 мин | Средний — чтобы дополнить `gagkwzwHFXo` |
| V10 | **Аналитика расходов — что смотреть и когда тревожиться** | `ru/guides/finance.mdx` | 3-5 мин | Средний — чтения графиков |

---

## 4. Структурные улучшения UX

### 4.1 Навигация (`docs.json`)

1. **«Обзор» теперь имеет Quickstart** ✅ — но название группы стоит переименовать в **«Начало работы»** (RU) / **«Getting Started»** (EN). Сейчас «Обзор» содержит `quickstart` + `dashboard`, что концептуально — onboarding, а не «обзор».
2. **«Подключение каналов» отсутствует ссылка на «Таланты»**. PMS-страница есть в каналах, но Bitrix24/amoCRM-таланты — в `ai-employees/talents`. Логично добавить в группу «Подключение каналов» либо саб-карточку «Что такое талант vs канал», либо включить `ru/guides/talents` как первый пункт (или дублировать ссылку).
3. **API Reference таб виден всем** — несмотря на «Coming soon». Рекомендация: либо скрыть до релиза, либо переименовать в «API (бета)».
4. **Changelog** — добавить версии 2.1.0, 2.5.0 в `ru/changelog/index.mdx` (сейчас только одна устаревшая запись от 24 окт 2025).
5. **Группа «Аккаунт»** — порядок:
   - `organization` (новая) — первая, корректно.
   - `account-settings`
   - `finance`
   - `referral`
   - `support`
   Логично, оставить как есть.
6. **Группа «Коммуникация»** — порядок:
   - `chats`
   - `rules-hub`
   - `broadcast` (новая) — последняя, корректно.

### 4.2 Хлебные крошки и кросс-линки

7. **Каждая страница агент-настроек** должна иметь явную «Связь с другими разделами» внизу (CardGroup из 4 карточек). Сейчас несколько страниц этого не делают (`additional-settings.mdx`, `working-hours.mdx`).
8. **Видео не должны быть единственным якорем** для сложных тем. У каждого embed должен быть текст-summary рядом — на случай, если видео не загрузилось/доступ к YouTube заблокирован.

### 4.3 Скриншоты

9. **Конвенция путей** — сейчас `/public/screenshots/` (89 файлов) и `/assets/images/ru/screenshots/` (36 файлов) сосуществуют. Нужно решить: либо унифицировать всё в одну папку, либо явно описать когда какую использовать. **Рекомендация:** в долгосрочной перспективе перенести 89 PNG из `/public/screenshots/` в `/assets/images/ru/screenshots/` (RU-канон) + симметричный набор в `/assets/images/en/screenshots/` после Task 4. Mass-edit `Edit replace_all` по `.mdx`.
10. **Alt-теги отсутствуют** — почти все `<img>` без `alt`. Аксессибилити-gap. Нужен пасс по всем pages.
11. **RU/EN screenshot parity** — RU имеет 36 файлов, EN — 61. После Task 4 нужно либо:
    - копировать `_2`/`_3` варианты EN в RU (если содержание идентичное),
    - либо переснять под RU-локаль.

### 4.4 Терминология

12. **«Организация» vs «Компания»** — в RU-доке закреплено «Организация» как primary с упоминанием синонима «Компания» в `organization.mdx`. Стоит провериться, что в других страницах «компания» не используется в смысле орга. Поиск по корпусу: `Grep "компани"` → возможно потребуются точечные правки в `bittrix24.mdx`/`finance.mdx`.
13. **«Талант» vs «MCP-сервер» vs «интеграция»** — мы используем «талант» как primary, MCP — техническая характеристика. Зафиксировать это в глоссарии.
14. **«Канал» vs «Платформа»** — в платформе UI используется «Платформа» (в dropdown «Подключить новый» → «Платформа: Telegram»), а в наших страницах `/ru/channels/...` — «Канал». Это допустимо, но в первом упоминании на каждой странице канала стоит дать synonyms.

### 4.5 Поиск и FAQ

15. **FAQ-таб дублирует Guide-таб**. Например, `ru/guides/knowledge.mdx` и `ru/faq/persona-and-knowledge.mdx` оба отвечают на один вопрос «как добавить базу знаний». После Task 3 в `guides/knowledge` теперь есть видео `gagkwzwHFXo`. **Рекомендация:** сделать FAQ-аккордеоны short-form со ссылкой на guide, а не параллельный текст. Или ввести Mintlify reusable snippets.
16. **Глоссарий** — нет ни одной страницы-глоссария. Полезно создать `ru/guides/glossary.mdx` с терминами: ИИ-сотрудник, Агент, Персона, Талант, Канал, Профиль, Самообучение, Хаб правил, Бейдж самообучения, Палец вниз, Live чат, Bridges/MCP. Поможет снизить путаницу новичков.

---

## 5. Прочее важное

### 5.1 Качество существующего контента

1. **Auto-followup** — теперь имеет hero `<Frame>` ✅. Этот баг был замечен в audit (она единственная страница без hero). Закрыто.
2. **Сломанные изображения** ✅ — `talents_1.png`, `versions_1.png`, `working_hours_1.png` восстановлены через `/public/screenshots/`. Закрыто.
3. **Bare YouTube URLs в FAQ** (`troubleshooting.mdx` и `channels.mdx` — строка 124 / 25 — `youtube.com/watch?v=GXSxWdkHkVg`) — Task 3 не трогал эти страницы. **Остаются raw текст-ссылки**, надо или upgraded в `<iframe>`, или заменить на одно из 11 mission-видео.
4. **`auto-followup.mdx` open with `<Warning>`** — после добавления hero этот warning теперь идёт после Frame, что корректно.

### 5.2 Чистка репозитория (Task 5 рекомендации, не реализовано)

Файлы-кандидаты на удаление (НЕ сделано в Task 3 чтобы не вводить ломки до Task 4):
- `doc.mdx` (root) — устаревший docs.json sketch с битыми ссылками
- `temaplte_Docs.json` — typo template
- `ru/quickstart.mdx`, `en/quickstart.mdx`, `ru/development.mdx`, `en/development.mdx` — Mintlify starter (НЕ в nav)
- `ru/essentials/*.mdx`, `en/essentials/*.mdx` (12 файлов) — Mintlify how-to-write-docs starter
- `ai-tools/{cursor,claude-code,windsurf}.mdx` — Mintlify writing helper
- `ru/api-reference/endpoint/*.mdx`, `en/api-reference/endpoint/*.mdx` (8 файлов) — sample plants OpenAPI stubs
- `assets/snippets/snippet-intro.mdx` — Mintlify starter
- `/images/*.svg` (5 SVG) — устаревшие logo/favicon, не реферятся из docs.json
- `assets/images/*.png` (22 PNG в корне `assets/images`) — legacy hero-art, не реферятся

**Рекомендация:** запланировать «cleanup PR» отдельно от content-PR.

### 5.3 Технические долги

5. **`en/terms-and-policies/offer.mdx` description** — placeholder `"Description of your new file."` уже месяц как в проде. Простой fix: скопировать RU description.
6. **`ru/terms-and-policies/promo-consent.mdx`** не имеет `description` frontmatter (EN-версия имеет).
7. **`channels/amocrm.mdx` уникален использованием `sidebarTitle`** — стилевой outlier. Либо унифицировать на все channel-страницы, либо удалить.
8. **`<Frame>` — inline vs multi-line** — стиль непоследовательный. Косметика, не блокирует.

### 5.4 Безопасность и конфиденциальность

9. **Скриншоты с PII** — в `61-support-dashboard.png` видны email-адреса других пользователей. Этот скриншот — внутренний админ-инструмент и НЕ должен попасть в публичную доку. Если когда-нибудь нужно показать `/support-dashboard`, надо переснять с маскированной таблицей.
10. **Скриншоты `/profiles`** показывают реальные имена клиентов и метаданные. Аналогично — для документации нужен demo-аккаунт с фейковыми данными или маскирование.
11. **Платформа использует Keycloak** (`auth.aitextura.com`) — детали authn flow в публичной доке намеренно не описывать (security through obscurity не идеал, но стандартный паттерн).

### 5.5 Видео-инфраструктура

12. **YouTube embed: `<iframe>` без `loading="lazy"`** — для страниц с 2+ видео (например, `notifications.mdx` теперь имеет 2) можно добавить `loading="lazy"` для performance. Но Mintlify начнёт жаловаться, если атрибут не в whitelist. Проверить в их docs.

---

## 6. Что НЕ было сделано в этой сессии (намеренно)

- **EN-версия не обновлялась** — отменено пользователем (priority override в QUESTIONS.md).
- **Real platform deep-dive повторно не запускался** — Task 2 выполнено единожды, дальнейшие observations — на основе `platform_audit.md` snapshot. Если в платформе появились новые фичи после 2026-05-07, они не отражены.
- **Cleanup устаревших файлов не выполнен** — рекомендуется отдельным PR.
- **Глобальный alt-text пасс** не сделан — отдельная задача.

---

## 7. Конкретные next-steps (отсортированы по ROI)

| # | Задача | Усилие | Эффект | Когда |
|---|---|---|---|---|
| 1 | Зеркальная синхронизация EN с RU (24 страницы + 4 новых) | 3-4 ч роя | Устраняет рассинхрон языков | Следующая сессия |
| 2 | Полный аудит `/broadcast` UI и переписать `broadcast.mdx` | 1 ч | Превращает заглушку в полную доку | После Task 4 |
| 3 | Custom MCP — короткий how-to с реальным примером | 1 ч | Открывает фичу для разработчиков | По запросу |
| 4 | Заменить bare YouTube URLs в FAQ на iframe | 15 мин | Косметика + UX | Сразу |
| 5 | Pass `alt` атрибутами по всем `<img>` | 1 ч | Аксессибилити | Можно автоматизировать |
| 6 | Очистка starter/legacy файлов (`doc.mdx`, `essentials/*`, etc.) | 30 мин | Уменьшает нойз в репо | Отдельный PR |
| 7 | Backfill `changelog/index.mdx` версиями 2.1.0 и 2.5.0 | 30 мин | Соответствие платформе | Сразу |
| 8 | Глоссарий `glossary.mdx` | 2 ч | Снижает confusion новичков | По запросу |
| 9 | Скрыть API Reference таб до готовности API | 5 мин | Убирает «Coming soon» из nav | Сразу |
| 10 | Перенести `/public/screenshots/` в `/assets/images/{lang}/screenshots/` | 1 ч | Унификация путей | После Task 4 |

---

## 8. Сводка

**Что сделано в Task 3 (RU-update):**
- 4 новые страницы создано
- ~24 существующие страницы расширены/исправлены
- 11 видео встроено
- 3 broken-image ссылки восстановлены
- `docs.json` обновлён — 4 новые записи в RU-навигации
- Терминология «Организация» закреплена как primary
- Bitrix24/amoCRM dual-paths (канал vs талант) теперь явно различаются
- Палец-вниз 4-step flow задокументирован
- PRO голоса ElevenLabs + команды агента + поведение в `additional-settings.mdx`
- Новые тарифы Starter $100 / Pro $500 / Business $1000

**Что осталось (по убыванию приоритета):**
1. **EN sync** (Task 4 в следующей сессии) — критический gap.
2. Глубокий аудит `/broadcast` и расширение `broadcast.mdx`.
3. Custom MCP пример.
4. Самообучение UI deep-dive.
5. Webhook payload документация.
6. Cleanup legacy файлов.
7. Backfill changelog.
8. Глоссарий.
9. Alt-text пасс.

**Здоровье документации:**
- RU: ✅ синхронизирован с платформой (snapshot 2026-05-07).
- EN: ❌ отстаёт на ~24 страницы и все новые фичи. Требует немедленного внимания.
- Структура: ✅ навигация чистая, иерархия понятная.
- Видео: ✅ 11 mission-видео встроены; 10+ кандидатов на новые съёмки.
- Скриншоты: ⚠️ путь `/public/screenshots/` vs `/assets/images/{lang}/screenshots/` сосуществуют — требуется унификация.
- Аксессибилити: ⚠️ alt-теги отсутствуют почти везде.

---

_Конец GAPS_REPORT.md._
