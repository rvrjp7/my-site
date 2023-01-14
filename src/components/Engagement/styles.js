import styled from 'styled-components'
export const MainContainer = styled.div`
    background: #fdf2de;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    img{
        max-height: calc(100vh - 200px);
        object-fit: contain;
        width: 100%;
    }
`