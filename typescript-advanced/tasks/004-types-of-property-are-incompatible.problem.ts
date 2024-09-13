const routingConfig = {
    routes: [
        {
            path: "home",
            component: "HomeComponent"
        },
        {
            path: "about",
            component: 12
        },
        {
            path: "contact",
            component: "ContactComponent"
        }
    ]
};

// workaround #1 : add the number type to component
function createRoutes(config: {
    routes: {
        path: string;
        component: string | number;
    }[];
}): void {
    console.log(config);
}

createRoutes(routingConfig);

// workaround #2 : clarify what each component type means using type
type ComponentName = string;
type ComponentIndex = number;
function createRoutes2(config: {
    routes: {
        path: string;
        component: ComponentName | ComponentIndex;
    }[];
}): void {
    console.log(config);
}

createRoutes2(routingConfig);

