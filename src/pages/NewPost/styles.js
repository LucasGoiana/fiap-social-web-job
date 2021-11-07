import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
`;

export const FormNewPost = styled.form`
    display: flex;
    flex-direction: column;

    padding: 14px;
    gap: 10px;

    > h1 {
        color: var(--primary);
        text-align: center;
    }

    select, input {
        border: none;
    }

    > button {
        height: 35px;
    }

    > img {
        display: none;
    }
`;