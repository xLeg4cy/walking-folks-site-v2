type LogoMarkProps = {
  size: number;
};

export default function LogoMark(props: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      xmlSpace="preserve"
      width={props.size}
      height={props.size}
    >
      <path
        className="st0 fill-th-primary"
        d="M725.5,800H74.9c-41.1,0-74.7-33.6-74.7-74.7V74.7C0.2,33.6,33.8,0,74.9,0h650.6c41.1,0,74.7,33.6,74.7,74.7
	v650.6C800.2,766.4,766.6,800,725.5,800z"
      />
      <g className="fill-white">
        <polygon
          className="st2"
          points="37.7,197.7 114.4,197.7 230.8,528.3 219.7,524 307.6,298 338,387.8 216.6,665.8 	"
        />
        <path className="st2" d="M441.4,503.8" />
        <path className="st2" d="M420.3,450.1" />
        <polyline
          className="st2"
          points="387.1,531.6 255.6,197.7 321.3,197.7 420.3,450.1 	"
        />
        <path className="st2" d="M387.1,531.6" />
        <path className="st2" d="M408.3,585.3" />
        <polyline
          className="st2"
          points="441.4,503.8 448.8,522.7 435.8,520.3 544.8,197.7 615.4,197.7 439.5,664.5 408.3,585.3 	"
        />
        <polyline
          className="st2"
          points="570,263.7 545.1,197.7 762.3,197.9 736.3,259.9 	"
        />
        <polyline
          className="st2"
          points="528.3,397.7 503.5,331.6 681.3,331.9 658.8,393.8 	"
        />
      </g>
    </svg>
  );
}
