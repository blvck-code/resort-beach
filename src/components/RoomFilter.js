import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
// get unique items
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, idx) => (
    <option value={item} key={idx}>
      {item}
    </option>
  ));
  // capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, idx) => (
    <option key={idx} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              className="size-input"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
