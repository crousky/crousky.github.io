// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Professional resume and work experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-using-services-in-angularjs-to-share-state",
        
          title: "Using services in AngularJS to share state",
        
        description: "This post walks through using an AngularJS service to share state",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/using-services-in-angularjs-to-share-state/";
          
        },
      },{id: "post-creating-a-mock-idbset-using-moq",
        
          title: "Creating a Mock IDbSet using Moq",
        
        description: "In this post I will demonstrate creating a mock IDbSet for unit testing with Moq",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/creating-a-mock-idbset-using-moq/";
          
        },
      },{id: "post-timing-health-checks-in-a-functional-way",
        
          title: "Timing Health Checks in a Functional Way",
        
        description: "In this post I will demonstrate timing health checks for web services using functional programming features in C#",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/timing-health-checks-in-a-functional-way/";
          
        },
      },{id: "post-publishing-smartthings-events-to-an-azure-event-hub",
        
          title: "Publishing SmartThings events to an Azure Event Hub",
        
        description: "In this post I will walk through setting up and Event Hub in Azure and publishing events to it using a Smart App that I will write",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/publishing-smartthings-events-to-an-azure-event-hub/";
          
        },
      },{id: "post-creating-an-azure-sas-token-in-f",
        
          title: "Creating an Azure SAS token in F#",
        
        description: "A walkthrough of creating an Azure SAS token programmatically in F#",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/creating-an-azure-sas-token-in-f/";
          
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/crousky", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ben-crouse", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
