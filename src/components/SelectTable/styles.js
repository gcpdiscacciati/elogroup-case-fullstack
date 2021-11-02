import styled from 'styled-components';

export const Table = styled.table`
    border: solid 2px black;
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
`;

export const Row = styled.tr`
    height: 10px;
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
`;