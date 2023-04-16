import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactPropTypes } from "react";
import { AiOutlineLaptop } from "react-icons/ai";

export default function NewsDescription(props: { className?: string }) {
  const t = useTranslations();
  return (
    <div className={`relative ${props.className}`}>
      <img
        src="https://res.cloudinary.com/dg40lzqln/image/upload/v1681639447/newsDesc_qnoy0i.png"
        alt="your-image-alt"
        className="brightness-[0.45] blur-small w-full h-full object-cover"
      />
      <div className="sm:absolute lg:inset-0 bottom-0 flex items-center justify-start">
        <div className="p-8 max-w-3xl mx-auto gap-5 flex flex-col lg:w-2/3">
          <svg
            className="text-ueventContrast absolute z-0 top-0 right-0 w-1/4"
            viewBox="0 0 377 669"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="335.629"
              cy="332.63"
              r="332.536"
              transform="rotate(0.274063 335.629 332.63)"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M598.951 333.889C598.071 517.885 479.161 665.856 334.038 665.162C188.915 664.467 71.4264 515.366 72.3065 331.37C73.1866 147.374 192.097 -0.596399 337.22 0.0977744C482.343 0.791948 599.832 149.894 598.951 333.889Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M509.557 333.462C509.116 425.509 489.121 508.674 457.221 568.716C425.284 628.827 381.646 665.389 334.039 665.162C286.432 664.934 243.146 627.955 211.786 567.542C180.462 507.198 161.263 423.845 161.703 331.798C162.143 239.75 182.139 156.585 214.039 96.5439C245.976 36.4328 289.613 -0.129945 337.22 0.0977768C384.828 0.325498 428.113 37.304 459.474 97.7179C490.798 158.062 509.997 241.414 509.557 333.462Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M421.121 333.039C420.68 425.19 410.606 508.519 394.702 568.738C386.748 598.858 377.356 623.112 367.036 639.786C356.663 656.545 345.632 665.217 334.519 665.164C323.406 665.111 312.458 656.334 302.246 639.476C292.086 622.704 282.927 598.362 275.26 568.166C259.933 507.799 250.657 424.377 251.098 332.225C251.538 240.074 261.612 156.745 277.516 96.5262C285.471 66.4058 294.863 42.1521 305.183 25.4783C315.556 8.71879 326.587 0.0469209 337.7 0.100078C348.813 0.153235 359.761 8.93023 369.973 25.7882C380.133 42.56 389.292 66.9024 396.958 97.0975C412.286 157.465 421.562 240.887 421.121 333.039Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M336.48 154.858C428.524 155.298 511.683 175.669 571.719 208.173C631.818 240.712 668.396 285.189 668.164 333.74C667.932 382.291 630.93 426.415 570.522 458.377C510.178 490.306 426.827 509.881 334.784 509.44C242.741 509 159.581 488.629 99.5455 456.125C39.4464 423.586 2.86808 379.109 3.10031 330.558C3.33255 282.008 40.3347 237.883 100.742 205.921C161.086 173.992 244.437 154.418 336.48 154.858Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M336.36 179.85C428.435 180.291 511.637 197.876 571.714 225.886C631.92 253.957 668.362 292.209 668.164 333.74C667.965 375.27 631.159 413.173 570.687 440.666C510.345 468.1 426.978 484.888 334.903 484.448C242.829 484.008 159.627 466.423 99.5493 438.412C39.3436 410.342 2.90125 372.089 3.09991 330.559C3.29856 289.028 40.1051 251.126 100.577 223.633C160.919 196.198 244.286 179.41 336.36 179.85Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
          </svg>
          <svg
            className="text-ueventContrast absolute z-0 bottom-0 left-0 w-1/4"
            viewBox="0 0 543 672"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="206.629"
              cy="335.63"
              r="332.536"
              transform="rotate(0.274063 206.629 335.63)"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M469.951 336.889C469.071 520.885 350.161 668.856 205.038 668.162C59.9154 667.467 -57.5736 518.366 -56.6935 334.37C-55.8134 150.374 63.0966 2.40363 208.22 3.0978C353.343 3.79198 470.832 152.894 469.951 336.889Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M380.557 336.462C380.116 428.509 360.121 511.674 328.221 571.716C296.284 631.827 252.646 668.389 205.039 668.162C157.432 667.934 114.146 630.955 82.7858 570.541C51.4619 510.198 32.2627 426.845 32.703 334.798C33.1433 242.75 53.139 159.585 85.0388 99.5439C116.976 39.4328 160.613 2.87005 208.22 3.09777C255.828 3.32549 299.113 40.304 330.474 100.718C361.798 161.062 380.997 244.414 380.557 336.462Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M292.121 336.039C291.68 428.19 281.606 511.519 265.702 571.738C257.748 601.858 248.356 626.112 238.036 642.786C227.663 659.545 216.632 668.217 205.519 668.164C194.406 668.111 183.458 659.334 173.246 642.476C163.086 625.704 153.927 601.362 146.26 571.166C130.933 510.799 121.657 427.377 122.098 335.225C122.538 243.074 132.612 159.745 148.516 99.5262C156.471 69.4058 165.863 45.1521 176.183 28.4783C186.556 11.7188 197.587 3.04692 208.7 3.10008C219.813 3.15324 230.761 11.9302 240.973 28.7882C251.133 45.56 260.292 69.9024 267.958 100.098C283.286 160.465 292.562 243.887 292.121 336.039Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M207.48 157.858C299.524 158.298 382.683 178.669 442.719 211.173C502.818 243.712 539.396 288.189 539.164 336.74C538.932 385.291 501.93 429.415 441.522 461.377C381.178 493.306 297.827 512.881 205.784 512.44C113.741 512 30.5815 491.629 -29.4545 459.125C-89.5536 426.586 -126.132 382.109 -125.9 333.558C-125.667 285.008 -88.6653 240.883 -28.2577 208.921C32.0865 176.992 115.437 157.418 207.48 157.858Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
            <path
              d="M207.36 182.85C299.435 183.291 382.637 200.876 442.714 228.886C502.92 256.957 539.362 295.209 539.164 336.74C538.965 378.27 502.159 416.172 441.687 443.666C381.345 471.1 297.978 487.888 205.903 487.448C113.829 487.008 30.6266 469.423 -29.4507 441.412C-89.6564 413.342 -126.099 375.089 -125.9 333.559C-125.701 292.028 -88.8949 254.126 -28.4234 226.633C31.9192 199.198 115.286 182.41 207.36 182.85Z"
              stroke="#11B7CE"
              strokeOpacity="0.6"
              strokeWidth="3"
            />
          </svg>
          <span className="monserat z-20 tracking-wider text-ueventText font-extrabold lg:text-5xl w-2/3 text-xl">
            Latest News
          </span>
          <p className="text-xs lg:text-xl z-20 roboto text-ueventText font-bold tracking-wide">
            Our news aggregation page compiles the latest updates and breaking
            news from reputable organizations, including local and international
            newspapers, television news networks, magazines, and online news
            outlets. Stay informed on politics, sports, entertainment, business,
            health, and more, all in one place. We update regularly, so you
            never miss out on the latest stories and breaking news.
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}