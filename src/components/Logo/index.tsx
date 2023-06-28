import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 858 248"
      role="img"
      aria-label="Leadster"
    >
      <path
        fill="url(#a)"
        d="M153.44 191.827c-5.578 3.451-12.705 1.408-15.921-4.578l-35.223-65.486-35.223 65.478c-3.216 5.985-10.35 8.029-15.921 4.578-5.578-3.451-7.49-11.107-4.267-17.084l35.223-65.477H11.654C5.214 109.258 0 103.662 0 96.752s5.215-12.505 11.654-12.505h90.642c4.164 0 8.012 2.382 10.09 6.257l45.32 84.24c3.224 5.977 1.312 13.624-4.266 17.083Z"
      />
      <path
        fill="url(#b)"
        d="M139.281 103.009c2.086 3.866 5.926 6.249 10.09 6.249h43.558c6.44 0 11.655-5.596 11.655-12.506s-5.215-12.505-11.655-12.505h-43.558c-8.968 0-14.578 10.42-10.09 18.762Z"
      />
      <path
        fill="url(#c)"
        d="M153.44 1.677c-5.578-3.45-12.705-1.407-15.921 4.578l-26.042 48.403c-3.216 5.985-1.312 13.633 4.267 17.083 5.57 3.451 12.697 1.4 15.92-4.578l26.042-48.402c3.216-5.977 1.312-13.625-4.266-17.084Z"
      />
      <path
        fill="url(#d)"
        d="M93.067 54.666 67.073 6.256C63.857.277 56.73-1.775 51.152 1.676h-.008c-5.578 3.45-7.482 11.098-4.267 17.084l25.995 48.402c2.078 3.866 5.926 6.249 10.09 6.249h.008C91.945 73.42 97.555 63 93.067 54.666Z"
      />
      <path
        className="text"
        fill="currentColor"
        d="M343.516 137.202h-73.037V31.495h21.427v85.893h51.618v19.814h-.008ZM346.479 97.727c0-32.683 26.414-41.357 40.296-41.357 19.002 0 38.005 13.88 38.676 39.475 0 6.071-.403 9.979-.403 9.979h-58.484c2.426 13.014 16.174 14.464 20.211 14.464 11.188 0 16.711-6.503 19.002-9.258l15.637 9.69c-2.963 4.341-12.934 18.508-34.631 18.508-14.427 0-40.304-8.817-40.304-41.5Zm20.615-7.232h37.056c-.806-7.232-7.411-15.184-17.517-15.184-11.583 0-18.726 7.088-19.539 15.184ZM489.869 129.249c-3.097 4.485-11.994 9.691-22.503 9.691-23.45 0-37.198-18.652-37.198-41.501 0-22.849 13.748-41.501 37.198-41.501 10.778 0 18.734 4.63 22.503 9.979v-8.241h19.942v79.535h-19.942v-7.962Zm-19.54-54.37c-12.799 0-20.345 9.546-20.345 22.56 0 12.582 7.949 22.417 20.345 22.417 12.532 0 20.346-8.53 20.346-22.417 0-13.158-7.814-22.56-20.346-22.56ZM575.17 129.249c-3.098 4.485-11.994 9.691-22.503 9.691-23.45 0-37.198-18.652-37.198-41.501 0-22.849 13.748-41.501 37.198-41.501 10.785 0 18.734 4.63 22.503 9.979V27.883h19.942v109.328H575.17v-7.962Zm-19.54-54.37c-12.8 0-20.345 9.546-20.345 22.56 0 12.582 7.948 22.417 20.345 22.417 12.531 0 20.346-8.53 20.346-22.417.007-13.158-7.815-22.56-20.346-22.56ZM601.448 126.647l10.509-15.041c5.791 4.197 15.091 8.529 23.988 8.529 6.202 0 10.642-3.035 10.642-7.088 0-5.349-10.374-5.926-14.285-6.655-10.105-1.882-29.376-5.061-29.376-25.02 0-23.28 23.45-25.163 30.593-25.163 11.725 0 21.159 3.612 30.862 11.42l-10.509 14.753c-5.523-3.468-12.8-7.377-21.025-7.377-3.911 0-9.702 2.027-9.702 5.927 0 5.35 10.777 6.655 14.016 7.088 12.531 2.314 29.511 4.629 29.511 25.163 0 16.482-11.054 25.884-30.459 25.884-15.897.017-26.674-5.477-34.765-12.42ZM698.214 108.859c0 4.341.134 11.861 9.165 11.861 2.291 0 3.911-.144 5.12-.288v18.22c-2.426.288-6.202.576-9.031.576-15.636 0-25.197-3.035-25.197-19.813V75.311h-9.031V56.37h9.031V35.114h19.943V56.37h14.822v18.94h-14.822v33.549ZM715.596 97.727c0-32.683 26.413-41.357 40.295-41.357 19.003 0 38.005 13.88 38.676 39.475 0 6.071-.403 9.979-.403 9.979h-58.492c2.426 13.014 16.174 14.464 20.212 14.464 11.187 0 16.71-6.503 19.002-9.258l15.636 9.69c-2.963 4.341-12.934 18.508-34.631 18.508-14.427 0-40.295-8.817-40.295-41.5Zm20.614-7.232h37.056c-.806-7.232-7.411-15.184-17.517-15.184-11.591 0-18.725 7.088-19.539 15.184ZM821.25 102.068v35.143h-20.077V57.676h20.077v10.555c7.545-10.7 20.076-12.149 25.338-12.005v21.111c-4.859-.432-25.338.577-25.338 24.731Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          x2="15927.2"
          y1="5547.07"
          y2="5547.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E84FC" />
          <stop offset="1" stopColor="#035DDB" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="137.759"
          x2="6826.29"
          y1="1334.82"
          y2="1334.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E1FF" />
          <stop offset="1" stopColor="#00B8FF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="109.413"
          x2="5045.59"
          y1="3671.13"
          y2="3671.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E1FF" />
          <stop offset="1" stopColor="#00B8FF" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="45.485"
          x2="4978.6"
          y1="3670.95"
          y2="3670.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E1FF" />
          <stop offset="1" stopColor="#00B8FF" />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
