import { css } from "lit-element";

export const litSelectStyles = css`
  :root {
    --color__red--100: #ff8da3;
    --color__red--200: #fe718e;
    --color__red--300: #fd566c;
    --color__red--400: #fc273f;
    --color__red--500: #d31b3d;
    --color__red--600: #aa1834;
    --color__red--800: #641432;
    --color__blue--100: #acc2dd;
    --color__blue--500: #42638c;
    --color__blue--600: #2e4869;
    --color__blue--650: #042b43;
    --color__blue--680: #04273c;
    --color__blue--700: #172f48;
    --color__blue--800: #031f30;
    --color__blue--900: #011523;
    --color__purple--100: #c2b4fc;
    --color__purple--400: #8d5fff;
    --color__purple--600: #55419e;
    --color__purple--800: #26224c;
    --color__white: #fff;
    --color__grey--input: #f3f3f3;
    --color__grey--100: #f7f7f7;
    --color__grey--200: #f8f8f8;
    --color__grey--300: #e5e5e5;
    --color__grey--400: #d7d8d6;
    --color__grey--500: #babcbc;
    --color__grey--600: #9c9ea0;
    --color__grey--800: #53565a;
    --color__success: #8dbf3d;
    --color__warning: #f6c348;
    --color__danger: #fc273f;
  }

  .container {
    display: flex;
    position: relative;
    width: 100%;
  }

  .lit-select-container {
    display: flex;
    cursor: pointer;
    flex: 1;
  }

  .lit-select-container > span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: var(--color__grey--input);
    border: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .lit-select-container.disabled > span {
    background-color: rgb(181 181 181 / 77%);
    color: rgb(0 0 0 / 42%);
  }

  .lit-select-code {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0.5rem 0.8rem 1rem;
    font-size: 13px !important;
    font-family: "securitas bold";
    text-align: center;
    color: var(--color__red--400);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  .lit-select-description {
    flex-grow: 1;
    justify-content: center;
    display: flex;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    align-items: center;
    max-width: 75%;
    padding: 0.8rem 0rem;
    color: var(--color__blue--680);
  }

  .lit-select-icon {
    flex: 1;
    display: flex;
    width: 5%;
    max-width: 5%;
    transition: transform 0.3s linear;
    padding: 0.8rem 1rem 0.8rem 0.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background: url("caret-down.svg") no-repeat center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 16px 12px;
  }

  input {
    border: 0px;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: inherit;
    margin-bottom: 0.7rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  input:focus {
    outline: none;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 43%,
        #000 45%,
        #000 55%,
        rgba(0, 0, 0, 0) 57%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        135deg,
        transparent 0%,
        transparent 43%,
        #000 45%,
        #000 55%,
        transparent 57%,
        transparent 100%
      );
  }

  .body {
    display: none;
    opacity: 0;
    overflow-y: overlay;
    padding: 1rem 0rem;
    margin-top: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 1rem;
    transition: max-height 0.3s linear, opacity 0.3s linear;
  }

  .body.open {
    margin-top: 3.5rem;
    display: block;
    position: absolute;
    z-index: 1000;
    max-height: 15rem;
    width: 100%;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    opacity: 1;
  }

  .body.closed {
    max-height: 0;
    opacity: 0;
  }

  .option {
    color: var(--color__blue--680);
    position: relative;
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    transition: color 0.1s linear;
    opacity: 1;
    cursor: pointer;
  }

  .option::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .option:hover {
    color: var(--color__red--400);
  }

  .container-inputs {
    display: flex;
  }
  .checkbox-wrapper input[type="checkbox"] {
    width: 4rem;
    height: 1rem;
  }
  lit-label {
    margin: 0px;
  }

  /*CUSTOM SCROLLBAR*/
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f3f3f3;
    border-radius: 25px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #babcbc;
  }
`;
