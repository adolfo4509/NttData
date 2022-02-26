import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/intex";
import { useEffect } from "react";
import "../../css/styles.css";

const Body = ({ searchsend }) => {
  let allClash = useSelector((state: RootStateOrAny) => state.clash);

  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  const [Search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let datos = allClash.items;

  console.log(datos);
  const showlist = () => {
    let data =
      datos &&
      datos?.map((e) => {
        let local;
        let chat;
        if (!e.location || !e.chatLanguage) {
        } else {
          local = e.location.name;
          chat = e.chatLanguage.name;
        }
        return (
          <div className="nombre">
            <div>
              <div className="listar">
                <p>Tipo: {e.type}</p>
                <p>Ubicacion: {local}</p>
                <p>Lenguaje Chat: {chat}</p>
              </div>
              {e.labels.map((e, ID) => {
                return (
                  <div key={ID} className="cards">
                    <img src={e.iconUrls.small} alt="" />
                    <p>{e.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      });

    return data;
  };

  const filterData = () => {
    if (searchsend) {
      return datos.filter((e) =>
        e.name.toLowerCase().includes(searchsend.toLowerCase())
      );
    } else if (value !== "Asc") {
      switch (Search) {
        case "Asc":
          //carga por orden letra a z
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA < NombreB) return -1;
            if (NombreA > NombreB) return 1;
            return 0;
          });

        case "Des":
          //carga por orden desc letra z-a
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA > NombreB) return -1;
            if (NombreA < NombreB) return 1;
            return 0;
          });

        case "LocAsc":
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA < NombreB) return -1;
            if (NombreA > NombreB) return 1;
            return 0;
          });
        case "LocDes":
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA > NombreB) return -1;
            if (NombreA < NombreB) return 1;
            return 0;
          });
        case "chatAsc":
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA < NombreB) return -1;
            if (NombreA > NombreB) return 1;
            return 0;
          });
        case "chatDes":
          return datos.sort((a, b) => {
            const NombreA = a.name.toLowerCase();
            const NombreB = b.name.toLowerCase();

            if (NombreA > NombreB) return -1;
            if (NombreA < NombreB) return 1;
            return 0;
          });
        default:
          return datos;
      }
    }

    return datos;
  };

  const handleSortAsc = (e) => {
    setvalue("");
    setSearch(e.target.value);
    filterData();
  };

  return (
    <div className="cuerpo">
      <h1>Clahs of clans</h1>

      <div className="filter">
        <label htmlFor="state">Filtrar por Etiquetas:</label>
        <select id="state" onChange={(e) => handleSortAsc(e)}>
          <option className="ordenar" value="Asc">
            Ascendente
          </option>
          <option className="ordenar" value="Des">
            Descendente
          </option>
        </select>
        <label htmlFor="state1">Filtrar Ubicación:</label>
        <select id="state1" onChange={(e) => handleSortAsc(e)}>
          <option className="ordenar" value="LocAsc">
            Ascendente
          </option>
          <option className="ordenar" value="LocDes">
            Descendente
          </option>
        </select>{" "}
        <label htmlFor="state2">Filtrar por Idioma:</label>
        <select id="state2" onChange={handleSortAsc}>
          <option className="ordenar" value="chatAsc">
            Ascendente
          </option>
          <option className="ordenar" value="chatDes">
            Descendente
          </option>
        </select>
      </div>

      {showlist()}
    </div>
  );
};

export default Body;
