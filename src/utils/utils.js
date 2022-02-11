export const buttonColors = {
  primary: {
    main: "#fff",
    text: "#111",
  },
  secondary: {
    main: "#f08e4d",
    text: "#f0f0f0",
  },
  disable: {
    main: "#888",
    text: "#111",
  },
};

export const regex = {
  money: /^(R\$\s?)(?!0\.00)[1-9]\d{0,2}(.\d{3})*(\,\d\d)?$/,
  percentage: /^([0-9][0-9]?[0-9]?(,[0-9]([0-9])?)?%)$/,
  month: /^^([1-9]|1[012])$/,
};
