# Task Board Project

## Overview

タスク管理ボードアプリケーション。

## Git 運用ルール

### コード変更時の必須手順

**コードを変更するたびに、必ず以下の手順でGitHubへプッシュすること。**

```bash
git add <変更ファイル>
git commit -m "コミットメッセージ"
git push origin <ブランチ名>
```

### ブランチ戦略

- `main`: 本番相当の安定ブランチ。直接pushしない。
- `feature/<機能名>`: 新機能開発用ブランチ。
- `fix/<修正内容>`: バグ修正用ブランチ。

### コミットメッセージ規約

```
<type>: <概要（日本語可）>
```

| type     | 用途             |
|----------|------------------|
| feat     | 新機能           |
| fix      | バグ修正         |
| refactor | リファクタリング |
| style    | フォーマット変更 |
| docs     | ドキュメント     |
| test     | テスト追加・修正 |
| chore    | ビルド・設定変更 |

### プッシュの原則

- ファイルを1つでも変更・追加・削除したら、作業が完了次第すぐにプッシュする。
- 「あとでまとめてpush」はしない。変更の単位ごとにコミット＆プッシュを行う。
- `git push --force` は原則禁止。やむを得ない場合はユーザーに確認を取ること。

## デプロイ先

| 用途 | URL |
|------|-----|
| GitHubリポジトリ | https://github.com/kazuya-0914/task-board.git |

## 技術スタック

| カテゴリ | 採用技術 | バージョン |
|----------|----------|------------|
| UIライブラリ | React | 18.x |
| ビルドツール | Vite | 6.x |
| 言語 | JavaScript (JSX) | ES Modules |
| スタイリング | Plain CSS (CSS Modules なし) | — |
| 状態管理 | React `useState` / `useEffect` | — |
| 永続化 | `localStorage` | — |
| パッケージマネージャ | npm | — |

### ディレクトリ構成

```
task-board/
├── index.html          エントリーHTML
├── vite.config.js      Vite設定
├── package.json
├── .gitignore
└── src/
    ├── main.jsx        Reactマウントポイント
    ├── App.jsx         アプリケーション本体（唯一のコンポーネント）
    ├── App.css         App コンポーネント用スタイル
    └── index.css       グローバルスタイル
```

## コンポーネント命名規約

### ファイル名・コンポーネント名

- コンポーネントファイルは **PascalCase** で命名する（例: `App.jsx`, `TaskItem.jsx`）。
- コンポーネント関数名もファイル名と一致させる。
- 1ファイル1コンポーネントを原則とする。

### CSS クラス名

- クラス名は **kebab-case** で命名する（例: `.task-item`, `.add-button`）。
- コンポーネントのルート要素には `.container` など役割を示す名前をつける。
- 状態を表すクラスは `.done`, `.active` のように短く明確にする。

### 変数・関数名

- 変数・関数は **camelCase**（例: `addTask`, `toggleTask`）。
- イベントハンドラは `handle` プレフィックス or 動詞+名詞（例: `handleKeyDown`, `addTask`）。
- `localStorage` のキー名は定数で管理し、`STORAGE_KEY` のように **UPPER_SNAKE_CASE** にする。

## 開発ガイドライン

- 新しいファイルを作る前に、既存ファイルの編集で対応できないか検討する。
- コメントは「なぜそうしているか（WHY）」が非自明な場合のみ書く。
- セキュリティ上の懸念（XSS, SQL injection 等）に気づいた場合は即座に修正する。
