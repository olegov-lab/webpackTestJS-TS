import News from './news/news';
import Sources from './sources/sources';
var AppView = /** @class */ (function () {
    function AppView() {
        this.news = new News();
        this.sources = new Sources();
    }
    AppView.prototype.drawNews = function (data) {
        var values = (data === null || data === void 0 ? void 0 : data.articles) ? data === null || data === void 0 ? void 0 : data.articles : [];
        this.news.draw(values);
    };
    AppView.prototype.drawSources = function (data) {
        var values = (data === null || data === void 0 ? void 0 : data.sources) ? data === null || data === void 0 ? void 0 : data.sources : [];
        this.sources.draw(values);
    };
    return AppView;
}());
export { AppView };
export default AppView;
//# sourceMappingURL=appView.js.map