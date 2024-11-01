/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#e8e6e6",
      "font-color": "#00000",
    },
    fontFamily: {
      nav: ["Montserrat"],
      header: ["Montserrat"],
      body: ["Montserrat"],
      cta: ["Montserrat"],
      footer: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
};

/*Hero Section

	

2. Headers and Titles

	•	Main Headers (e.g., H1):
	•	Mobile: text-3xl
	•	Tablet: text-4xl
	•	Desktop: text-5xl
	•	Section Headers (e.g., H2):
	•	Mobile: text-2xl
	•	Tablet: text-3xl
	•	Desktop: text-4xl
	•	Subsection Headers (e.g., H3):
	•	Mobile: text-xl
	•	Tablet: text-2xl
	•	Desktop: text-3xl
	•	Small Headers (e.g., H4-H6):
	•	Mobile: text-lg
	•	Tablet: text-xl
	•	Desktop: text-2xl

3. Body Content

	•	Main Body Text:
	•	Mobile: text-base
	•	Tablet: text-lg
	•	Desktop: text-lg
	•	Secondary Body Text:
	•	Mobile: text-sm
	•	Tablet: text-base
	•	Desktop: text-base


6. Buttons

	•	Primary Buttons:
	•	Mobile: text-base
	•	Tablet: text-lg
	•	Desktop: text-lg
	•	Secondary/Small Buttons:
	•	Mobile: text-sm
	•	Tablet: text-base
	•	Desktop: text-base

7. Forms

	•	Input Labels:
	•	Mobile: text-sm
	•	Tablet: text-base
	•	Desktop: text-base
	•	Input Text:
	•	Mobile: text-base
	•	Tablet: text-lg
	•	Desktop: text-lg
	•	Help Text/Error Messages:
	•	Mobile: text-xs
	•	Tablet: text-sm
	•	Desktop: text-sm

8. Captions and Disclaimers

	•	Captions:
	•	Mobile: text-xs
	•	Tablet: text-sm
	•	Desktop: text-sm
	•	Disclaimers/Legal Text:
	•	Mobile: text-xs
	•	Tablet: text-sm
	•	Desktop: text-sm
  */
