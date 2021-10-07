import styled from "styled-components";

export const Container= styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9rem;
  div{
    background-color:#ffffff;
    padding:1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
  }
  
  
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  strong{
    font-size: 2rem;
    font-weight:500;
    margin-top: 1rem;
    line-height: 3rem;
  }
  div.total {
    background-color: var(--green);
    color: #fff;
  }
 `;