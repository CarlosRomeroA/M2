import React, { useState } from "react";

export default function SearchBar({onSearch}) {

const [input, setInput] = useState('');

function seEmvioLaInfo(e) {
  e.preventDefault();
  if(!input) return alert("debes escribir el nombre de una ciudad")
  else {
    onSearch(input);
    setInput('')
  };  
}

const onInputChange = (e) => {
  setInput(e.target.value)
}

  return (
    <form onSubmit={(e) => seEmvioLaInfo(e)}>
      <input
        value={input}
        onChange={(e) => onInputChange(e)}
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
