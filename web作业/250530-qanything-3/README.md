# QAnything & WakaTime 集成应用

## 项目简介

本项目是一个基于 Next.js 开发的应用程序，集成了 LLM 问答服务 QAnything 和个人编码时长统计服务 WakaTime。本应用旨在展示如何将 QAnything 通过 API 调用集成到前端应用中，并有效管理个人编码数据。同时，项目还整合了本学期所有的课程练习，体现了组件化开发的思想，并为每个练习创建了独立的路由。

## QAnything 集成路径与实现细节 (路径二：API 自行开发)

本项目选择了 QAnything 集成的**路径二**，即通过自行调用 QAnything 的 API 来实现问答服务。选择此路径的原因是它提供了更大的灵活性和定制性，允许我们根据具体需求设计前端交互，实现更丰富的功能，例如流式输出、自定义错误处理和更精细的参数控制。

### 实现细节：

- **API 理解与调用**：
  - 理解 QAnything 提供的 RESTful API 接口，包括问答、知识库管理等功能。
  - 使用 Next.js 的 API Routes 作为后端代理，以处理跨域请求和保护敏感信息。
  - 在前端通过 `fetch` 或 `axios` 等库调用 Next.js API Routes，进而与 QAnything 后端进行交互。
- **API Key 安全管理**：
  - QAnything 的 API Key 被安全地存储在服务器端的环境变量中，并通过 Next.js 的配置机制进行访问，避免在客户端代码中暴露敏感信息。
- **前端交互功能**：
  - **输入界面**：提供用户友好的文本输入框，支持多行输入和实时字符计数。
  - **展示界面**：问答结果以清晰、易读的格式展示，支持 Markdown 渲染，提升用户体验。
  - **加载/错误处理**：在 API 请求进行中显示加载指示器，并在请求失败时提供明确的错误消息和重试选项。
  - **高级交互特性 (流式输出)**：实现了 QAnything 问答结果的流式输出，模拟实时打字效果，提升用户感官体验。

![image-20250630232745030](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630232745030.png)

![image-20250630232754247](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630232754247.png)

![image-20250630232802223](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630232802223.png)

![image-20250630233004918](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233004918.png)

![image-20250630233031453](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233031453.png)

![image-20250630233045765](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233045765.png)

## WakaTime API 集成与展示

本项目集成了 WakaTime API，用于获取并展示用户的编码时长数据。

### 实现细节：

- **API Key 安全管理**：
  - 个人 WakaTime API Key 通过环境变量 (`.env.local`) 进行管理，确保 API Key 不被泄露，只在服务端进行访问。
- **API 调用**：
  - 在服务端通过 `fetch` 调用 WakaTime API 获取编码时长数据。
  - 对获取到的数据进行处理，计算总编码时长。
- **页脚展示**：
  - 在应用程序的页脚全局展示获取到的累计编码时长，确保在每个页面都能看到。
  - 展示格式清晰、准确，例如显示为 "总编码时长：X 小时 Y 分钟"。

![image-20250630233054922](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233054922.png)

## Next.js 应用结构与课程练习整合

本项目使用 `create-next-app` 初始化，并遵循 Next.js 的最佳实践，实现了清晰的模块化和组件化开发。

### 项目结构：

```
├── public/
├── src/
│   ├── app/                # 路由和页面组件
│   │   ├── api/            # Next.js API Routes
│   │   ├── chat/           # QAnything 问答页面
│   │   ├── homework/       # 课程练习导航页及各练习路由
│   │   └── layout.tsx      # 全局布局
│   ├── components/         # 可复用组件
│   │   ├── chat/           # 问答相关组件
│   │   ├── knowledge-base/ # 知识库相关组件
│   │   ├── navigation.tsx  # 导航组件
│   │   └── ui/             # 通用 UI 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具函数和客户端服务
│   ├── services/           # 服务层，封装 API 调用逻辑
│   └── types/              # TypeScript 类型定义
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

### 课程练习整合方式：

- **独立路由**：为每个课程练习创建了独立的路由 (`/homework/exercise1`, `/homework/exercise2` 等)，用户可以通过导航轻松访问不同的练习。
- **组件化开发**：每个练习被视为一个或多个独立的组件，实现了高内聚低耦合的设计，方便维护和复用。
- **Next.js 核心特性应用**：
  - **API Routes**：用于处理 QAnything 和 WakaTime 的后端请求。
  - **服务端组件 (Server Components)**：在部分场景下使用服务端组件进行数据获取和渲染，优化性能。
  - **静态资源处理**：图片、字体等静态资源通过 `public` 目录进行管理和优化。

![image-20250630233108677](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233108677.png)

![image-20250630233114014](/Users/night/Documents/Codes/SaltyFish/250530-qanything-all/250530-qanything-3/assets/image-20250630233114014.png)

## 项目运行指南

请按照以下步骤运行本项目：

1.  **克隆仓库**：
    ```bash
    git clone <你的GitHub仓库链接>
    cd <你的项目目录>
    ```

2.  **安装依赖**：
    ```bash
    uv add
    ```

3.  **配置环境变量**：
    创建 `.env.local` 文件，并添加以下环境变量：
    ```
    WAKATIME_API_KEY=your_wakatime_api_key
    QANYTHING_API_BASE_URL=your_qanything_api_base_url
    # 其他可能需要的环境变量
    ```
    请将 `your_wakatime_api_key` 替换为你的 WakaTime API Key，将 `your_qanything_api_base_url` 替换为你的 QAnything API 的基础 URL。

4.  **运行项目**：
    ```bash
    uv run next dev
    ```

    项目将在 `http://localhost:3000` 启动。

## GitHub 仓库管理

所有代码和文档均通过 Git 进行版本控制，并托管在公开的 GitHub 仓库中。我们遵循良好的 Commit 习惯，每次提交都包含清晰、有意义的提交信息，以便于代码审查和项目追踪。
