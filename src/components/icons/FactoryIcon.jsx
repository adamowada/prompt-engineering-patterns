import { DarkMode, Gradient, LightMode } from '@/components/Icon'

export function FactoryIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <svg fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <g id="Layer_2" data-name="Layer 2"> 
              <g id="Layer_1-2" data-name="Layer 1"> 
                <path d="M14,11.05V8.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V11H6V8.5A.5.5,0,0,0,5.5,8h-3a.5.5,0,0,0-.5.5v2.55A2.5,2.5,0,0,0,2.5,16h11a2.5,2.5,0,0,0,.5-4.95ZM6,12a2.46,2.46,0,0,0,0,3H4.49a2.46,2.46,0,0,0,0-3H6Zm.49,1.5A1.5,1.5,0,1,1,8,15,1.5,1.5,0,0,1,6.5,13.5ZM10,12h1.52a2.46,2.46,0,0,0,0,3H10a2.46,2.46,0,0,0,0-3Zm1-3h2v2H11ZM3,9H5v2H3ZM1,13.5A1.5,1.5,0,1,1,2.5,15,1.5,1.5,0,0,1,1,13.5ZM13.5,15A1.5,1.5,0,1,1,15,13.5,1.5,1.5,0,0,1,13.5,15ZM2,7A.5.5,0,0,0,2,6,1,1,0,1,1,3,5,.5.5,0,0,0,4,5,2,2,0,0,0,2,3V2H6a2,2,0,0,0,4,0h4V3a2,2,0,0,0-2,2,.5.5,0,0,0,1,0,1,1,0,1,1,1,1,.5.5,0,0,0,0,1,2,2,0,0,0,1-3.72V1.5a.5.5,0,0,0-.5-.5H9.72A2,2,0,0,0,6.28,1H1.5a.5.5,0,0,0-.5.5V3.28A2,2,0,0,0,2,7ZM8,1A1,1,0,1,1,7,2,1,1,0,0,1,8,1Z"></path> 
              </g> 
            </g> 
          </g>
        </svg>
      </LightMode>
      <DarkMode fill={`url(#${id}-gradient-dark)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
        />
        <path d="M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" />
      </DarkMode>
    </>
  )
}
