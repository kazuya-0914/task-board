# CLAUDE.md

このファイルは、このリポジトリのコードを扱う際にClaude Code (claude.ai/code) へのガイダンスを提供します。

## プロジェクト概要

**task-board** は、タスク管理ボード（ToDo・Kanban風）アプリです。タスクの作成・編集・ステータス管理（例：未着手／進行中／完了）を行うWebアプリケーションです。

## 技術スタック

- React 19
- Vite（ビルドツール・開発サーバー）
- npm
- oxlint（Lint。`npm run lint` で実行）
- GitHub Actions（GitHub Pagesへの自動デプロイ）

## ファイル構成

- `index.html` — エントリーHTML
- `src/main.jsx` — Reactのマウント処理
- `src/App.jsx` — タスクボード本体（タスクの追加・完了切り替え・削除ロジック）
- `src/App.css` — タスクボードの見た目
- `src/index.css` — グローバルスタイル（背景・レイアウト）

## 動作確認方法

```
npm install
npm run dev
```

## 開発方針

- コンポーネント単位で責務を分割し、可読性を優先する。過度な抽象化は避ける
- 日本語話者向けのアプリのため、UI文言・コメント（必要な場合）は日本語を基本とする
- タスクの状態は `App.jsx` 内で `useState` により管理する（`{ id, text, done }` の配列）。`localStorage`（キー: `task-board:tasks`）に自動保存し、リロードしても保持される

## コンポーネントの命名規約

- コンポーネントファイル・関数名は `PascalCase`、ファイル名は拡張子 `.jsx`（例: `App.jsx` の `App`）
- イベントハンドラは `handle + 動詞 + 対象` の `camelCase`（例: `handleAddTask`, `handleToggleTask`, `handleDeleteTask`）
- state・props は用途がわかる `camelCase`（例: `tasks`, `inputValue`）
- CSSクラス名は `kebab-case`（例: `task-item`, `task-label`, `delete-btn`）。状態を表すクラスは `done` のように状態名のみを付与し、`task-item.done` のように既存クラスと組み合わせる

## GitHubリポジトリ

https://github.com/kazuya-0914/task-board

## デプロイ先

https://kazuya-0914.github.io/task-board/

## デプロイ（GitHub Pages）

- `main`ブランチへのpushをトリガーに `.github/workflows/deploy.yml` がビルド＆デプロイを自動実行する
- `vite.config.js` の `base: '/task-board/'` はGitHub Pagesのプロジェクトサイト配信パスに合わせた設定（変更しないこと）
- 初回のみ、GitHubリポジトリの Settings > Pages で Source を「GitHub Actions」に設定する必要がある（手動操作）

## Git運用ルール

- コードを変更したら、その都度コミットしてGitHubリポジトリ（origin/main）にプッシュすること
- 変更内容が分かるコミットメッセージを日本語で付けること

## 応答言語

このプロジェクトに関するやり取りは、必ず日本語で行うこと。
