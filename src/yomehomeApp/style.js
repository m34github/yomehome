import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blueGrey['800']
    },
    secondary: {
      main: '#F3E8D6'
    }
  }
});

const check = {
  back: {
    position: 'fixed',
    bottom: 32,
    left: 32
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: window.innerHeight - 24,
    width: window.innerWidth
  },
  typography: {
    border: '3px #fff solid',
    color: '#fff',
    padding: 12
  }
};

const common = {
  main: {
    padding: '12px 24px 12px 24px'
  }
};

const header = {
  sideMenu: {
    width: 200
  },
  typography: {
    flex: 1
  }
};

const home = {
  article: {
    background: 'url(http://source.unsplash.com/450x800/?selfie) center / cover',
    height: window.innerHeight,
    width: window.innerWidth
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32
  },
  input: {
    display: 'none'
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: window.innerHeight - 24,
    width: window.innerWidth
  },
  typography: {
    border: '3px #fff solid',
    color: '#fff',
    padding: 12
  }
};

const loader = {
  progress: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { theme, check, common, header, home, loader };
