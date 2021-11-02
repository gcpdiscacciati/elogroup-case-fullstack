import styled from 'styled-components';

export const Table = styled.table`
    border: solid 2px black;
    border-collapse: collapse;
    width: 100%;
`;

export const Row = styled.tr`
    height: 70px;
    &:nth-child(even){
        background-color: #ddd;
    }
`;

export const Title = styled.th`
    border: solid 2px black;
    background-color: #777;
    color: white;
    position: sticky;
    top: 0;
`;

export const TableItem = styled.td`
    border: solid 2px black;
    cursor: pointer;
`;

export const Panel = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    height: 492px;
`;