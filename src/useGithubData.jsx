import { useState, useEffect } from "react";
import { githubUrl } from "./constants";

export default () => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(githubUrl);
        if (response.ok) {
          const jsonData = await response.json();
          if (!Object.keys(jsonData).length)
            throw new Error("No Data from Github");
          setData(jsonData);
        } else {
          throw new Error("Bad response from Github");
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return data;
};
