import { Defs, G, Path, Rect, Svg } from 'react-native-svg';

/**
 * A name space for all SVG elements
 * @namespace SVGElements
 * @property {string} SVGElements - The name of the namespace
 */
export namespace SVGElements {
  /**
   * The SVG element for the logo
   * @memberof SVGElements
   * @property {string} logo - The name of the logo element
   */
  export const Logo = () => (
    <Svg width="115" height="22" viewBox="0 0 115 22" fill="none">
      <Path
        d="M14.8345 7.2118C14.6902 6.71009 14.4875 6.26681 14.2263 5.88194C13.9652 5.4902 13.6456 5.16032 13.2676 4.89228C12.8965 4.61738 12.4704 4.40776 11.9893 4.26344C11.5151 4.11911 10.9893 4.04695 10.412 4.04695C9.333 4.04695 8.38458 4.31498 7.56674 4.85105C6.75577 5.38711 6.12348 6.16716 5.66989 7.19118C5.2163 8.20833 4.9895 9.45227 4.9895 10.923C4.9895 12.3938 5.21286 13.6446 5.65958 14.6755C6.1063 15.7064 6.73858 16.4933 7.55643 17.0362C8.37427 17.5723 9.33988 17.8403 10.4532 17.8403C11.4635 17.8403 12.326 17.6616 13.0408 17.3043C13.7624 16.94 14.3122 16.428 14.6902 15.7682C15.0751 15.1085 15.2675 14.3284 15.2675 13.4281L16.1747 13.5621H10.7316V10.2014H19.5664V12.8611C19.5664 14.7167 19.1746 16.3112 18.3911 17.6445C17.6077 18.9709 16.5287 19.9949 15.1541 20.7165C13.7796 21.4313 12.2058 21.7887 10.4326 21.7887C8.45331 21.7887 6.71453 21.3522 5.2163 20.4794C3.71806 19.5997 2.54971 18.3523 1.71125 16.7373C0.879665 15.1153 0.463871 13.191 0.463871 10.9643C0.463871 9.25297 0.711286 7.72724 1.20612 6.38708C1.70782 5.04004 2.40883 3.89919 3.30914 2.96451C4.20946 2.02983 5.25753 1.31851 6.45337 0.830556C7.64921 0.342599 8.9447 0.0986209 10.3398 0.0986209C11.5357 0.0986209 12.649 0.273873 13.6799 0.624378C14.7108 0.968009 15.6249 1.45597 16.4221 2.08825C17.2262 2.72053 17.8826 3.47308 18.3911 4.34591C18.8997 5.21186 19.2262 6.16716 19.3705 7.2118H14.8345ZM22.8369 21.5V5.66545H27.0945V8.42825H27.2594C27.5481 7.44547 28.0326 6.70322 28.713 6.20152C29.3934 5.69294 30.1768 5.43866 31.0634 5.43866C31.2833 5.43866 31.5204 5.4524 31.7747 5.47989C32.029 5.50738 32.2524 5.54518 32.4448 5.59329V9.49007C32.2386 9.42822 31.9534 9.37324 31.5892 9.32513C31.2249 9.27702 30.8916 9.25297 30.5892 9.25297C29.9432 9.25297 29.3659 9.39386 28.8573 9.67564C28.3556 9.95054 27.957 10.3354 27.6615 10.8302C27.3728 11.3251 27.2285 11.8955 27.2285 12.5415V21.5H22.8369ZM44.8697 14.7579V5.66545H49.2613V21.5H45.0449V18.6238H44.88C44.5226 19.5516 43.9281 20.2973 43.0965 20.8608C42.2718 21.4244 41.265 21.7062 40.076 21.7062C39.0176 21.7062 38.0864 21.4656 37.2823 20.9846C36.4782 20.5035 35.8493 19.8196 35.3957 18.9331C34.949 18.0465 34.7222 16.9847 34.7154 15.7476V5.66545H39.107V14.9641C39.1138 15.8988 39.3647 16.6376 39.8595 17.1806C40.3544 17.7235 41.0176 17.995 41.8491 17.995C42.3783 17.995 42.8732 17.8747 43.3336 17.6341C43.7941 17.3867 44.1652 17.0225 44.447 16.5414C44.7357 16.0603 44.8765 15.4658 44.8697 14.7579ZM52.8565 21.5V0.387272H57.2481V8.32516H57.3822C57.5746 7.89906 57.8529 7.46608 58.2172 7.02623C58.5883 6.57951 59.0694 6.20839 59.6604 5.91287C60.2584 5.61047 61.0006 5.45928 61.8872 5.45928C63.0418 5.45928 64.107 5.76167 65.0829 6.36646C66.0589 6.96438 66.8389 7.86813 67.4231 9.07772C68.0073 10.2804 68.2993 11.789 68.2993 13.6033C68.2993 15.3696 68.0141 16.861 67.4437 18.0774C66.8801 19.287 66.1104 20.2045 65.1345 20.8299C64.1654 21.4485 63.0796 21.7577 61.8769 21.7577C61.0247 21.7577 60.2996 21.6168 59.7017 21.3351C59.1106 21.0533 58.6261 20.6993 58.2481 20.2732C57.8701 19.8403 57.5815 19.4038 57.3822 18.964H57.1863V21.5H52.8565ZM57.1554 13.5827C57.1554 14.5243 57.2859 15.3456 57.5471 16.0466C57.8083 16.7476 58.1863 17.2939 58.6811 17.6857C59.1759 18.0706 59.7773 18.263 60.4852 18.263C61.1999 18.263 61.8047 18.0671 62.2995 17.6754C62.7944 17.2768 63.1689 16.727 63.4232 16.0259C63.6844 15.3181 63.8149 14.5037 63.8149 13.5827C63.8149 12.6687 63.6878 11.8646 63.4335 11.1704C63.1792 10.4763 62.8047 9.93336 62.3098 9.54162C61.815 9.14988 61.2068 8.95401 60.4852 8.95401C59.7704 8.95401 59.1656 9.14301 58.6708 9.521C58.1828 9.899 57.8083 10.4351 57.5471 11.1292C57.2859 11.8233 57.1554 12.6412 57.1554 13.5827ZM86.4663 6.985C86.2395 6.29086 85.9405 5.66889 85.5694 5.11908C85.2052 4.5624 84.7687 4.08818 84.2602 3.69644C83.7585 3.3047 83.188 3.00574 82.5489 2.79956C81.9097 2.59339 81.2087 2.4903 80.4459 2.4903C79.195 2.4903 78.0576 2.81331 77.0336 3.45934C76.0096 4.10537 75.1952 5.05723 74.5904 6.31492C73.9856 7.57261 73.6832 9.11552 73.6832 10.9436C73.6832 12.7718 73.989 14.3147 74.6007 15.5724C75.2123 16.83 76.0405 17.7819 77.0851 18.4279C78.1298 19.074 79.305 19.397 80.6108 19.397C81.8204 19.397 82.8856 19.1393 83.8066 18.6238C84.7344 18.1015 85.456 17.3661 85.9715 16.4177C86.4938 15.4624 86.7549 14.3387 86.7549 13.0467L87.5384 13.2116H81.1881V10.9436H89.2291V13.2116C89.2291 14.9504 88.858 16.4624 88.1157 17.7475C87.3803 19.0327 86.3632 20.0293 85.0643 20.7371C83.7722 21.4381 82.2877 21.7887 80.6108 21.7887C78.7414 21.7887 77.0989 21.3488 75.6831 20.4691C74.2742 19.5894 73.1746 18.3386 72.3843 16.7166C71.6008 15.0947 71.209 13.1704 71.209 10.9436C71.209 9.27359 71.4324 7.77192 71.8791 6.43862C72.3327 5.09846 72.9719 3.9576 73.7966 3.01605C74.6213 2.0745 75.5972 1.35288 76.7243 0.851175C77.8514 0.349472 79.0919 0.0986209 80.4459 0.0986209C81.5592 0.0986209 82.597 0.267 83.5592 0.603759C84.5282 0.933645 85.3907 1.40442 86.1467 2.01609C86.9096 2.62088 87.5453 3.34594 88.0539 4.19127C88.5624 5.02974 88.9129 5.96098 89.1054 6.985H86.4663ZM99.7107 21.8299C98.2812 21.8299 97.0269 21.4897 95.9479 20.8093C94.8758 20.1289 94.0373 19.1771 93.4326 17.9537C92.8346 16.7304 92.5357 15.3009 92.5357 13.6652C92.5357 12.0158 92.8346 10.5759 93.4326 9.34575C94.0373 8.11555 94.8758 7.16025 95.9479 6.47986C97.0269 5.79947 98.2812 5.45928 99.7107 5.45928C101.14 5.45928 102.391 5.79947 103.463 6.47986C104.542 7.16025 105.381 8.11555 105.979 9.34575C106.583 10.5759 106.886 12.0158 106.886 13.6652C106.886 15.3009 106.583 16.7304 105.979 17.9537C105.381 19.1771 104.542 20.1289 103.463 20.8093C102.391 21.4897 101.14 21.8299 99.7107 21.8299ZM99.7107 19.6444C100.797 19.6444 101.69 19.366 102.391 18.8094C103.092 18.2527 103.611 17.5207 103.948 16.6136C104.284 15.7064 104.453 14.7236 104.453 13.6652C104.453 12.6068 104.284 11.6206 103.948 10.7065C103.611 9.79247 103.092 9.05366 102.391 8.49011C101.69 7.92655 100.797 7.64477 99.7107 7.64477C98.6248 7.64477 97.7314 7.92655 97.0304 8.49011C96.3294 9.05366 95.8105 9.79247 95.4737 10.7065C95.137 11.6206 94.9686 12.6068 94.9686 13.6652C94.9686 14.7236 95.137 15.7064 95.4737 16.6136C95.8105 17.5207 96.3294 18.2527 97.0304 18.8094C97.7314 19.366 98.6248 19.6444 99.7107 19.6444ZM112.373 21.6649C111.864 21.6649 111.428 21.4828 111.063 21.1186C110.699 20.7543 110.517 20.3179 110.517 19.8093C110.517 19.3008 110.699 18.8643 111.063 18.5001C111.428 18.1358 111.864 17.9537 112.373 17.9537C112.881 17.9537 113.318 18.1358 113.682 18.5001C114.046 18.8643 114.228 19.3008 114.228 19.8093C114.228 20.1461 114.142 20.4554 113.971 20.7371C113.806 21.0189 113.582 21.2457 113.3 21.4175C113.026 21.5825 112.716 21.6649 112.373 21.6649Z"
        fill="#FF5A5F"
      />
    </Svg>
  );

  export const FacebookIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_3_125)">
        <Path
          d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37262 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z"
          fill="#1877F2"
        />
        <Path
          d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z"
          fill="white"
        />
      </G>
    </Svg>
  );

  export const GoogleIcon = () => (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_3_136)">
        <Path
          d="M8.36061 0.789371C5.96264 1.62125 3.89463 3.20018 2.46035 5.29425C1.02606 7.38832 0.301099 9.88714 0.391944 12.4237C0.48279 14.9602 1.38466 17.4008 2.96507 19.3869C4.54549 21.373 6.72115 22.7999 9.17249 23.4581C11.1598 23.9709 13.242 23.9934 15.24 23.5237C17.05 23.1172 18.7233 22.2476 20.0962 21C21.5251 19.6619 22.5623 17.9596 23.0962 16.0762C23.6764 14.0281 23.7797 11.8743 23.3981 9.78H12.2381V14.4094H18.7012C18.5721 15.1477 18.2953 15.8524 17.8874 16.4813C17.4795 17.1102 16.949 17.6503 16.3275 18.0694C15.5384 18.5916 14.6487 18.9429 13.7156 19.1006C12.7799 19.2747 11.8201 19.2747 10.8844 19.1006C9.9359 18.9047 9.03869 18.5133 8.24999 17.9512C6.98277 17.0542 6.03126 15.7799 5.53124 14.31C5.02291 12.8126 5.02291 11.1893 5.53124 9.69187C5.88716 8.64228 6.47555 7.68663 7.25249 6.89625C8.1416 5.97515 9.26724 5.31674 10.5059 4.99326C11.7446 4.66979 13.0484 4.69374 14.2744 5.0625C15.2321 5.35635 16.1079 5.87002 16.8319 6.5625C17.5606 5.8375 18.2881 5.11062 19.0144 4.38187C19.3894 3.99 19.7981 3.61687 20.1675 3.21562C19.0622 2.18722 17.765 1.38694 16.35 0.860622C13.7732 -0.0750226 10.9537 -0.100167 8.36061 0.789371Z"
          fill="white"
        />
        <Path
          d="M8.36061 0.789367C10.9535 -0.100776 13.773 -0.0762934 16.35 0.858742C17.7652 1.38864 19.0619 2.19277 20.1656 3.22499C19.7906 3.62624 19.395 4.00124 19.0125 4.39124C18.285 5.11749 17.5581 5.84124 16.8319 6.56249C16.1079 5.87001 15.2321 5.35635 14.2744 5.06249C13.0488 4.69244 11.745 4.66711 10.506 4.98926C9.26702 5.31141 8.1407 5.96861 7.25061 6.88874C6.47367 7.67912 5.88529 8.63477 5.52936 9.68437L1.64249 6.67499C3.03375 3.91604 5.44264 1.80566 8.36061 0.789367Z"
          fill="#E33629"
        />
        <Path
          d="M0.611248 9.65624C0.82001 8.62081 1.16686 7.6181 1.6425 6.67499L5.52937 9.69186C5.02104 11.1893 5.02104 12.8126 5.52937 14.31C4.23437 15.31 2.93875 16.315 1.6425 17.325C0.452156 14.9556 0.0891221 12.2559 0.611248 9.65624Z"
          fill="#F8BD00"
        />
        <Path
          d="M12.2381 9.77814H23.3981C23.7797 11.8724 23.6764 14.0262 23.0963 16.0744C22.5623 17.9578 21.5252 19.66 20.0963 20.9981C18.8419 20.0194 17.5819 19.0481 16.3275 18.0694C16.9494 17.6499 17.4802 17.1092 17.8881 16.4796C18.296 15.8501 18.5726 15.1447 18.7013 14.4056H12.2381C12.2363 12.8644 12.2381 11.3213 12.2381 9.77814Z"
          fill="#587DBD"
        />
        <Path
          d="M1.64062 17.325C2.93687 16.325 4.2325 15.32 5.5275 14.31C6.02851 15.7804 6.98138 17.0548 8.25 17.9512C9.04116 18.5107 9.9403 18.899 10.89 19.0912C11.8257 19.2653 12.7855 19.2653 13.7213 19.0912C14.6543 18.9335 15.544 18.5823 16.3331 18.06C17.5875 19.0387 18.8475 20.01 20.1019 20.9887C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4487C7.60632 23.0291 6.13814 22.2892 4.86563 21.2756C3.51886 20.2062 2.41882 18.8586 1.64062 17.325Z"
          fill="#319F43"
        />
      </G>
    </Svg>
  );

  export const Pickup = (
    { color }: {
      color: string
    }
  ) => (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
      <Path d="M4.5 17.5L9.5 18.5L10.25 17M15.5 21.5V17.5L11.5 14.5L12.5 8.5M12.5 4.5C12.5 4.76522 12.6054 5.01957 12.7929 5.20711C12.9804 5.39464 13.2348 5.5 13.5 5.5C13.7652 5.5 14.0196 5.39464 14.2071 5.20711C14.3946 5.01957 14.5 4.76522 14.5 4.5C14.5 4.23478 14.3946 3.98043 14.2071 3.79289C14.0196 3.60536 13.7652 3.5 13.5 3.5C13.2348 3.5 12.9804 3.60536 12.7929 3.79289C12.6054 3.98043 12.5 4.23478 12.5 4.5Z" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M7.5 12.5V9.5L12.5 8.5L15.5 11.5L18.5 12.5" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
  export const Delivery = (
    { color }: {
      color: string
    }
  ) => (
    <Svg width="25" height="15" viewBox="0 0 25 15" fill="none">
      <Path d="M1.7303 8.42273H9.11208V9.65302H1.7303V8.42273ZM0.5 5.34698H6.65148V6.57728H0.5V5.34698Z" fill={color} />
      <Path d="M24.4502 7.25699L22.6047 2.95095C22.5574 2.84027 22.4785 2.74594 22.378 2.67967C22.2775 2.6134 22.1598 2.57811 22.0394 2.57817H20.1939V1.34788C20.1939 1.18473 20.1291 1.02826 20.0138 0.9129C19.8984 0.797537 19.7419 0.732727 19.5788 0.732727H9.73643V1.96302H18.9636V9.68682C18.6833 9.84959 18.438 10.0662 18.2419 10.3243C18.0457 10.5823 17.9026 10.8766 17.8207 11.1902H13.9551C13.8054 10.6104 13.4493 10.105 12.9536 9.76888C12.458 9.43276 11.8567 9.28895 11.2626 9.36441C10.6685 9.43988 10.1223 9.72943 9.72639 10.1788C9.33048 10.6282 9.11206 11.2065 9.11206 11.8054C9.11206 12.4043 9.33048 12.9826 9.72639 13.432C10.1223 13.8814 10.6685 14.1709 11.2626 14.2464C11.8567 14.3218 12.458 14.178 12.9536 13.8419C13.4493 13.5058 13.8054 13.0004 13.9551 12.4205H17.8207C17.9545 12.9485 18.2606 13.4167 18.6904 13.7512C19.1202 14.0857 19.6493 14.2673 20.1939 14.2673C20.7386 14.2673 21.2677 14.0857 21.6975 13.7512C22.1273 13.4167 22.4334 12.9485 22.5672 12.4205H23.8848C24.048 12.4205 24.2044 12.3557 24.3198 12.2404C24.4352 12.125 24.5 11.9685 24.5 11.8054V7.49936C24.5 7.41602 24.4831 7.33356 24.4502 7.25699ZM11.5819 13.0357C11.3385 13.0357 11.1007 12.9635 10.8984 12.8283C10.696 12.6932 10.5383 12.501 10.4452 12.2762C10.3521 12.0514 10.3277 11.804 10.3752 11.5654C10.4227 11.3267 10.5399 11.1075 10.7119 10.9354C10.884 10.7634 11.1032 10.6462 11.3419 10.5987C11.5805 10.5513 11.8279 10.5756 12.0527 10.6687C12.2775 10.7619 12.4696 10.9196 12.6048 11.1219C12.74 11.3242 12.8122 11.5621 12.8122 11.8054C12.8118 12.1316 12.6821 12.4443 12.4515 12.675C12.2208 12.9056 11.9081 13.0354 11.5819 13.0357ZM20.1939 3.80847H21.6334L22.9523 6.88421H20.1939V3.80847ZM20.1939 13.0357C19.9506 13.0357 19.7128 12.9635 19.5104 12.8283C19.3081 12.6932 19.1504 12.501 19.0573 12.2762C18.9642 12.0514 18.9398 11.804 18.9873 11.5654C19.0348 11.3267 19.1519 11.1075 19.324 10.9354C19.4961 10.7634 19.7153 10.6462 19.9539 10.5987C20.1926 10.5513 20.44 10.5756 20.6648 10.6687C20.8896 10.7619 21.0817 10.9196 21.2169 11.1219C21.3521 11.3242 21.4242 11.5621 21.4242 11.8054C21.4239 12.1316 21.2942 12.4443 21.0635 12.675C20.8329 12.9056 20.5201 13.0354 20.1939 13.0357ZM23.2697 11.1902H22.5672C22.4317 10.6633 22.1252 10.1963 21.6957 9.8623C21.2662 9.52833 20.738 9.34632 20.1939 9.3448V8.11451H23.2697V11.1902Z" fill={color} />
    </Svg>

  );
}
