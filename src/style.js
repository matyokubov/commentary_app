import styled from "styled-components"

export const Container = styled.div`
    padding: 1rem;
    border-radius: 7px;
    margin: 5rem auto;
    width: 500px;
    background-color: #FFF;
    h1, h3{
        margin-top: 0;
    }
`

export const Post = styled.div`
    padding: 0.5rem 1rem;
    background-color: #CACACA;
    border-radius: 4.5px;
`

export const PostComments = styled.div`
    margin-top: 1rem;
    background-color: #9AB7CA;
    >table{
        width: 100%;
        >thead>th{
            width: 50%;
        }
    }
`

export const SendComment = styled.div`
    margin-top: 1rem;
    textarea{
        width: 100%;
        height: 100px;
    }
    button{
        margin-top: 0.5rem;
        width: 100%;
        height: 50px;
        background-color: #31A3E7;
        color: #FFF;
        border: none;
        border-radius: 4.5px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        :active{
            background-color: #3188E7;
        }
    }
`