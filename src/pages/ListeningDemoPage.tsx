import React from "react";
import data from "../data/listening/en-el-supermercado.json";
import ListeningView from "../components/ListeningView";

export default function ListeningDemoPage() {
  return <ListeningView data={data} />;
}
