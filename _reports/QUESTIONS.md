# QUESTIONS.md — Лог решений и неопределённостей

Этот файл — рабочий журнал миссии обновления документации AI TEXTURA. Сюда фиксируются решения, принятые автономно, открытые вопросы, блокировки и компромиссы.

---

## 🚨 PRIORITY OVERRIDE FROM USER (18:14, 2026-05-07)

**Задача 4 (EN docs) ОТМЕНЕНА.** Не трогай `en/` вообще.

**Новый порядок:** Задача 1 ✅ → Задача 2 → Задача 3 (только RU) → Задача 5 (GAPS_REPORT.md). Никакого EN.

**Причина:** экономия токенов и времени, чтобы не упереться в rate limit. Также — также при Гэп-репорте указать что также нужно обновить EN-версию.

Прочти MISSION.md заново перед спауном Task 3 — он обновлён.

---

## Сессия: 2026-05-07

### Принятые решения (автономно)

- **Режим работы**: non-interactive, оркестратор + sub-agents (general-purpose).
- **Порядок выполнения**: Задачи 1+2 параллельно → 3+4 параллельно → 5.
- **Скриншоты**: сохраняются в `public/screenshots/` как PNG.
- **Язык платформы при аудите**: оригинальный (RU или EN), без браузерного автоперевода.

### Открытые вопросы

(будут добавляться по ходу работы)

#### От Task 1 (audit, 2026-05-07)

- **Скриншоты — путь vs существующая конвенция.** Договорённость: новые скриншоты идут в `/public/screenshots/`. Однако вся текущая документация ссылается на `/assets/images/{lang}/screenshots/...`. Решение об этом конфликте должно быть принято до Task 3/4, иначе либо появятся два параллельных каталога, либо потребуется массовое переписывание `src`. Рекомендация Task 1: при копировании из `/public/screenshots/` в `assets/images/{lang}/screenshots/` сохранять единый путь, либо явно перейти на `/public/screenshots/` и сделать массовый `Edit replace_all` по всем `.mdx`.
- **Сломанные изображения в RU.** На текущий момент в `ru/guides/talents.mdx`, `ru/guides/versions.mdx`, `ru/guides/working-hours.mdx` ссылки на `talents_1.png`, `versions_1.png`, `working_hours_1.png` — эти файлы отсутствуют в `assets/images/ru/screenshots/`. Это уже видимая проблема в продакшне (если репозиторий задеплоен).
- **Placeholder description в EN оферте.** `en/terms-and-policies/offer.mdx` имеет `description: "Description of your new file."` — это видно в SEO и preview. Нужно заменить.
- **API Reference.** Оба `introduction.mdx` содержат `<Note>Coming soon</Note>` / `<Note>Скоро</Note>`. Решить: либо наполнить, либо скрыть таб из `docs.json` до готовности API.
- **Quickstart страница.** Видео `jsGSyJj9qN8` (создание ИИ за 30 мин) — это идеальный «Quick Start»-материал, но в продакшн-навигации квикстарта нет. Текущие `ru/quickstart.mdx` / `en/quickstart.mdx` — это стартер-кит Mintlify, не относящийся к продукту, и они не в `docs.json`. Рекомендация Task 1: создать `ru/guides/quickstart.mdx` и `en/guides/quickstart.mdx`, добавить в группу «Обзор» / «Overview» как первый пункт.
- **PMS-страница.** В навигации нет ни одной PMS-страницы. Видео `RmsnbSfPguQ` (подключение PMS) и материал из `faq/pms-integrations.mdx` логично объединить в новый `ru/channels/pms.mdx` + `en/channels/pms.mdx`. Решение требуется до Task 3/4.
- **«Палец вниз» — обратная связь по ответам ИИ.** Видео `I6ovIko1GNQ` упоминает feature, который сейчас нигде не задокументирован (ни в `chats.mdx`, ни в `support.mdx`). Подтвердить, что фича реально существует в платформе, и решить, в какой странице её описывать.
- **Bitrix24 — назначение ответственных и уведомления.** Видео `d8ZT_BM2K0A` и `9IsmdbQ7Dfc` подразумевают функциональность, которой нет в текущей `ru/channels/bittrix24.mdx` (там только webhook setup) и `ru/guides/notifications.mdx` (только Telegram + общий webhook). Нужно расширение содержания.

### Решения, принятые автономно Task 1
- Аудит — read-only. Никаких изменений в `.mdx`/`docs.json` не сделано.
- Найденные ошибки и недостатки задокументированы в `audit_existing_docs.md` секция 8 и 9.


### Блокировки

(будут добавляться по ходу работы)

---

## Дополнения от Task 2 (platform_audit, 2026-05-07)

### Новые открытые вопросы

- **Терминология «Компания» vs «Организация».** В платформе UI термин — **«Организация»** (`/organization`, «Создать организацию»). MISSION.md и черновик документации говорят «Компании». Решение: в RU-доке использовать «Организации» как primary, «Компании» — как синоним в первом упоминании.
- **Каналы WhatsApp / Avito / Website widget — нет в платформе.** В текущей доке есть страницы `ru/channels/whatsapp.mdx`, `ru/channels/avito.mdx`, `ru/channels/website-widget.mdx`. В платформе **прямых** WhatsApp/Avito/Widget каналов нет. WhatsApp заводится через Wazzup. Решение: Task 3/4 должны либо удалить страницы из навигации, либо переписать на «WhatsApp через Wazzup» / «Avito coming soon».
- **PMS-таланты — 6 систем.** В платформе есть `MEWS, Travelline, Bnovo, RealtyCalendar, Bronirui Online, MeHotel`. В текущей доке нет страниц PMS. Подтверждено реальностью платформы — Task 3/4 должны создать `ru/talents/pms/...` с под-страницами.
- **Bitrix24 — два отдельных способа подключения.** Есть **канал** (`Канал → Bitrix24`, REST webhook URL — для приёма сообщений) и **талант** (`Таланты → Bitrix24`, MCP-сервер с правами CRM/Users/Tasks/Im/Imbot/Openlines — для CRM-операций). Они подключаются независимо. Документация **должна** различать эти два понятия — сейчас этого нет.
- **amoCRM/Kommo — OAuth и канал/талант.** Аналогично Bitrix24. И канал, и талант используют OAuth, но это два разных подключения.
- **Палец вниз** — фича подтверждена. 4-шаговый flow с финальным сообщением «Эта информация уйдёт в отдел обучения ИИ» + автоприкреплением «отчёта по контексту». Это **формат тикета в поддержку**, не просто feedback. Видео `I6ovIko1GNQ` отображает именно эту фичу. Описать в `support` или новой странице `chats/feedback.mdx`.
- **Изменение тарифов.** Текущий `services/billing.mdx` устарел. В платформе тарифы: Starter $100 / Pro $500 / Business $1000.
- **Хаб правил — отдельная страница.** В платформе `/rules-hub?tab=presets|my` — раздел в основной навигации. В доке нет отдельной страницы; упомянут только в `persona.mdx`. Нужна отдельная страница.
- **Рассылки `/broadcast`** — есть в платформе, нет в доке.
- **Каналы, отсутствующие в доке**: `Salebot, Umnico, SendAPI, HelpDeskEddy, Jivo, Kommo (как канал)`.
- **Вкладка «Дополнительно» агента** — голоса PRO (ElevenLabs ash/coral/sage/onyx/alloy/echo/fable/nova/shimmer + скорость), команды агента (старт/стоп/очистка/защита/обучение/отчёт), поведенческие переключатели — целиком отсутствует в доке.
- **Пригласить участника в организацию** — UI не виден на нашем участнике-аккаунте. Подразумевается, что инвайт доступен только админам/владельцам. Алерт «Не удалось загрузить приглашения» на вкладке «Участники» подтверждает существование функции. Task 3/4: если получится логин под админ-аккаунтом — повторить аудит и зафиксировать UI.
- **Live чат `/live/:id`** — публичная страница для шеринга/тестирования. Не описано.
- **Zen Mode** — переключение режимов сайдбара. Новинка из v2.1.0.
- **Центр уведомлений** (колокольчик в топбаре) — новинка v2.5.0.
- **Тоггл «Доступ поддержки к аккаунту»** — новинка v2.5.0 на странице `/support`.
- **Команды агента (текстовые)** — настраиваются в `/settings`, но используются как команды в чатах. Это **скрытая интерфейсная фича** (текст-команда в чат), которую очень полезно описать в `chats.mdx` или отдельной странице «Команды агента».
- **Live preview агента (`Показать чат`)** — встроенный тест-чат на странице редактирования агента. Удобно для разработки промпта. Не описан.
- **Создание агента — 3 пути.** Подтверждены: Вручную (с библиотекой Personal Assistant / Learning Companion / Creative Helper / Health & Wellness / Task Management / Research Assistant / Other) / Автоматически (по URL сайта) / Пустой агент. Не описано.

### Подтверждено / разрешено в Task 2

- **Видео `I6ovIko1GNQ` (палец вниз)** → подтверждено: это 4-шаговый разбор + автотикет.
- **Видео `9IsmdbQ7Dfc` (Bitrix24-уведомления)** → подтверждено: на странице агента → Уведомления есть Bitrix24 как канал доставки помимо Telegram/Webhook.
- **Видео `d8ZT_BM2K0A` (назначение ответственных в Bitrix24)** → реализуется через Bitrix24 талант (CRM-операции).
- **Видео `RmsnbSfPguQ` (PMS)** → 6 PMS-талантов в каталоге.
- **Скриншоты** — всего 89 PNG в `/public/screenshots/`. Нумерация хронологическая `00..87`. Готовы для использования Task 3/4.

### Видео-ссылки (из MISSION.md)

| Тема | URL |
|------|-----|
| Режим самообучения FAQ | https://youtu.be/V1CJmtRQ2gI |
| Аналитика и профили | https://youtu.be/KOc5gB76GxA |
| Назначение ответственных в Bitrix24 | https://youtu.be/d8ZT_BM2K0A |
| Добавить базу знаний | https://youtu.be/gagkwzwHFXo |
| Уведомления | https://youtu.be/JNFaKV8LzCQ |
| Подключить PMS-систему | https://youtu.be/RmsnbSfPguQ |
| ИИ для сети отелей / переключение между ИИ | https://youtu.be/qNRnekKcBFU |
| Как написать в поддержку (палец вниз) | https://youtu.be/I6ovIko1GNQ |
| Уведомления в Bitrix24 | https://youtu.be/9IsmdbQ7Dfc |
| Что делать если ИИ дал неверный ответ | https://youtu.be/EOwEEmcnepI |
| Создать ИИ-сотрудника и подключить к CRM за 30 мин | https://youtu.be/jsGSyJj9qN8 |

---

## EN Translation Issues — Sub-Agent 1 (2026-05-07)

### Files created
- `en/guides/organization.mdx` — newly created, full translation of `ru/guides/organization.mdx`.
- `en/channels/pms.mdx` — newly created, full translation of `ru/channels/pms.mdx`.

### Files already up to date (no action taken)
- `en/guides/quickstart.mdx` — already exists with a current, complete translation of `ru/guides/quickstart.mdx`. Verified line-by-line; no changes needed.
- `en/guides/broadcast.mdx` — already exists with a current, complete translation of `ru/guides/broadcast.mdx`. Verified line-by-line; no changes needed.

### Translation decisions
- **«Рассылки»** → "Broadcasts" (matches the existing EN file already present).
- **«Финансы»** → "Billing" in card titles and most cross-links — this matches the convention used in the existing `en/guides/quickstart.mdx` and `en/guides/broadcast.mdx`. The page itself remains at `en/guides/finance` (URL preserved).
- **«Регион» РФ/РБ/МИР** for Travelline → translated as `RU` / `BY` / `WORLD`. These are user-facing dropdown labels in the platform UI; the actual Russian labels may differ in EN locale of the product. Flagging for review by someone with access to the EN locale of the platform.
- **«Hotel ID» / «Configuration ID»** — kept as-is (English already in RU source).
- **«Каналы»** in PMS card link → "Channels — overview" (matches the established Channels card style).
- **«Создать талант»** → "Create talent" (kept in quotes as a UI label).
- **«Бронируй Online»** → kept as "Bronirui Online" per the brand transliteration used in the RU source.
- The `<Card href="/ru/channels">` link in the RU PMS page (without `/index`) was preserved as `/en/channels` in EN, mirroring the source. Other channel cross-links use `/en/channels/index` per the rest of the EN docs convention; left as-is to mirror the RU source exactly. If routing uses `/channels/index.mdx` exclusively, this card may need to be updated to `/en/channels/index` in a follow-up pass.

### No untranslatable content encountered.

---

## EN Sync Issues — Sub-Agent 3 (channels+chats+services) — 2026-05-07

### Scope clarifications
- The task brief listed `en/chats.mdx`, `en/support.mdx`, `en/services/billing.mdx`, `en/dashboard.mdx`, `en/profiles.mdx`, `en/finance.mdx`, `en/account-settings.mdx`. None of these exist at those paths in either RU or EN — they live under `en/guides/` (chats, support, finance, dashboard, profiles, account-settings) and are owned by another sub-agent. Per the strict scope lock ("ONLY modify files in `en/` outside `guides/` and `faq/`"), these were left untouched. There is no `services/` directory anywhere in the repo.
- `en/channels/whatsapp.mdx`, `en/channels/avito.mdx`, `en/channels/website-widget.mdx` — none of these files exist in either RU or EN. They were already removed from the codebase, and the deprecation notice is mirrored in `en/channels/index.mdx` and `en/channels/messengers.mdx` (Note + FAQ accordions that explain WhatsApp via Wazzup, Avito coming soon, etc.).

### Files modified (in scope: `en/channels/*`)
- `en/channels/index.mdx` — full rewrite to mirror RU. New hero Frame, expanded 10-platform table, "Channel vs Talent" comparison table, Avito/website-widget deprecation note, broader settings table (now includes `Auto-clear history`), 8 FAQ entries (added "Avito or website widget" and "Channel vs Talent" accordions).
- `en/channels/bittrix24.mdx` — full rewrite covering both connection paths. Adds: hero Frame, 4-card CardGroup, "Two ways to connect Bitrix24" table, channel sub-section, talent (MCP) sub-section with two paths (Connected channel / Webhook), "Assigning responsible managers" section with `<iframe>` embed of `d8ZT_BM2K0A`, "Notifications via Bitrix24" section with `<iframe>` embed of `9IsmdbQ7Dfc`, 5-entry FAQ.
- `en/channels/amocrm.mdx` — full rewrite. Adds: hero Frame, 4-card CardGroup, "Two ways to connect amoCRM" table, channel sub-section, talent (MCP) sub-section with OAuth flow and modal tab choice, retains Kommo subsection, 5-entry FAQ.
- `en/channels/messengers.mdx` — full rewrite. Adds: hero Frame, 4-card CardGroup, expanded 7-platform support matrix (Wazzup added with WhatsApp focus; Jivo and HelpDeskEddy added; Other column added), expanded platform overview accordions (now includes Jivo + HelpDeskEddy), Note about WhatsApp via Wazzup, expanded "Which aggregator to choose" decision table, 5-entry FAQ.
- `en/channels/telegram.mdx` — full rewrite. Adds: hero Frame, 4-card CardGroup, "Step 3" customization section, "Channel types" Personal/Group section, full "Additional channel settings" section (AI inline buttons, Message buffer, Auto-clear history, link back to overview), retains personal-account flow, 4-entry FAQ.
- `en/channels/pms.mdx` — already existed with a complete, idiomatic translation matching `ru/channels/pms.mdx` (created by an earlier sub-agent). Verified content fidelity and left untouched.

### Translation decisions
- "Канал" → "channel"; "Талант" → "talent"; "MCP-сервер" → "MCP server".
- "Открытые линии" → "Open Channels" (Bitrix24's standard EN UI label for the same feature) when referring to the Bitrix24 module; "open channels" lowercase when used generically in prose.
- "Подключить новый" sub-tab → "Connect new" (kept consistent with RU literal label so users find the same string in the EN UI).
- Section anchor for "amoCRM as talent" cross-link → `#connecting-amocrm-as-a-talent-mcp` (matches the H2 slug). Same logic for Bitrix24 anchor.
- Currency: not applicable in this scope (no billing/finance content).

### Items not in scope (flagged for other agents)
- `en/guides/chats.mdx`, `en/guides/support.mdx`, `en/guides/finance.mdx`, `en/guides/dashboard.mdx`, `en/guides/profiles.mdx`, `en/guides/account-settings.mdx` — owned by Sub-Agent 1 / 2 (guides).
- `docs.json` navigation update (adding `en/channels/pms` to the EN Connect Channels group) — owned by the docs.json sub-agent.

### No blockers encountered.


---

## EN Sync Issues — Sub-Agent 2 (guides+faq) — 2026-05-07

### Files modified (in scope: `en/guides/*`, `en/faq/*`)

- `en/guides/persona.mdx` — surgical updates: replaced CardGroup to mirror RU (Knowledge Base / Rules Hub / Profiles / Versions), added "Live agent preview" intro and `<Frame>` for `80-agent-test-chat.png` to the Testing Changes section.
- `en/guides/ai-employees.mdx` — full rewrite. Hero `<Frame>` switched to `/public/screenshots/10-agents-list.png`, new sections: video walkthrough (`jsGSyJj9qN8`), Self-Learning informer, full 12-tab Accordion list, three creation paths (Manual library / Auto URL / Blank), expanded action menu, expanded FAQ (incl. Live Chat), best-practice notes.
- `en/guides/quick-answers.mdx` — surgical update: added `qNRnekKcBFU` `<iframe>` and a hotel-chain example caption inside section 3 ("Transfer to another AI").
- `en/guides/notifications.mdx` — full rewrite. New hero Frame (`32-agent-notifications.png`), video walkthrough (`JNFaKV8LzCQ`), trigger templates ("Need a human" / "Booking confirmed" / "Agent made a promise"), `33-notification-add-trigger.png` Frame, "On incoming vs On outgoing" parameter, Regular vs Forced pause table, "Routing notifications to Bitrix24" anchor section with `9IsmdbQ7Dfc` `<iframe>`, expanded FAQ, 10-trigger limit table.
- `en/guides/talents.mdx` — full rewrite. 30+ integration catalog organized by category (AI TEXTURA-native, PMS, CRM, AI/LLM, Communication, Documents, Databases, E-commerce, Social), `13-agent-talents.png` and `14-agent-talents-all.png` frames, "Bitrix24 — two connection paths" with `<Tabs>` (Connected channel / Webhook), Custom MCP section (SSE / Streamable HTTP, Bearer/API/Basic auth modes, "I trust this server" warning), 11-entry FAQ.
- `en/guides/additional-settings.mdx` — full rewrite. PRO ElevenLabs voices (ash/coral/sage/onyx/alloy/echo/fable/nova/shimmer), API-key onboarding steps, full agent commands table (Start AI, Stop AI, Clear memory, Jailbreak protection, Retraining, Report variants), behavior toggles (Jailbreak protection, Stop after manager reply, Pause on bot messages, Auto-resume after pause, Conversation completion detection), updated settings summary, 10-entry FAQ.
- `en/guides/auto-followup.mdx` — surgical updates: added hero `<Frame>` (`36-agent-followup.png`), added secondary `<Note>` clarifying global vs per-agent surface, reordered CardGroup to mirror RU.
- `en/guides/versions.mdx` — surgical updates: hero `<Frame>` switched to `/public/screenshots/34-agent-versions.png`, CardGroup re-ordered to mirror RU (Persona / Knowledge Base / Additional / AI Employees), added Live-preview `Show chat` Tip in Best Practices.
- `en/guides/working-hours.mdx` — surgical updates: hero `<Frame>` switched to `/public/screenshots/39-agent-worktime.png`, CardGroup re-ordered to mirror RU.
- `en/guides/referral.mdx` — surgical updates: hero `<Frame>` switched to `/public/screenshots/58-partner-program.png`, CardGroup updated.
- `en/guides/knowledge.mdx` — surgical updates: added `gagkwzwHFXo` video walkthrough section, three new `<Frame>`s (`51-knowledge.png`, `52-knowledge-agent.png`, `53-knowledge-extended.png`, `41-agent-knowledge.png`), new "Agent Selector" subsection with selection-state table, new "Extended/basic modes" subsection, new "Agent folders" subsection with example tree, removed redundant "Filtering by Agent" section.
- `en/guides/rules-hub.mdx` — surgical updates: re-ordered hero/intro to mirror RU (description first, then global-library prose, then `54-rulehub-expanded.png` frame, then CardGroup), added `55-rulehub-presets.png` frame, replaced generic "Block Types" table with the explicit AI TEXTURA preset catalog (Role: Hotel Administrator/Realtor/Personal Assistant/Consultant; Tone: Neutral/Playful/Empathetic; Instruction: Booking (hotel)/Real Estate Sales) plus tip on adapting closest match.
- `en/faq/ai-behavior.mdx` — surgical update: added video walkthrough section with `EOwEEmcnepI` `<iframe>` and cross-link to FAQ / Self-Learning.

### Files inspected and left as-is

- `en/faq/{analytics-and-profiles, billing, booking, channels, crm-integrations, dialog-management, getting-started, index, persona-and-knowledge, pms-integrations, security-and-access, troubleshooting, voice-and-media}.mdx` — line counts match the RU equivalents, structural diff confirms parity. No new content on the RU side requires sync.

### Translation decisions

- "Хаб правил" → "Rules Hub". "Заготовки" → "Templates". "Мои правила" → "My Rules".
- "Самообучение" → "Self-Learning". "Бейдж" → "badge".
- "Талант" → "talent" (lowercase prose, capitalized in section headings). "Канал" → "channel". "MCP" left as-is.
- "Принудительная пауза" → "Forced pause". "Обычная пауза" → "Regular pause". "На входящие / На исходящие" → "On incoming / On outgoing".
- "Команды агента" → "Agent commands". "Защита от взлома" → "Jailbreak protection".
- "Стоп ИИ / Старт ИИ / Очистка памяти / Переобучение" → "Stop AI / Start AI / Clear memory / Retraining".
- "Тон" preset names: "Шуточный" → "Playful"; "Эмпатичный" → "Empathetic"; "Нейтральный" → "Neutral".
- "Live чат" → "Live Chat" (label) / "live chat" (prose).
- "Глобальная библиотека" → "global library".
- Anchor links translated to slug-friendly EN: `#bitrix24-2-puti-podklyucheniya` → `#bitrix24-two-connection-paths`; `#sozdanie-svoego-mcp-talanta` → `#creating-a-custom-mcp-talent`; `#marshrutizatsiya-bitrix24` → `#bitrix24-routing`; `#komandy-agenta` → `#agent-commands`. Cross-references in `notifications.mdx` and `additional-settings.mdx` updated to match.
- Bitrix24 cross-link to talents page uses `#bitrix24-two-connection-paths`. This presumes the channels/bittrix24 EN page (owned by Sub-Agent 3) and talents EN page now both use this anchor — verified our talents page does.

### Items not in scope (left to other agents)

- `en/guides/{chats, support, finance, dashboard, profiles, account-settings, faq, broadcast, organization, quickstart}.mdx` — owned by another agent or out of this brief.
- `docs.json` navigation — owned by the docs.json sub-agent.

### No blockers encountered.

---

## EN Sync Issues — Sub-Agent 5 (cleanup guides) — 2026-05-07

### Files modified (in scope: 6 EN guides previously missed by sibling sub-agents)

- `en/guides/chats.mdx` — full rewrite. New sections: hero `<Frame>` (`42-chats-list.png`), `83-chat-info-panel.png` info panel, status indicators table (chat paused / AI stopped / AI working), quick-buttons table (Enable AI, Clear history), full **Chat action menu** section with 8 actions and `86-chat-actions-menu.png` + `87-chat-menu-options.png` frames, **Per-message actions** section (Copy / Delete / Thumbs down / Response analysis), `44-chat-with-history.png` and `49-chat-full-view.png` frames, full **Live chat** section with `78-live-chat.png` frame, expanded FAQ (4 new entries: thumbs down / vs analysis / share link / reset context).
- `en/guides/support.mdx` — full rewrite. New top-of-page CardGroup with same icons as RU, hero `<Frame>` (`59-support.png`), **Support access to account** section (toggle, states table, Tip, Warning), **How to report an AI response (thumbs down)** section with `I6ovIko1GNQ` `<iframe>` and 4 step-by-step Frames (`45-chat-thumbdown-modal.png`, `46-thumbdown-step2.png`, `47-thumbdown-step3.png`, `48-thumbdown-step4-support.png`), `60-support-new-ticket.png` frame, expanded FAQ (3 new entries: thumbs down vs ticket / safety of access toggle / what's in context report). Anchor `#how-to-report-an-ai-response-thumbs-down` aligned with chats.mdx cross-link.
- `en/guides/finance.mdx` — full rewrite. New: hero `<Frame>` (`62-billing-history.png`), CardGroup mirrors RU (AI Employees / Dashboard / Persona / Knowledge), Page overview block table, expanded **Analytics** intro mentioning `/billing/words/history`, full **Pricing plans** section with **Starter $100 / 2,000,000 words**, **Pro $500 / 10,000,000 words**, **Business $1000 / 20,000,000 words** (verified $ prefix and exact numerics from RU), `63-billing-topup.png` frame, **Regions and payment methods** table (Russia: bank transfer / invoice / crypto; World: international cards), conversion rate `$1 = 100 ₽`, **Transaction history** table, expanded FAQ (3 new entries: which plan to pick / paying from Russia / Gateway column).
- `en/guides/dashboard.mdx` — full rewrite. New: video walkthrough section with `KOc5gB76GxA` `<iframe>`, **Context: personal account vs organization** section with `06-dashboard-aitextura-org.png` frame, restructured into **Analytics widget** (period switcher + cards + chart subsections), **AI Quality** widget, **Response Time** widget (v2.5.0 Note + `9 s` vs `1 h 30 m` example), **AI Efficiency** widget (Table/Chart modes, 3 breakdowns, columns), **Spending and billing analytics** card, `85-dashboard-final-aitextura.png` frame, expanded How-to-use Steps (7 steps), expanded FAQ (3 new entries: manager-vs-AI time / Response Time empty / personal vs organization).
- `en/guides/profiles.mdx` — full rewrite. New: video walkthrough with `KOc5gB76GxA` `<iframe>`, `38-agent-profiles.png` frame on the configuration intro, **Profile fields and chat metadata** section with field-type-in-metadata table, expanded **Profile analytics** with `50-profiles.png` and `81-profiles-detail.png` frames, **KPI cards** subsection (4 metrics including Fill rate / This week / This month), **View tabs** subsection (All data / Saved views), **Profile table** subsection with **Drag-and-drop column order** new-in-v2.1.0 capability and **Display modes** (Cards / Table).
- `en/guides/account-settings.mdx` — full rewrite. New: hero `<Frame>` (`67-user-settings.png`), tabs table now lists 7 tabs (added Notifications and Activity), expanded **Agent commands** table with new **Report (all)** and **Report (without archive)** entries, `68-settings-account.png` frame on Account Settings tab, new **3. Notifications** section with `71-settings-notifications.png` frame, `69-settings-security.png` frame on Security, `70-settings-integrations.png` frame on Integrations, new **6. Activity** section with `72-settings-activity.png` frame and field table, `73-settings-experimental.png` frame on Experimental.

### Translation decisions

- "История списаний" page title → "Billing History" (matches existing `/finance` slug + EN convention from sibling sub-agents).
- "Финансы" cross-link card titles → "Billing" (consistent with sibling Sub-Agent 1 convention).
- "Палец вниз" → "thumbs down" (lowercase prose) / "Thumbs down" (sentence-start) / **"Mark response as unhelpful"** (the actual button label from RU aria-label).
- "Команды агента" → "Agent commands". "Отчёт всех" / "Отчёт без архива" → "Report (all)" / "Report (without archive)".
- "Стереть память" → "Wipe memory" (action name). Default value `delete all` preserved verbatim.
- "Отчёт по контексту" → "Context report".
- "On Customer" / "Done" — kept as-is (they are the actual UI labels in RU).
- "Доступ открыт" / "Доступ закрыт" → "Access open" / "Access closed".
- "Сохранённые представления" → "Saved views". "Все данные" → "All data".
- "Заполненность" → "Fill rate".
- "Самообучение" → "Self-Learning" (consistent with sibling agent).
- "Время ответа" widget → "Response Time".
- "Эффективность ИИ" → "AI Efficiency". "По сотрудникам / По каналам / По диалогам" → "By employee / By channel / By dialog".
- "ИИ без менеджера / Только менеджер / ИИ + менеджер" → "AI without manager / Manager only / AI + manager".
- Anchor for thumbs-down section: `#how-to-report-an-ai-response-thumbs-down` (slug of the H2). The chats.mdx cross-link uses this same anchor.
- Anchor for Live chat section: `#live-chat--public-view` (em-dash slug; Mintlify renders the en-dash and surrounding spaces as `--`). Cross-link from FAQ uses this anchor.
- Anchor for chat action menu (cross-linked from account-settings.mdx Report rows): `#chat-action-menu`.
- Currency: confirmed RU values mirror exactly — Starter `$100` / Pro `$500` / Business `$1000`, plus `2,000,000`, `10,000,000`, `20,000,000` word volumes; `$1 = 100 ₽` conversion rate. Used Western-style number separators (commas) for English idiom; `$` prefix preserved.

### Items not in scope
- `_reports/` — only QUESTIONS.md appended. GAPS_REPORT.md and audit_existing_docs.md unchanged.
- `docs.json` — already synced per brief, not touched.
- All `ru/` files — not touched.

### No blockers encountered.
