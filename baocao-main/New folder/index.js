import Login from "./login.js";

class App {
    activeScreen;
    container;

    constructor(container) {
        this.container = container;
    }

    changeActiveScreen(screen) {
        if(this.activeScreen !== undefined){
            this.container.innerHTML = "";
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }

}

const container = document.getElementById("app");
const login = new Login

const app = new App(container);
app.changeActiveScreen(login);

export default app;

