// 1. Solution
const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent", // ! 12 is not component
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);

// 2. Solution
const anotherRoutingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const anotherCreateRoutes = (config: {
  routes: {
    path: string;
    component: string | number; // ! union type can also be used to fix error
  }[];
}) => {};

anotherCreateRoutes(anotherRoutingConfig);
