#!/usr/bin/env node

/*!
 * Gitcp JavaScript Library v0.0.0
 * 
 * Released under the MIT license
 *
 * Date: 2023-01-25T05:45Z
 */
'use strict';

var CommandLine = /** @class */ (function () {
    function CommandLine(commandLine) {
        this.cl = [];
        this.cl = commandLine;
    }
    CommandLine.prototype.main = function () {
        var _a;
        if (this.cl.length > 2 && ((_a = this.cl[2]) === null || _a === void 0 ? void 0 : _a.match(/--ja|-j/))) {
            this.coreJa();
        }
        else {
            this.core();
        }
    };
    CommandLine.prototype.coreJa = function () {
        console.log("-- git commit prefix --\n(quote source: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)\nfeat\uFF1A \u65B0\u6A5F\u80FD\nfix: \u30D0\u30B0\u4FEE\u6B63\ndocs: \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u307F\u306E\u5909\u66F4\nstyle: \u30B3\u30FC\u30C9\u306E\u610F\u5473\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u306A\u3044\u5909\u66F4 (\u7A7A\u767D\u3001\u66F8\u5F0F\u8A2D\u5B9A\u3001\u30BB\u30DF\u30B3\u30ED\u30F3\u306E\u6B20\u843D\u306A\u3069)\nrefactor: \u30D0\u30B0\u306E\u4FEE\u6B63\u3082\u6A5F\u80FD\u306E\u8FFD\u52A0\u3082\u884C\u308F\u306A\u3044\u30B3\u30FC\u30C9\u5909\u66F4\nperf: \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u30B3\u30FC\u30C9\u5909\u66F4\ntest: \u4E0D\u8DB3\u3057\u3066\u3044\u308B\u30C6\u30B9\u30C8\u306E\u8FFD\u52A0\u307E\u305F\u306F\u65E2\u5B58\u306E\u30C6\u30B9\u30C8\u306E\u4FEE\u6B63\nchore: \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u751F\u6210\u306A\u3069\u306E\u30D3\u30EB\u30C9 \u30D7\u30ED\u30BB\u30B9\u307E\u305F\u306F\u88DC\u52A9\u30C4\u30FC\u30EB\u3068\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u5909\u66F4\n");
    };
    CommandLine.prototype.core = function () {
        console.log("-- git commit prefix --\n(quote source: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)\nfeat: A new feature\nfix: A bug fix\ndocs: Documentation only changes\nstyle: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\nrefactor: A code change that neither fixes a bug nor adds a feature\nperf: A code change that improves performance\ntest: Adding missing or correcting existing tests\nchore: Changes to the build process or auxiliary tools and libraries such as documentation generation\n");
    };
    return CommandLine;
}());

new CommandLine(process.argv).main();

module.exports = CommandLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kLWxpbmUudHMiLCIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tYW5kTGluZSB7XG4gIHByaXZhdGUgY2w6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoY29tbWFuZExpbmU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5jbCA9IGNvbW1hbmRMaW5lO1xuICB9XG5cbiAgcHVibGljIG1haW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2wubGVuZ3RoID4gMiAmJiB0aGlzLmNsWzJdPy5tYXRjaCgvLS1qYXwtai8pKSB7XG4gICAgICB0aGlzLmNvcmVKYSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvcmVKYSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgLS0gZ2l0IGNvbW1pdCBwcmVmaXggLS1cbihxdW90ZSBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvREVWRUxPUEVSUy5tZCNjb21taXQtbWVzc2FnZS1mb3JtYXQpXG5mZWF077yaIOaWsOapn+iDvVxuZml4OiDjg5DjgrDkv67mraNcbmRvY3M6IOODieOCreODpeODoeODs+ODiOOBruOBv+OBruWkieabtFxuc3R5bGU6IOOCs+ODvOODieOBruaEj+WRs+OBq+W9semfv+OCkuS4juOBiOOBquOBhOWkieabtCAo56m655m944CB5pu45byP6Kit5a6a44CB44K744Of44Kz44Ot44Oz44Gu5qyg6JC944Gq44GpKVxucmVmYWN0b3I6IOODkOOCsOOBruS/ruato+OCguapn+iDveOBrui/veWKoOOCguihjOOCj+OBquOBhOOCs+ODvOODieWkieabtFxucGVyZjog44OR44OV44Kp44O844Oe44Oz44K544KS5ZCR5LiK44GV44Gb44KL44Kz44O844OJ5aSJ5pu0XG50ZXN0OiDkuI3otrPjgZfjgabjgYTjgovjg4bjgrnjg4jjga7ov73liqDjgb7jgZ/jga/ml6LlrZjjga7jg4bjgrnjg4jjga7kv67mraNcbmNob3JlOiDjg4njgq3jg6Xjg6Hjg7Pjg4jnlJ/miJDjgarjganjga7jg5Pjg6vjg4kg44OX44Ot44K744K544G+44Gf44Gv6KOc5Yqp44OE44O844Or44Go44Op44Kk44OW44Op44Oq44Gu5aSJ5pu0XG5gKTtcbiAgfVxuXG4gIHByaXZhdGUgY29yZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgLS0gZ2l0IGNvbW1pdCBwcmVmaXggLS1cbihxdW90ZSBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvREVWRUxPUEVSUy5tZCNjb21taXQtbWVzc2FnZS1mb3JtYXQpXG5mZWF0OiBBIG5ldyBmZWF0dXJlXG5maXg6IEEgYnVnIGZpeFxuZG9jczogRG9jdW1lbnRhdGlvbiBvbmx5IGNoYW5nZXNcbnN0eWxlOiBDaGFuZ2VzIHRoYXQgZG8gbm90IGFmZmVjdCB0aGUgbWVhbmluZyBvZiB0aGUgY29kZSAod2hpdGUtc3BhY2UsIGZvcm1hdHRpbmcsIG1pc3Npbmcgc2VtaS1jb2xvbnMsIGV0YylcbnJlZmFjdG9yOiBBIGNvZGUgY2hhbmdlIHRoYXQgbmVpdGhlciBmaXhlcyBhIGJ1ZyBub3IgYWRkcyBhIGZlYXR1cmVcbnBlcmY6IEEgY29kZSBjaGFuZ2UgdGhhdCBpbXByb3ZlcyBwZXJmb3JtYW5jZVxudGVzdDogQWRkaW5nIG1pc3Npbmcgb3IgY29ycmVjdGluZyBleGlzdGluZyB0ZXN0c1xuY2hvcmU6IENoYW5nZXMgdG8gdGhlIGJ1aWxkIHByb2Nlc3Mgb3IgYXV4aWxpYXJ5IHRvb2xzIGFuZCBsaWJyYXJpZXMgc3VjaCBhcyBkb2N1bWVudGF0aW9uIGdlbmVyYXRpb25cbmApO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tbWFuZExpbmUgfSBmcm9tICcuLi9jb21tYW5kLWxpbmUnO1xubmV3IENvbW1hbmRMaW5lKHByb2Nlc3MuYXJndikubWFpbigpO1xuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZExpbmU7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFBLFdBQUEsa0JBQUEsWUFBQTtBQUdFLElBQUEsU0FBQSxXQUFBLENBQVksV0FBcUIsRUFBQTtRQUZ6QixJQUFFLENBQUEsRUFBQSxHQUFhLEVBQUUsQ0FBQztBQUd4QixRQUFBLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDO0tBQ3ZCO0FBRU0sSUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLElBQUksR0FBWCxZQUFBOztRQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFJLENBQUEsRUFBQSxHQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUEsSUFBQSxJQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxFQUFBLENBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLEVBQUU7WUFDdEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2YsU0FBQTtBQUFNLGFBQUE7WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDYixTQUFBO0tBQ0YsQ0FBQTtBQUVPLElBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxNQUFNLEdBQWQsWUFBQTtBQUNFLFFBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvbENBVWYsQ0FBQyxDQUFDO0tBQ0EsQ0FBQTtBQUVPLElBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxJQUFJLEdBQVosWUFBQTtBQUNFLFFBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxza0JBVWYsQ0FBQyxDQUFDO0tBQ0EsQ0FBQTtJQUNILE9BQUMsV0FBQSxDQUFBO0FBQUQsQ0FBQyxFQUFBOztBQ3pDRCxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFOzs7OyJ9
