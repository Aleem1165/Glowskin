/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headercolor: "#09253e",
        headerBg: "#072740",
        yellow: "#FFAC0C",
        yellowDis: "#AEA696",
        logoLine: "#D9D9D9",
        lineBlue: "#0CAAF3",
        bgcolor: "#021a24",
        cardcolor: "#002C4D",
        textgray: "#6B7174",
        //
        darkBlue2: "#12101B",
        headerBorder: "#0CAAF3",
        headerBorder2: "#2A304A",
        // yellow: "#FFAC0C",
        dashboardImgBg: "#3f4f95",
        textDissable: "#FFFFFF",
        lineColor: "#003E5A",
        homeMainImgBg: "#005C9E",
        grayText: "#848B8D",
        blue: "#60A5FA",
        blue2: "#01233D",
        blue3: "#003962",
        blue4: "#033d5e",
        btnDark: "#05263F",
        btnLight: "#033B63",
        green: "#61C553",
        btnGray: "#444B52",
        btnGray2: "#2C3034",
        gemsBtn: "#07496E",
        progressBlue: "#103A56",
        paymentModalBg: "#002C4C",
        paymentModalBg2: "#001F34",
        paymentImgBg: "#00233B",
        inputBG: "#154669",
        red: "#EF4444",
        red2: "#FF3939",
        lightGray: "#CBCACA",
        disabledGray: "#A7A7A7",
        disabledGray2: "#757575",
        steamBtn: "#334155",
        btnBlue: "#2563EB",
        pink: "#3F1A48",
        pink2: "#C50CF3",
        darkBlue: "#07496C",
        gold: "#3F2E0D",
        red2: "#3D1725",
      },
      width: {
        "5p": "5%",
        "10p": "10%",
        "15p": "12%",
        "18p": "18%",
        "20p": "20%",
        "25p": "25%",
        "29p": "29%",
        "30p": "30%",
        "33p": "33%",
        "40p": "40%",
        "45p": "45%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "15p": "15%",
        //
        // "10p": "10%",
        // "15p": "15%",
        // "20p": "20%",
        "24p": "24%",
        "27p": "27%",
        "28p": "28%",
        // "30p": "30%",
        "39p": "39%",
        // "40p": "40%",
        "42p": "42%",
        "43p": "43%",
        49: "49%",
        // "50p": "50%",
        "55p": "55%",
        // "60p": "60%",
        // "70p": "70%",
        "80p": "80%",
        "85p": "85%",
        "90p": "90%",
        "96p": "96%",
        "100p": "100%",
      },
      height: {
        49: "49%",
        "5p": "5%",
        "10p": "10%",
        "43p": "43%",
        "30p": "50%",
        "80p": "80%",
        "83p": "83%",
        "84p": "84%",
        "78p": "78%",
        "113p": "113%",
      },
      margin: {
        "5p": "5%",
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "52p": "52%",
        "60p": "60%",
      },
      screens: {
        "2xl": "1500px",
        "3xl": "1800px",
      },
      fontFamily: {
        custom: ["YourCustomFont", "Puppies Play"],
      },
      fontSize: {
        'xxs': '0.5rem', 
        'xxxs': '0.4rem', 
      }
    },
  },
  plugins: [],
};
