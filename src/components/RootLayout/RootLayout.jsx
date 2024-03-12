/** @jsxImportSource @emotion/react */
import * as s from "./style"


function RootLayout({children}) {
    return (
        <>
            <div css={s.background}></div>
            <dir css={s.layout}> 
                {children}
            </dir>
        </>
    );
}

export default RootLayout;