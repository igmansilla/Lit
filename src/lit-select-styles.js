import { css } from "lit-element";

export const litSelectStyles = css`
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
