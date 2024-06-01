import { App } from "./app";

async function main(){
    const port = 5000;

    const app = new App(port);
    app.listen();
}

main();



