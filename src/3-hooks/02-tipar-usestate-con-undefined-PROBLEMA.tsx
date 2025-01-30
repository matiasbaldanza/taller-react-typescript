import { useEffect, useState } from "react";

interface Data {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({ id: 1, name: "John" });
};

export const Component = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData().then((val) => {
      setData(val);
    });
  }, []);
};
