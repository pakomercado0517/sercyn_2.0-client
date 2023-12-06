import { Button, Card } from "flowbite-react";
// import { Link } from "react-router-dom";
// import s from "./Styles/Card.module.css";

function CardComponent({ photo, name, handleClickDetail, price, buttonText }) {
  return (
    <section>
      {/* New style fot card */}
      <Card
        renderImage={() => (
          <img src={photo} alt={name} className="w-[360px] h-64 rounded-t-lg" />
        )}
      >
        <div className="flex flex-col">
          <h5 className="text-xl tracking-wide text-cyan-600 font-seminbold">
            {name}
          </h5>
          <div className="grid grid-cols-2 mt-1">
            {price && (
              <div className="flex flex-col">
                <span className="text-xs mt-1 font-bold">Desde</span>
                <p className="text-3xl font-bold text-gray-700">${price}</p>
                <span className="text-xs font-bold">(a Isla de Lobos)</span>
              </div>
            )}
            <Button className="h-12 self-end" onClick={handleClickDetail}>
              {buttonText}
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default CardComponent;
