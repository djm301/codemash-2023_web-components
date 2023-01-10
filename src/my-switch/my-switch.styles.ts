import { css } from 'lit';

export const styles = css`
:host{
    display: inline-block;
}
.control{
    padding:0;
    background-color: transparent;
    border: 0;
}

/* make switch shift to the right if  */
[aria-checked="true"] .switch{
    margin-left:auto;
}
[disabled] .track{
    background-color: lightgray;
    border-color: lightgray;
}
[disabled]{
    cursor:not-allowed;
}
.track {
    width: calc(var (--size) * 2);
    height: var (--size);
    background-color: teal;
    border-radius: var(--size);
    border: solid teal calc(var(--size)/8); 
}
.switch{
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 1rem;
}

`;