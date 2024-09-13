// ERROR: Type 'number' is not assignable to type 'string'

// --- FIX 1: convert component to union type to also accept numbers ---
const createRoutes = (config: {
  routes: {
    path: string;
    component: string | number;
  }[];
}) => {};

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

createRoutes(routingConfig);

// --- FIX 2: change component to string ---
// const routingConfig = {
//   routes: [
//     {
//       path: "home",
//       component: "HomeComponent",
//     },
//     {
//       path: "about",
//       component: "12",
//     },
//     {
//       path: "contact",
//       component: "ContactComponent",
//     },
//   ],
// };

// const createRoutes = (config: {
//   routes: {
//     path: string;
//     component: string | number;
//   }[];
// }) => {};
