# PRD: Forge Website — 一人公司的产品工厂

> Version: 2.0 (post self-review)
> Date: 2026-03-17
> Status: Pending Approval
> Based on: P0 Brainstorm Report

## 1. Background & Objectives

### Problem Statement

独立开发者和 Solo Founder 面临一个核心矛盾：有产品想法，但从零到一的执行路径过于漫长。调研、需求文档、UI 设计、编码、测试、部署——每个环节都需要专业技能和大量时间。

现有 AI 编码工具各有局限：
- **Bolt.new** / **Lovable**: 生成前端应用，但缺乏需求分析、架构设计、完整测试和 CI/CD
- **Cursor** / **Claude Code**: 强大的编码助手，但不包含产品规划、设计和自动部署流水线
- **v0.dev**: 仅生成 UI 组件，不是完整产品

**Forge 的差异**: 不是"另一个 AI 编码工具"，而是一条**完整的产品制造流水线**——从一句话 idea 到线上可访问的产品，覆盖调研 → PRD → 架构 → UI设计 → 编码 → 测试 → 验证 → 部署全部 8 个阶段。

Forge 目前是一个开源 Claude Code plugin（CLI 工具），需要一个官方网站来展示能力、获取开发者用户、为未来的 hosted 版本建立 waitlist。

### Product Vision

Forge 官网让开发者访客在 30 秒内理解"一句话造一个产品"的价值，看到真实案例和生成代码质量，并通过开源安装或 waitlist 转化。

### Success Criteria (MVP)

- 网站上线后 30 天内收集 500+ waitlist 邮箱
- 其中 50+ 选择了 Pro/Unlimited 兴趣标签
- Lighthouse Performance score ≥ 90
- 页面平均加载时间 < 2s
- GitHub 开源 plugin repo stars 100+ (30天内)

## 2. Target User Personas

### Persona 1: Alex — 独立开发者 (Primary)

- **Role / Demographics**: 全栈开发者, 25-35 岁, 有 side project 经验
- **Goals**: 快速验证产品想法, 减少重复性工作 (infra搭建、部署配置、测试)
- **Pain Points**: 每次新项目都要从零搭建 infra, 设计能力不足, 测试和部署耗时
- **Tech Proficiency**: Advanced — 能读懂生成的代码, 熟悉 CLI 和终端
- **Decision factors**: 生成代码质量、可维护性、是否开源、是否锁定

### Persona 2: Chen — 一人公司运营者 (Secondary)

- **Role / Demographics**: 已有一个产品在运营, 35-50 岁, 技术背景但不再日常编码
- **Goals**: 快速扩展产品线, 做衍生产品或内部工具
- **Pain Points**: 雇人成本高, 需求变化快, 需要能自己操作的工具
- **Tech Proficiency**: Intermediate — 能跑 CLI 命令, 能修改配置文件
- **Decision factors**: 投入产出比、学习曲线、输出可控性

> **Note on non-technical users**: Forge 当前版本是 CLI 工具，需要终端操作和 Claude Code。非技术用户 (如产品经理、非编码创业者) 暂不是 MVP 目标用户。网站会标注"Hosted no-code version coming soon"，并通过 waitlist 收集这类用户的需求。

## 3. Core Features

### P0 — Must Have (MVP)

| # | Feature | Description | User Story Ref |
|---|---------|-------------|---------------|
| 1 | Landing Page | Hero + "How it works" 技术说明 + 8阶段流水线可视化 + 终端 demo + 案例预览 + 竞品对比 + CTA | US-001 |
| 2 | Showcase 展示页 | 产品案例列表, 含截图/链接/耗时/功能数/构建日志链接 | US-002 |
| 3 | Pricing 定价页 | Free/Pro/Unlimited 三档 + 功能对比表 + Forge vs 竞品对比表 + Waitlist CTA | US-003 |
| 4 | Docs 入门页 | 安装指南 + 配置说明 + 第一个项目教程 + 支持的技术栈 + 故障排除 + FAQ | US-004 |
| 5 | About 页 | "关于 Forge" 故事 + 创建者介绍 + 愿景 + 联系方式 + GitHub 活跃度 | US-005 |
| 6 | Waitlist 收集 | 邮箱 + 计划兴趣(Free/Pro/Unlimited) 表单, 存入数据库 | US-006 |
| 7 | 响应式设计 | 全页面 mobile-first 响应式 | US-007 |
| 8 | Terminal Demo | 嵌入式终端录屏 (asciinema) 展示真实 Forge 构建过程 | US-008 |

### P1 — Should Have (v1.1)

| # | Feature | Description |
|---|---------|-------------|
| 1 | GitHub OAuth 登录 | 用 GitHub 账号注册/登录 |
| 2 | Stripe 付费 | Pro ($29 一次性/项目) 和 Unlimited ($99/月订阅) |
| 3 | User Dashboard | 查看项目列表、额度、账单 |
| 4 | Changelog 页 | 自动从 GitHub Releases 生成的更新日志 |
| 5 | 确认邮件 | Waitlist 提交后发送确认邮件 (Resend) |

### P2 — Nice to Have (Future)

| # | Feature | Description |
|---|---------|-------------|
| 1 | 项目创建 (idea input) | 在 Dashboard 输入 idea 触发流水线, 前端展示进度 |
| 2 | Hosted no-code 版本 | 面向非技术用户的 Web UI 版 Forge |
| 3 | 社区展示 | 用户提交自己用 Forge 造的产品 |
| 4 | Blog | 产品更新、教程、案例分析 |
| 5 | i18n 多语言 | 中英文切换 |

## 4. User Stories & Acceptance Criteria

### US-001: 了解 Forge 是什么以及如何工作

**As a** 开发者 (Alex/Chen), **I want to** 打开 Forge 官网首页, **so that** 我在 30 秒内理解 Forge 是什么、怎么工作、和竞品有什么不同。

**Acceptance Criteria:**
- Given 用户首次访问, When 页面加载完成, Then 可见标题"一句话造一个产品"和副标题"Forge 是一个 Claude Code plugin，输入产品描述，自动完成从调研到部署的全流程"
- Given 用户向下滚动到 "How it works", When 到达该区域, Then 可见: (1) Forge 是 CLI 工具的说明, (2) 8 阶段流水线可视化:
  - P0: Idea Input (输入产品描述)
  - P1: Market Research (市场调研 + 竞品分析)
  - P2: PRD Generation (需求文档)
  - P3: Architecture (技术架构设计)
  - P4: UI/UX Design (界面设计)
  - P5: Code Generation (编码实现)
  - P6: Testing & Verification (测试 + 3轮验证)
  - P7: Deployment (自动部署上线)
- Given 用户到达 demo 区域, When 查看, Then 可见嵌入式终端录屏展示真实 Forge 构建过程
- Given 用户到达案例区域, When 查看案例卡片, Then 每个案例显示产品名、截图、链接、耗时、功能数量
- Given 用户到达竞品对比区域, When 查看, Then 可见 Forge vs Bolt.new vs Lovable vs Cursor 对比表
- Given 用户到达页尾, When 查看 CTA, Then 可见"安装开源版"和"查看定价"两个按钮
- Given 非技术用户, When 阅读完 Hero, Then 看到"Non-developer? Hosted version coming soon — join waitlist"提示

### US-002: 浏览已造出的产品并验证质量

**As a** 潜在用户, **I want to** 查看 Forge 已造出的真实产品及其构建过程, **so that** 我确信这个工具真的能造出可用的产品。

**Acceptance Criteria:**
- Given 用户访问 Showcase 页, When 页面加载, Then 显示至少 3 个产品卡片
- Given 每个产品卡片, When 用户查看, Then 显示: 产品名称、截图预览、在线链接、构建耗时、功能数量、使用的技术栈
- Given 每个产品卡片, When 存在构建日志, Then 显示"查看构建日志"链接 (指向 GitHub commit history 或 Forge 输出日志)
- Given 用户点击产品链接, When 跳转, Then 在新标签页打开该产品的线上地址
- Given Showcase 数据加载失败, When API 出错, Then 显示"暂时无法加载案例，请稍后刷新"提示

### US-003: 了解定价和付费价值

**As a** 决策者 (Alex/Chen), **I want to** 了解 Forge 的定价方案和各档差异, **so that** 我可以选择适合我的方案。

**Acceptance Criteria:**
- Given 用户访问 Pricing 页, When 页面加载, Then 显示 3 个定价卡片:
  - **Free**: 开源 Claude Code plugin, 自带 API key, 完整 P0-P7 流水线, 社区支持
  - **Pro ($29/项目)**: 一次性付费, 零配置 (自动配置 Vercel/Supabase/Cloudflare), 优先 bug 修复, 构建模板库
  - **Unlimited ($99/月)**: 订阅制, 不限项目数, 所有 Pro 功能, 优先支持, 早期访问新功能
- Given 定价卡片, When 用户查看, Then 每个卡片显示: 价格、功能列表(含✓/✗对比)、限制、CTA 按钮
- Given Free 卡片, When 用户点击 CTA, Then 跳转到 Docs 安装页
- Given Pro/Unlimited 卡片, When 用户点击 CTA, Then 显示 waitlist 表单 (含预选的计划兴趣)
- Given 页面底部, When 存在, Then 显示 Forge vs Bolt.new vs Lovable 功能对比表
- Given 页面底部, When 存在, Then 显示 FAQ (至少: "什么是 project?", "Pro 是一次性还是订阅?", "开源版和付费版有什么区别?")

### US-004: 安装和开始使用

**As a** 开发者 (Alex), **I want to** 快速安装 Forge 并构建第一个项目, **so that** 我可以评估工具的实际效果。

**Acceptance Criteria:**
- Given 用户访问 Docs 页, When 页面加载, Then 显示清晰的目录结构
- Given 安装部分, When 用户查看, Then 包含:
  - 前置要求 (Node.js ≥22, Claude Code, API key)
  - 安装命令 (`claude plugin add clawlabz/forge`)
  - 验证安装成功的步骤
- Given "Quick Start" 部分, When 用户查看, Then 包含:
  - 第一个项目教程 (端到端示例)
  - 支持的技术栈列表 (Next.js, React, etc.)
  - 配置选项说明 (forge.config.yaml)
- Given 故障排除部分, When 用户查看, Then 包含: 常见错误及解决方案, FAQ
- Given 代码块, When 存在, Then 可一键复制
- Given 非技术用户访问, When 页面顶部, Then 显示"Looking for a no-code option? Join the waitlist for our hosted version."横幅

### US-005: 了解 Forge 的背景和可信度

**As a** 潜在用户, **I want to** 了解 Forge 背后的创建者和项目活跃度, **so that** 我可以评估是否值得投入时间。

**Acceptance Criteria:**
- Given 用户访问 About 页, When 页面加载, Then 显示:
  - "About Forge" 项目故事 (为什么创建、解决什么问题)
  - 创建者/团队介绍 (以"创建者"而非"团队"呈现, 符合一人公司定位)
  - 愿景说明
  - 联系方式 (GitHub, Twitter/X, Email)
- Given GitHub 活跃度, When 数据可用, Then 显示: stars 数, 最近提交日期, 贡献者数 (可实时或定期更新)

### US-006: 加入 Waitlist

**As a** 对 Pro/Unlimited 或 hosted 版本感兴趣的用户, **I want to** 提交我的邮箱和兴趣偏好, **so that** 在功能上线时我能收到通知。

**Acceptance Criteria:**
- Given 用户在任何 waitlist 表单, When 输入有效邮箱, Then 可选择感兴趣的计划 (Pro/Unlimited/Hosted)
- Given 有效提交, When 用户点击提交, Then 显示 inline 成功消息 (不跳转新页面)
- Given 重复邮箱, When 用户再次提交, Then 显示"你已在 waitlist 中！"友好提示
- Given 无效邮箱格式, When 用户提交, Then 显示格式错误提示, 不提交
- Given 提交成功, When 数据库记录, Then 包含: 邮箱, 计划兴趣, 来源页面, 提交时间
- Given API 不可用, When 提交失败, Then 显示"网络错误，请稍后重试"提示

### US-007: 移动端浏览

**As a** 手机用户, **I want to** 在手机上正常浏览所有页面, **so that** 我不需要电脑也能了解 Forge。

**Acceptance Criteria:**
- Given 任何页面, When 在 375px 宽度设备查看, Then 布局正常, 无水平滚动
- Given 导航栏, When 在移动端, Then 折叠为 hamburger 菜单
- Given 所有交互元素, When 在触摸设备, Then 点击区域 ≥ 44x44px

### US-008: 观看 Forge 实际运行效果

**As a** 潜在用户 (Alex/Chen), **I want to** 看到 Forge 实际运行的过程, **so that** 我能直观感受工具的能力而不只是读文字描述。

**Acceptance Criteria:**
- Given 用户在 Landing 页 demo 区域, When 查看, Then 可见嵌入式终端录屏 (asciinema 或视频)
- Given 录屏内容, When 播放, Then 展示一个真实的 Forge 构建过程 (从输入 idea 到部署完成)
- Given 录屏, When 加载, Then 不自动播放声音, 有播放/暂停控制
- Given 录屏不可用 (降级), When 嵌入失败, Then 显示静态截图 + "Watch on YouTube" 链接

## 5. Non-functional Requirements

### Performance
- Lighthouse Performance score ≥ 90
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3s on 3G

### Security
- HTTPS only (Vercel 默认)
- Input validation on all forms (Zod, email max 254 chars per RFC 5321)
- Rate limiting on waitlist API (20 req/min per IP, sliding window)
- Rate limit exceeded → 429 response with "Too many requests, please try again in X seconds"
- No sensitive data in client-side code

### Accessibility (Best-effort for MVP)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keyboard navigation on forms and interactive elements
- Color contrast ratio ≥ 4.5:1
- Full WCAG 2.1 AA audit deferred to P1

### Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile: iOS Safari 16+, Chrome Android 100+
- Cross-browser spot-check on Chrome/Safari/Firefox before launch

### Mobile Responsiveness
- Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
- Mobile-first design approach

## 6. Data Model Overview

### Key Entities

| Entity | Description | Key Fields |
|--------|-------------|------------|
| forge_waitlist | Waitlist 邮箱记录 | id (uuid), email (varchar 254), plan_interest (enum: free/pro/unlimited/hosted, nullable), source_page (varchar), created_at (timestamptz) |
| forge_showcase | 展示产品 | id (uuid), name, description, url, screenshot_url, build_time_minutes (int), feature_count (int), tech_stack (text[]), build_log_url (varchar, nullable), published (boolean default true), sort_order (int), created_at |

### Relationships
- forge_waitlist 独立表, 唯一约束 on email
- forge_showcase 独立表, 数据通过 seed 脚本管理
- 表名前缀: `forge_` (遵循 ClawLabz Supabase 规范)

> Note: User, Subscription, Project 等实体属于 P1 功能, 在 MVP 中不需要。

## 7. Page / Route List

| Page | Route | Purpose | Key Components |
|------|-------|---------|---------------|
| Landing | `/` | 首页, 价值主张 + 产品说明 | Hero, "How it works", Pipeline viz, Terminal demo, Showcase preview, Competitor comparison, CTA |
| Showcase | `/showcase` | 产品案例展示 | Product cards grid with build logs |
| Pricing | `/pricing` | 定价方案展示 | Pricing cards, Feature comparison, Competitor comparison, FAQ |
| Docs | `/docs` | 开源版使用指南 | Install guide, Quick start, Config ref, Troubleshooting, FAQ |
| About | `/about` | 项目故事和创建者 | Project story, Creator intro, Vision, GitHub stats, Contact |

### API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/waitlist` | POST | 提交 waitlist (email + plan_interest + source_page) |

## 8. MVP Scope

### In Scope
- 5 个页面 (Landing, Showcase, Pricing, Docs, About)
- Waitlist 邮箱+计划兴趣收集 (表单 + API + Supabase)
- 嵌入式终端 demo (asciinema 录屏)
- Forge vs 竞品对比表
- 响应式设计 (mobile-first)
- SEO 优化 (每页唯一 title/description, OG image, structured data)
- GA4 + Clarity 分析 (如已配置)
- 产品案例数据 (seed 脚本, 含构建日志链接)
- Vercel 部署 + Cloudflare DNS

### Out of Scope (Explicitly)
- 用户注册/登录 (P1)
- Stripe 付费 (P1)
- User Dashboard (P1)
- 确认邮件发送 (P1)
- Changelog 页 (P1)
- 项目创建/流水线触发 (P2)
- Hosted no-code 版本 (P2)
- Blog (P2)
- 多语言 i18n (P2)
- 社区提交产品 (P2)
- 完整 WCAG AA 审计 (P1)

## 9. Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Waitlist 总邮箱数 | 500+ (30天内) | Supabase 查询 |
| Pro/Unlimited 兴趣标签数 | 50+ (30天内) | Supabase 查询 (plan_interest) |
| Landing 页跳出率 | < 40% | GA4 |
| Pricing 页到达率 | > 30% of visitors | GA4 |
| Showcase 页停留时间 | > 60s | GA4 / Clarity |
| Demo 播放率 | > 50% of landing visitors | GA4 event |
| Lighthouse Performance | ≥ 90 | Lighthouse CI |
| GitHub repo stars | 100+ (30天内) | GitHub API |
| Docs → Install conversion | 监控 (无硬指标) | GA4 event (copy install command) |

## 10. Self-Review Log

### Round 1: Product Manager Review
- **[HIGH] 添加 Persona 2/3 的用户故事**: Maria 移除为 MVP 目标用户, Chen 保留并添加 US-008 (demo viewing). 理由: Forge 当前是 CLI 工具, 非技术用户无法使用.
- **[HIGH] 修正矛盾的成功指标**: 移除"10+ Pro 付费用户" (Stripe 不在 MVP 范围), 替换为"50+ Pro/Unlimited 兴趣标签". 理由: MVP 无法收款.
- **[HIGH] Waitlist 增加 plan_interest 字段**: 用户选择感兴趣的计划, 便于转化分析. 理由: 仅收集邮箱无法衡量付费意向.
- **[MEDIUM] Showcase 增加 published 字段**: 支持草稿/下线状态. 理由: 产品可能临时不可用.
- **[MEDIUM] 定义 P0-P7 流水线阶段**: 在 US-001 中明确列出 8 个阶段名称和说明. 理由: PRD 读者无法理解未定义的术语.
- **[MEDIUM] 边缘状态处理**: 添加 Showcase 加载失败、API 异常、邮箱重复等边缘状态的 AC. 理由: 原 PRD 只覆盖 happy path.
- **[MEDIUM] Rate limit 调整为 20/min**: 原 10/min 对企业 NAT 过于激进, 并添加 429 响应说明.
- **[LOW] Testimonials 移除**: Landing 页移除 Testimonials 组件 (无数据来源), 替换为竞品对比表.
- **[LOW] Waitlist 改为 inline 成功状态**: 移除 /waitlist/success 路由, 使用表单内 inline 反馈.
- **[LOW] About 页重构为"创建者"**: 避免一人公司显示"团队"页面的违和感.

### Round 2: User Perspective Review
- **[CRITICAL] 添加 "How it works" 技术说明**: Landing 页必须解释 Forge 是 CLI plugin, 展示实际运行方式. 理由: 用户不知道 Forge 到底是什么.
- **[CRITICAL] 定义付费版价值**: Pricing 页每个档位必须明确说明 vs Free 的差异. 理由: 不解释就无法转化.
- **[CRITICAL] 标注 CLI-only**: 非技术用户看到"一句话造产品"会误以为是 no-code 工具, 需要明确标注当前是 CLI 版本. 理由: 避免误导.
- **[HIGH] 添加终端 demo**: US-008 新增, Landing 页嵌入 asciinema 录屏. 理由: "Seeing is believing", 竞品都有即时体验.
- **[HIGH] 展示构建日志增加可信度**: Showcase 每个产品添加 build_log_url. 理由: 内部产品案例需要证明确实是 Forge 构建的.
- **[HIGH] 扩展 Docs 范围**: 从简单的 1-2-3 步扩展为完整的入门指南. 理由: 薄弱的文档 = 不成熟的产品.
- **[HIGH] 添加竞品对比表**: Landing 和 Pricing 页都添加 Forge vs 竞品的功能对比. 理由: 开发者评估工具时一定会做对比.
- **[MEDIUM] 降低 Accessibility 到 best-effort**: 完整 WCAG AA 对 MVP 范围过大. 理由: 不应阻塞上线.
- **[MEDIUM] 添加 GitHub 活跃度展示**: About 页显示 stars/commits/贡献者. 理由: 开源项目的生命力信号.
- **[LOW] 非技术用户引导 waitlist**: Docs 页和 Hero 区域添加"hosted version coming soon"提示.
