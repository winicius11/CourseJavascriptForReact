import CardGame from "../CardGame";

function CardFrontBack(){
    return  /*html*/`
      <article>
        ${CardGame()}
        ${CardGame("javascript", "Logo da Alura")}
      </article>
    `;
}

export default CardFrontBack;