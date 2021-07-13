export const particlesOpstions = {
  'background': {
    'color': {
      'value': '#000000'
    },
    'position': '50% 50%',
    'repeat': 'no-repeat',
    'size': 'cover'
  },
  'fullScreen': {
    'enable': true,
    'zIndex': -1
  },
  'interactivity': {
    'events': {
      'onClick': {
        'enable': true,
        'mode': 'repulse'
      },
      'onHover': {
        'enable': true,
        'mode': 'bubble'
      }
    },
    'modes': {
      'bubble': {
        'distance': 400,
        'duration': 0.3,
        'opacity': 1,
        'size': 4
      },
      'grab': {
        'distance': 400,
        'links': {
          'opacity': 0.5
        }
      }
    }
  },
  'particles': {
    'links': {
      'color': {
        'value': '#ffffff'
      },
      'distance': 500,
      'opacity': 0.4,
      'width': 2
    },
    'move': {
      'attract': {
        'rotate': {
          'x': 600,
          'y': 1200
        }
      },
      'direction': 'bottom',
      'enable': true,
      'path': {},
      'outModes': {
        'bottom': 'out',
        'left': 'out',
        'right': 'out',
        'top': 'out'
      }
    },
    'number': {
      'density': {
        'enable': true
      },
      'value': 400
    },
    'opacity': {
      'random': {
        'enable': true
      },
      'value': {
        'min': 0.1,
        'max': 0.5
      },
      'animation': {
        'speed': 1,
        'minimumValue': 0.1
      }
    },
    'size': {
      'random': {
        'enable': true
      },
      'value': {
        'min': 1,
        'max': 10
      },
      'animation': {
        'speed': 40,
        'minimumValue': 0.1
      }
    }
  }
}

export const birthdayWishes = (n: number) => {
  return [
    ['The world is a better place for having had you in it for the last', `year${n % 10 === 1 ? '' : 's'}, so here's wishing you many happy returns.`],
    ['Congratulations on your', `${n % 10 === 1 ? 'st' : n % 10 === 2 ? 'nd' : n % 10 === 3 ? 'rd' : 'th'} birthday! Wishing you many happy returns for the coming years ahead.`],
    ['Happy', `${n % 10 === 1 ? 'st' : n % 10 === 2 ? 'nd' : n % 10 === 3 ? 'rd' : 'th'} birthday! I'm so pleased to hear you're over the hill instead of under it.`]
  ]
}
