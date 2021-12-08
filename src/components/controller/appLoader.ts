import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '2e0663a32a724ee789eb46ef1b47ff39', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
