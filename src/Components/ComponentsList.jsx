import { useEffect } from "react";
import CardComponent from "./CardCompnent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBoatById, getGlobalRatingFromBoat } from "../redux/actions";

export default function ComponentList({ item, routeComponent }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDetail = async (id) => {
    await dispatch(getGlobalRatingFromBoat(id));
    await dispatch(getBoatById(id));
    navigate(routeComponent === "" ? "/boats" : routeComponent);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {item.length > 0 ? (
          item.map((el) => {
            let boats;
            el.Boat ? (boats = el.Boat) : (boats = el);
            return (
              <CardComponent
                key={boats?.id}
                id={boats.id}
                photo={boats.photo}
                name={boats.name}
                handleClickDetail={() => handleClickDetail(boats.id)}
                buttonText={
                  routeComponent === "" ? "Ver Embarcaciones" : "Ver detalle"
                }
                price={
                  el.Prices && el.Prices.length > 0
                    ? el.Prices.map((el) =>
                        el.DestinationId === 1 ? el.price : ""
                      )
                    : ""
                }
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
