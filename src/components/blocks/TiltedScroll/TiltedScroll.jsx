/*
	jsrepo 1.28.0
	Installed from https://reactbits.dev/tailwind/
	1-19-2025
*/

const TiltedScroll = () => {
  const items = [
    { id: "1", text: "Groupe Mermoz" },
    { id: "2", text: "FMenoni" },
    { id: "3", text: "Templates" },
    { id: "4", text: "Portfolio" },
    { id: "5", text: "Groupe Mermoz" },
    { id: "6", text: "FMenoni" },
    { id: "7", text: "Templates" },
    { id: "8", text: "Portfolio" },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[250px] w-[300px] gap-5 animate-skew-scroll grid-cols-1 sm:w-[300px] sm:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 cursor-pointer rounded-[0.5em] border bg-neutral-100 border-gray-400 p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mr-2"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <p className="text-neutral-900">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiltedScroll;

//tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'skew-scroll': 'skew-scroll 20s linear infinite',
//       },
//       keyframes: {
//         'skew-scroll': {
//           '0%': {
//             transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)',
//           },
//           '100%': {
//             transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)',
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };