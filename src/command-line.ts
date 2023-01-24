export class CommandLine {
  private cl: string[] = [];

  constructor(commandLine: string[]) {
    this.cl = commandLine;
  }

  public main(): void {
    if (this.cl.length > 2 && this.cl[2]?.match(/--ja|-j/)) {
      this.coreJa();
    } else {
      this.core();
    }
  }

  private coreJa(): void {
    console.log(`-- git Commit Message Format --
(quote source: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)

# Format
<type>(<scope>): <subject>

# Type
feat： 新機能
fix: バグ修正
docs: ドキュメントのみの変更
style: コードの意味に影響を与えない変更 (空白、書式設定、セミコロンの欠落など)
refactor: バグの修正も機能の追加も行わないコード変更
perf: パフォーマンスを向上させるコード変更
test: 不足しているテストの追加または既存のテストの修正
chore: ドキュメント生成などのビルド プロセスまたは補助ツールとライブラリの変更

# Scope
スコープは、コミット変更の場所を指定するものであれば何でもかまいません。 たとえば、$location、$browser、$compile、$rootScope、ngHref、ngClick、ngView など...
変更が複数のスコープに影響する場合は、* を使用できます。

`);
  }

  private core(): void {
    console.log(`-- Commit Message Format --
(quote source: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)

# Format
<type>(<scope>): <subject>

# Type
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf: A code change that improves performance
test: Adding missing or correcting existing tests
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

# Scope
The scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...
You can use * when the change affects more than a single scope.

`);
  }
}