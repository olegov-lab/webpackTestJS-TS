import AppController from '../controller/controller';
import { AppView } from '../view/appView';
var App = /** @class */ (function () {
    function App() {
        this.controller = new AppController();
        this.view = new AppView();
    }
    App.prototype.start = function () {
        var _this = this;
        document
            .querySelector('.sources')
            .addEventListener('click', function (e) { return _this.controller.getNews(e, function (data) { return _this.view.drawNews(data); }); });
        this.controller.getSources(function (data) { return _this.view.drawSources(data); });
    };
    return App;
}());
export default App;
//# sourceMappingURL=app.js.map