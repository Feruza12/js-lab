const routingConfig = {
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

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);


//solution 1
const routingConfigOne = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent",
    },
    {
      path: "contact",
      component: "ContactComponent", 
    },
  ],
};

const createRoutesOne = (config: {
  routes: {
    path: string;
    component: string; 
  }[];
}) => {};

createRoutesOne(routingConfigOne);

//solution 2

const routingConfigTwo = {
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

const createRoutesTwo = (config: {
  routes: {
    path: string;
    component: string | number;  
  }[];
}) => {};

createRoutesTwo(routingConfigTwo);