import styled from "styled-components";

export const Container = styled.div` 
    height: 7vh;   

    .header {
        padding-top: 3vh !important;
        display: flex !important; 
        align-items: center !important;
        margin-bottom: 40px;
        padding-bottom: 3vh !important;

        background-color: #2c2c2c; 
        border-bottom: 5px outset #fff;    
    }
    
    a.navbar-brand{
        color: #fff;
        text-decoration: none;
        font-size: 3vh;
        font-weight: bold;
        margin-left: 2vw;
    }
    a.navbar-brand:hover {
        color: #fff;
    }
    .form-control{
        width: 15vw;
        height: 4.5vh;
    }
    .btn-outline-success {
        color: #fff !important;
        border-color: #007bff !important;
    }
    .btn-outline-success:hover {
        background-color: #007bff !important;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 5px outset #9c9c9c;
    padding-bottom: 2vh;
    padding-top: 2vh;
    border-radius: 20px;
    transition: transform 0.3s; 

    &:hover {
        transform: scale(1.1); 
    }

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 100%;
        text-align: center;
        padding-left: 1vw;
        padding-rigth: 1vw;
        padding-bottom: 1vh;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #ffff;
    background-color: #3E7786;
    border: 2px outset #007bff;
    font-weight: 800;
    font-size: 12 px;
    cursor: pointer;
    transition: all 300ms;
`;
