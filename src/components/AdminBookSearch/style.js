import { css } from "@emotion/react";

export const searchBar = css`
    box-sizing: border-box;
    display: flex;
    margin: 5px 0px;
    border: 1px solid #dbdbdb;
`;

export const searchInput = css`
    box-sizing: border-box;
    flex-grow: 1;
    border: none;
    border-left: 1px solid #dbdbdb;
    outline: none;
    padding: 10px;
    background-color: #fdfdfd;
    box-shadow: inset 0px 0px 5px #00000011;
`;

export const searchButton = css`
    box-sizing: border-box;
    border: none;
    border-left: 1px solid #dbdbdb;
    width: 60px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;



export const tableLayout = css`
    position: relative;
    border: 1px solid #dbdbdb;
    height: 160px;
    background-color: white;
    overflow: auto;

    &::-webkit-scrollbar {
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        background-color: #fdfdfd;
    }

    &::-webkit-scrollbar-thumb {
        box-sizing: border-box;
        border: 1px solid #fdfdfd;
        background-color: #dbdbdb;
    }
`;

export const table = css`
    border-collapse: collapse;
    width: max-content;

    & td, & th {
        border: 1px solid #dbdbdb;
        padding: 0px 5px;
    }
    & th {
        border-top: none;
    }
    & td {
        font-size: 14px;
    }
    & tr > td:nth-of-type(1),
    & tr > th:nth-of-type(1) {
        border-left: none;
    }
    & tr > td:nth-last-of-type(1),
    & tr > th:nth-last-of-type(1) {
        border-right: none;
    }

    & tr > th:nth-of-type(1),
    & tr > td:nth-of-type(1) {
        text-align: center;
        min-width: 30px;
    }

    & tr > th:nth-of-type(2),
    & tr > td:nth-of-type(2) {
        min-width: 80px;
    }
    & tr > td:nth-of-type(2) {
        text-align: right;
    }

    & tr > th:nth-of-type(3),
    & tr > td:nth-of-type(3) {
        min-width: 250px;
    }

    & tr > th:nth-of-type(4),
    & tr > td:nth-of-type(4) {
        min-width: 150px;
    }

    & tr > th:nth-of-type(5),
    & tr > td:nth-of-type(5) {
        min-width: 150px;
    }

    & tr > th:nth-of-type(6),
    & tr > td:nth-of-type(6) {
        min-width: 150px;
    }

    & tr > th:nth-of-type(7),
    & tr > td:nth-of-type(7) {
        min-width: 100px;
    }

    & tr > th:nth-of-type(8),
    & tr > td:nth-of-type(8) {
        min-width: 100px;
    }

    & tr > th:nth-of-type(9),
    & tr > td:nth-of-type(9) {
        min-width: 100px;
    }

`

export const theadTr = css`
    position: sticky;
    top: 0;
    background-color: #fdfdfd;
`