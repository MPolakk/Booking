export const modeType = {
  light: 'light',
  dark: 'dark',
};

class DarkMode {
  #modeType = modeType;
  #modeParam = this.#modeType.light;

  mode() {
    return this.#modeParam;
  }

  setMode(param) {
    Object.entries(this.#modeType).forEach(type => {
      if (type[1] === param) {
        this.#modeParam = param;
      }
    });
  }
}

const darkMode = new DarkMode();
const mode = () => darkMode.mode();
const setMode = type => darkMode.setMode(type);

export const useDarkMode = () => {
  return [mode, setMode];
};
