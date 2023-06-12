/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'principal': '#5865f2',
      'branco': '#ffffff',
      'preto': '#030303',
      'fundo': '#f3f2ef',
      'cinza-azulado': '#56687a',
      'vermelho': '#eb3b5a',
      'verde': '#27ae60',
      'amarelo': '#f7b731',
      'cinza-1': '#eef3f8',
      'cinza-2': '#f2f2f2',
      'cinza-3': '#ededed',
      'cinza-4': '#dfdfdf',
      'cinza-5': '#cfcecb',
      'cinza-6': '#b3b3b3',
      'cinza-7': '#8e8e8e',
      'cinza-8': '#797979',
      'cinza-9': '#5f6163',
      'cinza-10': '#404040',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}

