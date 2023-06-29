const AboutSvgSelector = ({ id }) => {
  switch (id) {
    case 'mi':
      return (
        <svg
          width="20"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.14.075a1.44 1.44 0 0 1 1.438 1.441v10.99a1.11 1.11 0 0 1-1.108 1.11 1.109 1.109 0 0 1-1.107-1.11V4.342l-3.806 8.571a1.183 1.183 0 0 1-2.16.002L2.572 4.342v8.164c0 .614-.496 1.11-1.107 1.11a1.109 1.109 0 0 1-1.108-1.11V1.53A1.45 1.45 0 0 1 3.13.935l4.357 9.759 4.34-9.765c.232-.52.746-.854 1.313-.854Z"
            fill="url(#a)"
          />
          <path
            d="M18.596.075c.611 0 1.107.497 1.107 1.11v11.321c0 .614-.495 1.11-1.107 1.11a1.109 1.109 0 0 1-1.107-1.11V1.186c0-.614.495-1.111 1.107-1.111Z"
            fill="url(#b)"
          />
          <defs>
            <linearGradient
              id="a"
              x1=".357"
              y1="6.901"
              x2="19.642"
              y2="6.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#347AEC" />
              <stop offset="1" stopColor="#7664E7" />
            </linearGradient>
            <linearGradient
              id="b"
              x1=".357"
              y1="6.901"
              x2="19.642"
              y2="6.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#347AEC" />
              <stop offset="1" stopColor="#7664E7" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'shadow':
      return (
        <svg
          width="53"
          height="14"
          viewBox="0 0 53 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Ellipse 19" filter="url(#filter0_f_36_1660)">
            <ellipse
              cx="26.5724"
              cy="7.13771"
              rx="22.3261"
              ry="2.86232"
              fill="#202F4F"
              fillOpacity="0.2"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_36_1660"
              x="0.246338"
              y="0.275391"
              width="52.6522"
              height="13.7246"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_36_1660"
              />
            </filter>
          </defs>
        </svg>
      );
    default:
      return;
  }
};

export default AboutSvgSelector;
