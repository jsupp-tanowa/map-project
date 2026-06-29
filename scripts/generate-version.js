const fs = require('fs');
const path = require('path');

// version.txt の保存先
const filePath = path.join(__dirname, '..', 'version.txt');

// コマンドライン引数
const version = process.argv[2];        // 例: 0.8.0
const summary = process.argv[3];        // 例: 初回βリリース

if (!version || !summary) {
  console.error("Usage: node generate-version.js <version> <summary>");
  process.exit(1);
}

// 日付（YYYY-MM-DD）
const today = new Date().toISOString().split('T')[0];

// version.txt の内容
const content = `
version: ${version}
release_date: ${today}
summary: ${summary}

changes:
  - （ここに変更内容を追記）

notes:
  - 本番環境（Firebase Hosting）へのデプロイ
  - 今後の機能追加は dev ブランチで行い、main に merge して反映
`.trim();

// ファイル書き込み
fs.writeFileSync(filePath, content, 'utf8');

console.log(`version.txt generated: ${version}`);
