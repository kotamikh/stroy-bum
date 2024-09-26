module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'russo-one': ['Russo One'],
                'nunito': ['Nunito'],
            },
            colors: {
                'grey': '#4d4d4d',
                'dark-grey': '#1c1c1c',
                'light-grey': '#808080',
                'transparent-grey-10': '#8080801A',
                'transparent-grey-15': '#80808026',
                'header-grey': '#969696',
                'accent': '#FFDF3C',
                'dark-accent': '#FCD111',
                'transparent-accent-80': '#FFDF3CCC',
                'transparent-accent-90': '#FFDF3CE6',
                'overlay': 'rgba(77,88,100,0.2)',
                'card': 'rgba(0,48,120,0.04)'
            },
            boxShadow: {
                'DEFAULT': '0 0 12px 0 rgba(0, 0, 0, 0.1)',
                'accent-dark':'0 0 12px 0 rgba(252, 209, 17, 0.5)',
                'accent': '0 0 30px 0 rgba(255, 223, 60, 0.3)'
            },
            width: {
                'inherit': 'inherit',
            },
            screens: {
                'phone': '375px',
                'xs': '550px'
            },
            backgroundImage: {
                'house': "url('/assets/images/main-page/house.jpg')",
                'delivery': "url('/assets/images/main-page/delivery.jpg')",
            }
        }
    },
};
