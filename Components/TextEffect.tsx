import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'UI designer',
        1500,
        'Odoo developer',
        1500,
        'Mobile Developer',
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;