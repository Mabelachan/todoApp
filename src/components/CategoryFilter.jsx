import Select, { components } from "react-select";

// const Option = (props) => (
//   <components.Option {...props}>
//     <input
//       type="checkbox"
//       checked={props.isSelected}
//       onChange={() => null}
//       style={{ marginRight: "8px" }}
//     />
//     <label>{props.label}</label>
//   </components.Option>
// );

function CategoryFilter({ categorias, categoriaFiltro, setCategoriaFiltro }) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#fff",
      borderColor: state.isFocused ? "#a54ae2ff" : "#ccc",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(173, 74, 226, 0.3)" : "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#8e4ae2ff"
        : state.isFocused
        ? "#f9eaffff"
        : "#fff",
      color: state.isSelected ? "#fff" : "#000",
      fontSize: "1rem",
      padding: "10px 12px",
      cursor: "pointer",
    }),
  };

  return (
    <Select
      isMulti
      options={ categorias }
      value={ categorias.filter(( cat ) => categoriaFiltro.includes( cat.value ) )}
      onChange={( selectedOptions ) => setCategoriaFiltro( selectedOptions.map((opt) => opt.value)) }
      styles={ customStyles }
      placeholder="Categorías..."
    />
  );
}

export default CategoryFilter;
