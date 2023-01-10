import { css } from 'lit';

export const styles = css`
.control{
    padding:0;
    background-color: transparent;
    border: 0;
}

#make switch shift to the right if true
[aria-checked="true"] .switch{
    margin-left:auto;
}
.track {
    width: 2rem;
    height: 1rem;
    background-color: teal;
    border-radius: 1rem;
}
.switch{
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 1rem;
}

`;