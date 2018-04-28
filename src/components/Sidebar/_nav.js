export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Reports',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Storyboard Deadlines',
      url: '/design',
      icon: 'icon-chart'
    },
    {
      name: 'Review Deadlines',
      url: '/reviews',
      icon: 'icon-chart'
    },
    {
      name: 'Storyboards Reworks',
      url: '/returns',
      icon: 'icon-chart'
    },
    {
      title: true,
      name: 'Admin',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Projects',
      url: '/projects',
      icon: 'icon-disc'
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people'
    }
  ]
};
