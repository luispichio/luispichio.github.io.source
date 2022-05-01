module.exports = {
  siteTitle: 'Luis Pichio | Desarrollador electrónico / programador',
  siteDescription: '',
  siteKeywords: '',
  siteUrl: 'https://luispichio.github.io/',
  siteLanguage: 'es_AR',

  googleVerification: '',

  name: 'Luis Pichio',
  location: 'La Plata - Buenos Aires - Argentina',
  email: 'luispichio@gmail.com',
  github: 'https://github.com/luispichio/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/luispichio/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luispichio/',
    },
    {
      name: 'Blogger',
      url: 'https://luispichio.blogspot.com/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luispichio/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/luispichio',
    },
  ],

  navLinks: [
    {
      name: 'Acerca de',
      url: '#about',
    },
    {
      name: 'Experiencia',
      url: '#jobs',
    },
    {
      name: 'Portfolio',
      url: '#projects',
    },
    {
      name: 'Contacto',
      url: '#contact',
    },
  ],

  twitterHandle: '@luispichio',
  googleAnalyticsID: 'G-4XS044HJX1',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
