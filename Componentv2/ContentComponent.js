import { useState } from "react";
import { FlatList } from "react-native";
import { Recommendv3 } from "../Util/tempData";
import ContentItemsComponent from "./ContentItemsComponent";

export default function ContentComponent() {
  const [isData, setData] = useState(Recommendv3);

  function formData(data, numColumns) {
    const totalRows = Math.floor(data.length / numColumns);
    let emptyRows = data.length - totalRows * numColumns;

    while (totalRows !== 0 && emptyRows !== numColumns) {
      isData.push({ _id: "", empty: true });
      emptyRows++;
    }

    return isData;
  }

  return (
    <FlatList
      data={formData(isData, 2)}
      numColumns={2}
      columnWrapperStyle={{ backgroundColor: "white" }}
      renderItem={ContentItemsComponent}
    />
  );
}
