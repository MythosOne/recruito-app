import logoImg from './logo-image.svg';
// import logoText from './logo-text.svg';
import PhotoCover from './photo-cover.svg';

export const LogoImg = () => {
  return <img src={logoImg} alt="Logo Image" />;
};

export const LogoText = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="26"
      viewBox="0 0 100 26"
    >
      <text
        x="0"
        y="20"
        fontFamily="Nunito, sans-serif"
        // fontSize="20"
        fill="#000"
      >
        RECRUITO
      </text>
    </svg>
  );
};

export const UserAvatar = () => {
  return <img src={PhotoCover} alt="User Avatar" />;
};
