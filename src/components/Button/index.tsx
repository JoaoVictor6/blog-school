import { ButtonElement, Container } from "./style";

interface ButtonProps extends React.AnchorHTMLAttributes<ButtonProps> {
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  isTransparent?: boolean;
  whoIsLink: string;
}

export default function Button({
  placeholder = "undefined",
  isTransparent = false,
  whoIsLink,
}: ButtonProps): JSX.Element {
  return (
    <ButtonElement transparent={isTransparent} href={whoIsLink}>
      <Container>
        <p>{placeholder}</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.884 22.6667H19.1147H12.884ZM16 4V5.33333V4ZM24.4853 7.51467L23.5427 8.45733L24.4853 7.51467ZM28 16H26.6667H28ZM5.33333 16H4H5.33333ZM8.45733 8.45733L7.51467 7.51467L8.45733 8.45733ZM11.2853 20.7147C10.3532 19.7822 9.7184 18.5944 9.4613 17.3012C9.20421 16.008 9.33634 14.6677 9.84097 13.4496C10.3456 12.2315 11.2001 11.1905 12.2964 10.458C13.3927 9.72553 14.6815 9.33458 16 9.33458C17.3185 9.33458 18.6073 9.72553 19.7036 10.458C20.7999 11.1905 21.6544 12.2315 22.159 13.4496C22.6637 14.6677 22.7958 16.008 22.5387 17.3012C22.2816 18.5944 21.6468 19.7822 20.7147 20.7147L19.984 21.444C19.5663 21.8618 19.2349 22.3578 19.0089 22.9036C18.7829 23.4495 18.6666 24.0345 18.6667 24.6253V25.3333C18.6667 26.0406 18.3857 26.7189 17.8856 27.219C17.3855 27.719 16.7072 28 16 28C15.2928 28 14.6145 27.719 14.1144 27.219C13.6143 26.7189 13.3333 26.0406 13.3333 25.3333V24.6253C13.3333 23.432 12.8587 22.2867 12.016 21.444L11.2853 20.7147Z"
            stroke="#EEF8F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Container>
    </ButtonElement>
  );
}
