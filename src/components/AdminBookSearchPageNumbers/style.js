import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    width: 100%;

`;

export const pageNumbers = css`
    box-sizing: border-box;
    display: flex;

`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding: 2px 5px;
    border: ${isSelected ? "none" : "1px solid #dbdbdb"};
    border-radius: 2px;
    background-color: ${isSelected ? "#dbdbdb" : "white"};
    text-decoration: none;
    font-size: 10px;
    color: ${isSelected ? "white" : "#777777"};
`;



export const pageCount = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px;
    height: 25px;
    background-color: white;
    color: #777777;
    cursor: default;
`;

export const page = css`
    margin-right: 10px;
    font-size: 14px;
`;

export const count = css`
    font-size: 14px;
`;