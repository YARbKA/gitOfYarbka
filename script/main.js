let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-рол");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");

alert(styles);
