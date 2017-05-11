import { AppComponent } from "./app.component";

describe("Component:App", () => {
    it("should be possible to instansiate", () => {
        let appComponent = new AppComponent();
        expect(appComponent.getGreeting("Yngve")).toEqual("Hello Yngve!");
    })
})