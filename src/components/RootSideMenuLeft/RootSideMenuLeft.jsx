/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRecoilState } from "recoil";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtoms";
import { Link } from "react-router-dom";

function RootSideMenuLeft() {

    const [show, setShow ] = useRecoilState(menuState);

    const handleCloseClick = () => {
        setShow(() => false)
    }

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>

            <div css={s.profile}>

            </div>

            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    
    );
}

export default RootSideMenuLeft;