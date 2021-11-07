import styled from "styled-components";

export const CardPost = styled.article`
    margin: 14px;

    background-color: var(--bgSecondary);

    > header {
        padding: 18px;

        display: flex;
        align-items: center;
        gap: 10px;

        > div {
            > p{
                font-size: 18px;
                font-weight: bold;
            }

            > span {
                font-size: 14px;
            }
        }
    }

    > main{
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
            width: 100%;
            padding: 0px 18px;
            > h1 {
                font-size: 22px;
                font-weight: bold;
            }

            > p {
                padding-left: 20px;
                margin-top: 10px;
                border-left: 3px solid var(--primary);
            }
        }

        > img {
            margin-top: 18px;
            max-width: 100%;
            height: auto;
        }

        > footer {
            width: 100%;
            display: flex;
            padding: 18px;
            gap: 5px;

            > p {
                background-color: var(--bgPrimary);
                padding: 4px 8px;
            }
        }
    }

    > footer{
        padding: 0px 18px 18px 18px;

        > h3{
            font-size: 18px;
            margin-bottom: 6px;
            transition: .2s;

            :active{
                color: var(--primary);
            }
        }

        > div {
            display: flex;
        }
    }
`;

export const CardComent = styled.article`
    background-color: var(--bgPrimary);
    margin-bottom: 10px;

    padding: 10px;

    > header{
        display: flex;
        align-items: center;
        gap: 5px;

        > img {
            width: 40px;
        }

        > div > p {
            font-weight: bold;
        }

        > div > span{
            font-size: 14px;
        }
    }

    > p {
        margin-top: 14px;
        border-left: 3px solid var(--primary);
        padding-left: 10px;
    }
`;
